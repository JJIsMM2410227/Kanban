export default {
    state: {
        columnCollection: [],
    },

    actions: {
        async generatingColumns({ commit }, usefulData) {
            commit('GENERATING_COLUMNS', usefulData)
        },

        generatingCard({ commit }, usefulData) {
            commit('GENERATING_CARD', usefulData)
        },
    },

    mutations: {
        GENERATING_COLUMNS: (state, usefulData) => {
            state.columnCollection.push(usefulData)
        },

        GENERATING_CARD: (state, usefulData) => {
            state.columnCollection[usefulData.currentIndex].cardCollection.push(
                usefulData
            )
        },
    },

    getters: {
        columnCollection: (state) => state.columnCollection,
    },
}
