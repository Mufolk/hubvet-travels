const state = {
    filter: null
};

const getters = {
    getFilter: (state) => state.filter
};

const actions = {
    async saveFilter({ commit }, filter){
        console.log(`Salvei o filtro: ${filter}`)

        commit('setFilter', filter);
    }
};

const mutations = {
    setFilter: (state, filter) => (state.filter = filter)
};

export default {
    state,
    getters,
    actions,
    mutations
};