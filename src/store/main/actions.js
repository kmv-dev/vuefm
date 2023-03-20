export default {
  setStreamUrl({ commit }, url) {
    commit("setUrl", url);
  },
  setAlert({ commit }, { status, msg }) {
    commit("setAlert", { status, msg });
  },
  removeAlert({ commit }, msg) {
    commit("setRemoveAlert", msg);
  },
};
