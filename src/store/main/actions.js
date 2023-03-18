export default {
  playRadio({ commit }, url) {
    commit('setRadio', url)
  },
  setErrorMessage({ commit }, msg) {
    commit('setError', msg)
  },
  removeErrorMessage({ commit }, msg) {
    commit('setRemoveErrorMessge', msg)
  }
}
