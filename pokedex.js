// create a new Vue.js app
const app = new Vue({
  // specify the root element for the app
  el: '#pokedex',
  // define the data for the app
  data: {
    searchQuery: '',
    pokemon: [],
    selectedPokemon: null
  },
  // define a computed property for filtering the list of Pokemon
  computed: {
    filteredPokemon() {
      // filter the list of Pokemon based on the search query
      return this.pokemon.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  },
  // define a method for fetching a list of Pokemon from the API
  methods: {
    async getPokemonList() {
      // make a GET request to the Pokemon API to get a list of Pokemon
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      // store the list of Pokemon in the data
      this.pokemon = response.data.results
    },
    // define a method for fetching a single Pokemon from the API
    async getPokemon(url) {
      // make a GET request to the Pokemon API to get the details of a single Pokemon
      const response = await axios.get(url)
      // store the selected Pokemon in the data
      this.selectedPokemon = response.data
    }
  },
  // lifecycle hook that is called when the app is created
  created() {
    // fetch the list of Pokemon when the app is created
    this.getPokemonList()
  }
})
