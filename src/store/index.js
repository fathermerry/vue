import Vuex from 'vuex';
import Vue from 'vue';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: 'Wuruwuru Vue',
  },
  getters,
  mutations,
  actions,
});
