import state from "./state";

export default {
  getUrl: (state) => state.url,
  getRadioList: (state) => state.radioList,
  getAlerts: (state) => state.alertData,
}
