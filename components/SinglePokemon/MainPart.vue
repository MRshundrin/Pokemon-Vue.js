<template>
  <section id="main">

    <h1>{{ pokemon.name }}</h1>

    <h2>Forms:</h2>
    <div>
        <img  v-for="sprite in pokemon.sprites" :key="sprite._id" :src="sprite">
    </div>

    <h2>Info</h2>
    <div class="info">
        <div>
            <h3> Weight</h3>
            <div>{{ pokemon.weight / 10 }} kg</div>
        </div>
        <div>
            <h3>Height</h3>
            <div>{{ pokemon.height / 10 }} m</div>   
        </div>
        <div>
            <h3>Id</h3>
            <div>{{ pokemon.id }}</div>
        </div>
        <div>
            <h3>Type</h3>
            <div v-for="type in pokemon.types" :key="type._id">
                {{type.type.name}} pokemon
            </div>
        </div>
    </div>

    <h2>Stats</h2>
    <div class="stats">
        <div v-for="stat in pokemon.stats" :key="stat._id">
            <h3>{{ stat.stat.name }}</h3>
            <div>{{ stat.base_stat }}</div>
        </div>
    </div>
    
    <h2>Abilities</h2>
    <div  v-for="ability in abilities" :key="ability._id" class="ability">
        <h3>{{ability.name}}</h3>
        <p>{{ability.effect}}</p>
    </div>
    
  </section>
</template>

<script>

export default {
    computed: {
        pokemon() {
        return this.$store.state.singlePokemon.singlePokemon;
        },
        abilities(){
        return this.$store.state.singlePokemon.ability;
        },
	}
}

</script>


<style scoped lang="scss">
    #main {
        width: 90%;
        background-color: #feb014;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;

        h1 {
            font-size: 35px;
        }

        h1, h2, h3 {
            text-decoration: underline;
        }

        h1, h2, h3:first-letter {
            text-transform: uppercase;
        }
    }

    .info, .stats {
        width: 90%;
        display: flex;
        justify-content: space-between;

        div {
            margin: 10px;
            text-align: center;
        }
    }
    .ability {
        width: 90%;
        padding: 10px;
    }
</style>