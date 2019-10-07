import _ from 'lodash'

const getInitialState = () => ({
  modals: []
})

export default {
  state: getInitialState,
  actions: {
    setModal ({ commit }, payload) {
      commit('SET_MODAL', payload)
    },
    removeModal ({ commit }, payload) {
      payload = [{ type: payload }]
      commit('REMOVE_MODAL', payload)
    }
  },
  mutations: {
    SET_MODAL: (state, payload) => {
      state.modals.push(payload)
    },
    REMOVE_MODAL: (state, payload) => {
      const index = _.findIndex(state.modals, { type: payload })
      state.modals.splice(index, 1)
    }
  }
}
