import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerName: 'HeaderDefault',
    headerData: { title: '', subtitle: '' },
  },
  mutations: {
    SET_HEADER_NAME(state, payload) {
      state.headerName = payload;
    },
    SET_HEADER_DATA(state, payload) {
      state.headerData = payload;
    },
  },
  actions: {
    setHeader({ commit, state }, { name, data }) {
      if (state.headerName !== name) commit('SET_HEADER_NAME', name);
      commit('SET_HEADER_DATA', data);
    },
  },
  modules: {},
});
