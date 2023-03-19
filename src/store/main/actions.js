export default {
  setStreamUrl({ commit }, url) {
    commit('setUrl', url)
  },
  setErrorMessage({ commit }, msg) {
    commit('setError', msg)
  },
  removeErrorMessage({ commit }, msg) {
    commit('setRemoveErrorMessge', msg)
  }
}
