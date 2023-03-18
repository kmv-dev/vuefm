import state from "./state";

export default {
  getUrl: (state) => state.url,
  getRadioList: (state) => state.radioList,
  getErrorMessages: (state) => state.errorMessages
}
