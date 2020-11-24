const state = {
    filter: [],
    places: [
        "Pão de Açúcar", "Cristo Redentor", "Ilha Grande",
        "Capitólio", "Pelourinho", "Caraíva", "Porto de Galinhas",
        "Fernando de Noronha", "Lençol Maranhense", "Florianópolis",
        "Cataratas do Iguaçu", "Curitiba", "Bonito",
        "Chapada dos Veadeiros", "Campos do Jordão", "Copacabana",
    ]
};

const getters = {
    getFilter: (state) => state.filter,
    getPlaces: (state) => state.places,
};

const actions = {
    async saveFilter({ commit }, filter) {
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