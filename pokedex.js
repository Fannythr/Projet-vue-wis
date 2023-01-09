// création de Vue.js 
Vue.createApp({
  // Définition des données
  
  data(){return{
    searchQuery: '',
    pokemon: [],
    selectedPokemon: null
  }},
  // Filtre
  computed: {
    filteredPokemon() {
      // filtrer la list des pokemon
      return this.pokemon.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  },
  // Définir une méthode pour aller chercher la liste des Pokemon via API
  methods: {
    async getPokemonList() {
      // Faire un GET pour avoir la liste des pokemons
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      // Liste entière des pokemons
      this.pokemon = response.data.results
    },
    // Définition d'une méthode pour aller chercher un seul pokemon de l'api
    async getPokemon(url) {
      // Faire un gat pour avoir les détails d'un pokemon
      const response = await axios.get(url)
      // Liste des pokemons selectionner
      this.selectedPokemon = response.data
    }
  },
  // Utile pour l'application
  created() {
    this.getPokemonList()
  }
}).mount("#pokedex");

