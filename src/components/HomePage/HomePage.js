import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomePage",
  data() {
    const defaultForm = Object({
      city: null,
      combo: null,
      mainSearch: null,
      monetaryValue: null,
      tags: null
    })
    return {
      form: Object.assign({}, defaultForm),
      combos: null,
      monetaryValue: '',
      snackbar: false,
      defaultForm,
      mainSearch: null,
      places: null,
      items: null,
      tags: [],
    }
  },
  computed: {
    formIsValid() {
      return (
        this.form.combo &&
        this.form.mainSearch &&
        this.form.city && 
        this.form.tags
      )
    },

    ...mapGetters(['getPlaces', 'getTags', 'getItemTypes']),
  },

  created(){
    this.places = this.getPlaces;
    this.items = this.getTags;
    this.combos = this.getItemTypes;
  },

  methods: {
    ...mapActions(['saveFilter']),
    resetForm() {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit() {
      this.snackbar = true;
      this.saveAllFilters();
      this.$router.push({ path: 'tablePage' })
      this.resetForm()
    },
    saveAllFilters() {      
      this.saveFilter(this.form)
    }
  },
  // data: () => ({
  //   filter: {
  //     keyWord: '',
  //     monetaryFlag: '',
  //     tags: [''],
  //     itemType: '',
  //     city: '',
  //   }
  // }),

  // methods: {
  
  // },

  // computed: mapGetters([getFilter]),
};
