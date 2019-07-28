<template>
  <section id="pokemon">

    <Header>
      <nuxt-link :to="{path:'/?offset=' + offset + '&limit=' + limitPokemons}" class="back-button" />
    </Header>

    <Main />
  
  </section>
</template>


<script>
  import Header from '@/components/Header.vue';
  import Main from '@/components/SinglePokemon/MainPart.vue';

  export default {
    components: {
      Header,
      Main
    },
    
    computed: {

      pokemon() {
        return this.$store.state.singlePokemon.singlePokemon;
      },

      abilities(){
        return this.$store.state.singlePokemon.ability;
      },

      offset() {
        return this.$store.state.pokemonList.offset;
      },

      limitPokemons() {
        return this.$store.state.pokemonList.limitOfPokemons;
      }
    },
  
    asyncData(context) {
      const id = context.route.params.id;
      const pokemon = context.store.state.pokemonList.pokemonArr.find(t => t.id == id);
      return context.store.commit('singlePokemon/createPokemon', pokemon);
    },
  }
</script>
