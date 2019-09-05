import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
Vue.prototype.$ajax = axios
export default new Vuex.Store({
  state: {
    packageList: []
  },
  getters: {
    getList: function (state) {
      return state.packageList;
    }
  },
  mutations: {
    initPackage: function (state, pageList) {
      state.packageList = pageList;
    }
  },
  actions: {
    addPackage(context, values) {
      let url = "http://localhost:10010/noob-post";
      axios
        .post(url, values)
        .then(function (response) {
          context.dispatch("getPackage")
        }).catch(function (error) {
          console.log(error);
        }
        )
    },
    getPackage(context) {
      let url = "http://localhost:10010/noob-post";
      axios
        .get(url)
        .then(function (response) {
          context.commit("initPackage", response.data)
        })
    },
  }
})
