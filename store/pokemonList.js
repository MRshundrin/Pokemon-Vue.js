import axios from 'axios'

export const state = () => ({
  mainAPI: 'https://pokeapi.co/api/v2/pokemon/',
  totalPokemons: 0,
  pokemonArr: [],
  limitOfPokemons: 10,
  currentPage: 1,
  offset: 0,
  tileActive: true,
  listActive: false
})


export const mutations = {
        
  changeView(state) {
    state.tileActive = !state.tileActive;
    state.listActive = !state.listActive;
  },

  fillPokemonArr(state, arr) {
    state.pokemonArr = arr;
    console.log(state.pokemonArr);
  },

  removeList(state) {
    state.pokemonArr = [];
  }, 

  changeLimitOfPokemons(state, limit) {
    state.limitOfPokemons = limit;
    this.dispatch('pokemonList/getPokemonList');
  },

  changeTotalPokemon(state, total) {
    state.totalPokemons = total;
  },

  changeOffset(state, offset) {
    state.offset = offset;
  },

  calcOffset(state) {
    state.offset = (state.currentPage - 1) * state.limitOfPokemons;
  },

  changeCurrentPage(state, newCurrent) {
    state.currentPage = newCurrent;

    this.commit('pokemonList/calcOffset');
    this.dispatch('pokemonList/getPokemonList');
    this.$router.push('/?offset=' + state.offset + '&limit=' + state.limitOfPokemons);
  }
}

export const actions = {

  getPokemonList(context) {
    this.commit('pokemonList/removeList');

    axios.get(context.state.mainAPI + '?offset=' + context.state.offset + '&limit=' + context.state.limitOfPokemons)
    .then((data) => {
      this.commit('pokemonList/changeTotalPokemon', data.data.count);
      this.dispatch('pokemonList/mapPokemon', data.data.results);
    }) 
  },

  mapPokemon(state, pokemons) {
    const promiseArr = pokemons.map((element) => {
      let pokemon = axios.get(element.url)
        .then((data) => {
          return data.data
        });

        return pokemon;
    });
          
    Promise.all(promiseArr).then(values => {
      this.commit('pokemonList/fillPokemonArr', values);
    })
  }
}


  