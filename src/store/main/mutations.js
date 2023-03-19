const getRandomId = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default {
  setUrl(state, url) {
    state.url = url
  },
  setAlert(state, { status, msg }) {
    const payload = {
      id: getRandomId(0, 2139842304712),
      status: status,
      message: msg
    }
    state.alertData.push(payload)

    if (state.alertData.length > 3) {
      state.alertData.shift()
    }
  },
  setRemoveAlert(state, itemIndex) {
    state.alertData = state.alertData.filter((item, index) => index !== itemIndex)
  }
}
