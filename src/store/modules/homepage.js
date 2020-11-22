const state = {
    filter: []
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
    setFilter: (state, newFilter) => (state.filter.push(newFilter))
};

export default {
    state,
    getters,
    actions,
    mutations
};