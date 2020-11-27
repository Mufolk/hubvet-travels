const state = {
    items: [
        {
            code: 'HP554',
            name: 'Semana Santa em Copacabana',
            price: {
                monetaryValue: 4700,
                milesValue: 2000,
                discount: 450
            },
            packageItems: [
                {
                    code: 'HH555',
                    name: 'Copacabana Palace',
                    price: {
                        monetaryValue: 4700,
                        milesValue: 2000
                    },
                    nights: 7,
                    tags: [
                        'New',
                        'Liquidation'
                    ],
                },
        
                {
                    code: 'HC463',
                    name: 'Chevrolet Cobalt',
                    price: {
                        monetaryValue: 2500,
                        milesValue: 1000,
                    },
                    dailies: 8,
                    tags: [
                        'Liquidation'
                    ],
                },
                {
                    code: 'HV234',
                    name: null,
                    price: {
                        monetaryValue: 3000,
                        milesValue: 1000,
                    },
                    route: 'CGH - Congonhas  SDU - Santos Dumont',
                    tags: [
                        'Last days'
                    ],
                },
            ]
        },

        {
            code: 'HP664',
            name: 'Natal em Florianópolis',
            price: {
                monetaryValue: 4700,
                milesValue: 2000,
                discount: 450
            },
            packageItems: [
                'HH565',
                'HC468',
                'HV134'
            ]
        },
        {
            code: 'HP774',
            name: 'Ano Novo em Búzios',
            price: {
                monetaryValue: 4700,
                milesValue: 2000,
                discount: 450
            },
            packageItems: [
                'HH566',
                'HC263',
                'HV274'
            ]
        },
        {
            code: 'HP884',
            name: 'Carnaval em Salvador',
            price: {
                monetaryValue: 4700,
                milesValue: 2000,
                discount: 450
            },
            packageItems: [
                'HH558',
                'HC263',
                'HV238'
            ]
        },
        {
            code: 'HH555',
            name: 'Copacabana Palace',
            price: {
                monetaryValue: 4700,
                milesValue: 2000
            },
            nights: 7,
            tags: [
                'New',
                'Liquidation'
            ],
        },

        {
            code: 'HC463',
            name: 'Chevrolet Cobalt',
            price: {
                monetaryValue: 2500,
                milesValue: 1000,
            },
            dailies: 8,
            tags: [
                'Liquidation'
            ],
        },
        {
            code: 'HV234',
            name: null,
            price: {
                monetaryValue: 3000,
                milesValue: 1000,
            },
            route: 'CGH - Congonhas  SDU - Santos Dumont',
            tags: [
                'Last days'
            ],
        },
    ],
    headers: [
        { text: 'Code', value: 'code' },
        { text: 'Name', value: 'name' },
        { text: 'Price', value: 'price.monetaryValue' },
        { text: 'Tags', value: 'tags' },
    ],
    tags: [
        { header: 'Select an option' },
        {
          text: 'Liquidation',
          color: 'red',
        },
        {
          text: 'New',
          color: 'yellow',
        },
        {
          text: 'Last days',
          color: 'purple',
        },
      ],
    itemTypes: [
        'Pacotes', 'Carros', 'Passagens', 'Hoteis',
      ],
};

const getters = {
    getItems: (state) => state.items,
    getHeaders: (state) => state.headers,
    getTags: (state) => state.tags,
    getItemTypes: (state) => state.itemTypes,
};

const actions = {
    // async saveChat({ commit }, filter) {
    //     console.log(`Salvei o filtro: ${filter}`)

    //     commit('setFilter', filter);
    // }
};

const mutations = {
    // setFilter: (state, filter) => (state.filter = filter)
};

export default {
    state,
    getters,
    actions,
    mutations
};