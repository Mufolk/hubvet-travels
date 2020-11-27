import { mapGetters } from 'vuex';
export default {
  name: "TablePage",
  data() {
    return {
      city: null,
      monetaryValue: null,
      itemsPerPageArray: [4, 8, 12],
      search: null,
      filter: null,
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'name',
      selected: [],
      selectedTags: [],
      expanded: [],
      headers: null,
      tags: null,
      items: null,
      tab: null,
      itemTypes: null,
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys() {
      return this.keys.filter(key => key !== 'Name')
    },
    ...mapGetters(['getItems', 'getHeaders', 'getTags', 'getItemTypes', 'getFilter']),
  },
  watch: {
    monetaryValue: function(){
      this.changePriceValue();
    },

    //Here would come the data that would be added to the shipping chart
    selected: function(){

    }
  },
  created() {
    this.items = this.getItems;
    this.headers = this.getHeaders;
    this.tags = this.getTags;
    this.itemTypes = this.getItemTypes;
    this.setFilters();
  },
  methods: {
    setFilters() {
      //Here I check if the filter in the store, an array
      //is undefined, need to avoid bugs
      if (this.getFilter[0] !== undefined) {
        this.filter = this.getFilter;
        this.search = this.filter[0].mainSearch;
        this.city = this.filter[0].city;
        this.monetaryValue = this.filter[0].monetaryValue;
        this.selectedTags = this.filter[0].tags;
        this.changePriceValue();
      } else {
        return
      }
    },

    changePriceValue(){
      //here is the method that is gonna to be called 
      //to detect wich money visualization is required
      if(this.monetaryValue === 0){
        this.headers[2].value = 'price.monetaryValue'; 
      } else {
        this.headers[2].value = 'price.milesValue';
      }
    },

    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },

    //router to get back to the main page
    toMainPage() {
      this.$router.go(-1);
    },
  },
};
