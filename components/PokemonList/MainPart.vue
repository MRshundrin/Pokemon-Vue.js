<template>
  <section id="main" :class="{ cards: tileActive, 'list': listActive }">
    <div v-for="pokemon in pokemonList" :key="pokemon._id" :class="{ wrapper: listActive }">
        
      <nuxt-link slot="link" :to="{path:'/' + pokemon.id}">

        <Card v-if="tileActive">

          <div slot="flip-card-front" class="flip-card-front">
            <h2>{{ pokemon.name }}</h2>
            <img :src="pokemon.sprites.front_default" alt="front-sprite" class="front-sprite">
            <p>weight: {{ pokemon.weight / 10 }} kg</p>
            <p>height: {{ pokemon.height / 10 }} m</p>
            <p>base experience: {{ pokemon.base_experience }}</p>
            <p>id: {{ pokemon.id }}</p>
          </div>

          <div slot="flip-card-back" class="flip-card-back">
            <h2>{{ pokemon.name }}</h2>
            <img :src="pokemon.sprites.back_default" alt="back-sprite" class="back-sprite">
            <p v-for="stat in pokemon.stats" :key="stat._id">
              {{ stat.stat.name }}: {{ stat.base_stat }}
            </p>
          </div>

        </Card>

        <ListItem v-if="listActive">

          <div slot="main-param" class="main-param">
            <h2>{{ pokemon.name }}</h2>
            <p>weight: {{ pokemon.weight / 10 }} kg</p>
            <p>height: {{ pokemon.height / 10 }} m</p>
            <p>base experience: {{ pokemon.base_experience }}</p>
            <p>id: {{ pokemon.id }}</p>
          </div>
            
          <img slot="frontSprite" :src="pokemon.sprites.front_default" alt="front-sprite" >
          <img slot="backSprite" :src="pokemon.sprites.back_default" alt="back-sprite" >
            
          <p slot="stat" v-for="stat in pokemon.stats" :key="stat._id">
            {{ stat.stat.name }}: {{ stat.base_stat }}
          </p>

        </ListItem> 

      </nuxt-link> 

    </div>       
  </section>
</template>


<script>
import Card from '@/components/PokemonList/Card.vue';
import ListItem from '@/components/PokemonList/ListItem.vue';

export default {
  components: {
    Card,
    ListItem
  },
  computed: {
		pokemonList() {
      return this.$store.state.pokemonList.pokemonArr;
    },
    tileActive() {
      return this.$store.state.pokemonList.tileActive;
    },
    listActive() {
      return this.$store.state.pokemonList.listActive;
    }
	},
}
</script>


<style scoped lang="scss">
  #main {
    padding-top: 30px;

    .wrapper {
      width: 100%;

      a {
        text-decoration: none;
        color: black;
        display: block;
        width: 100%;
      }
    }
    
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
</style>