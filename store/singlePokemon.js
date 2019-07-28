import axios from 'axios'

export const state = () => ({
    ability: [],
    singlePokemon: {}
})

export const mutations = {
    createPokemon(state, info) {
        state.singlePokemon = info;

        this.commit('singlePokemon/getAbilityUrl');
        this.commit('singlePokemon/checkSprites');
    },

    checkSprites(state) {
        for (let key in state.singlePokemon.sprites) {
            if (state.singlePokemon.sprites[key] == null) {
                delete state.singlePokemon.sprites[key];
            } 
        }  
    },

    getAbilityUrl(state) {
        state.ability = [];
        state.singlePokemon.abilities.forEach((item) => {
            this.dispatch('singlePokemon/getAbility', item.ability.url);
        });
    },

    createAbility(state, ability) {
        state.ability.push({
            name: ability.name,
            effect: ability.effect_entries[0].effect
        });  
    }
}

export const actions = {

    getAbility(context, abilityUrl) {
        axios.get(abilityUrl)
        .then((data) => {
            this.commit('singlePokemon/createAbility', data.data);
        });
    }
}