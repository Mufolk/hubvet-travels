import { mapActions } from "vuex";

export default {
  name: "HomePage",
  data() {
    const defaultForm = Object.freeze({
      city: '',
      combo: '',
      mainSearch: '',
      monetaryValue: '',
      tags: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      combos: ['voos', 'hotéis', 'carros', 'pacotes'],
      monetaryValue: '',
      snackbar: false,
      defaultForm,
      mainSearch: null,
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
      ],
      items: [
        { header: 'Select an option' },
        {
          text: 'Liquidation',
          color: 'red',
        },
        {
          text: 'New',
          color: 'yellow',
        },
        {
          text: 'Last days',
          color: 'purple',
        },
      ],
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
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit() {
      this.snackbar = true
      this.saveAllFilters();
      this.resetForm()
    },
    ...mapActions(['saveFilter']),
    saveAllFilters() {

      this.saveFilter(this.defaultForm);
      console.log('salvei na store');
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
