<template>
  <section>

    <Header>
      <select id="select" v-model="limit" @change="changeList">
        <option> 10 </option>
        <option> 20 </option>
      </select>
      <button id="view" :class="{list: tileActive, tile: listActive}" @click="changeView"></button>
    </Header>

    <Pagination />

    <PokemonList />
    
  </section>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue';
import PokemonList from '@/components/PokemonList/MainPart.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Header,
    PokemonList,
    Pagination
  },

  beforeCreate() {
    let newLimit = this.$route.query.limit;
    let newOffset = this.$route.query.offset;
    
    if( newLimit !== undefined) {
      this.$store.commit('pokemonList/changeLimitOfPokemons', newLimit);
      this.$store.commit('pokemonList/changeOffset', newOffset);
      this.$router.push('/?offset=' + newOffset + '&limit=' + newLimit);
    } else {
      this.$router.push('/?offset=0&limit=10');
      this.$store.dispatch('pokemonList/getPokemonList');
    }
  },

  mounted() {
    const newLimit = this.$store.state.pokemonList.limitOfPokemons;
    this.limit = newLimit;
  },
  
  data() {
    return {
      tileActive: true,
      listActive: false,
      limit: 10
    }
  },

  computed: {
    offset() {
        return this.$store.state.pokemonList.offset;
    },
    limitPokemons() {
        return this.$store.state.pokemonList.limitOfPokemons;
    }
  }, 

  methods: {
    changeView() {
      this.tileActive = !this.tileActive; 
      this.listActive = !this.listActive;
      this.$store.commit('pokemonList/changeView'); 
    },
    changeList() {
      this.$store.commit('pokemonList/changeLimitOfPokemons', this.limit);
      this.$router.push('/?offset=' + this.offset + '&limit=' + this.limit);
    }
  }

}
</script>


