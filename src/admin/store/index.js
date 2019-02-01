import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import adminPages from './modules/adminPages';

export  const store = new Vuex.Store({
  modules: {
    adminPages
  }
});
