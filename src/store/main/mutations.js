export default {
  setUrl(state, url) {
    state.url = url
  },
  setError(state, msg) {
    if (state.errorMessages.length > 3) {
      state.errorMessages.shift()
    }
    state.errorMessages.push(msg)
    setTimeout(() => state.errorMessages = [], 11000);
  },
  setRemoveErrorMessge(state, msg) {
    state.errorMessages = state.errorMessages.filter((item, index) => index !== msg)
  }
}
