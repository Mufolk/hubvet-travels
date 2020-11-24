import Vue from "vue";
import Vuex from "vuex";
import homepage from "./modules/homepage";
import tablepage from "./modules/tablepage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    homepage,
    tablepage
  }
});
