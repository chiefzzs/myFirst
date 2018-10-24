import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)
export default new Vuex.Store({
  state: {
    // url: 'www.baidu.com'
  },
  mutations: {
    // setUrl (state, res) {
    //   // 该方法用来改变全局变量的值
    //   state.url = res
    // },
    get(state, data) {
      Vue.http({
        method: 'GET',
        url: data.url,
        emulateJSON: true
      })
        .then(function (success) {
        // console.log("成功",success)
          data.success(success.body);
        }, function (error) {
        // console.log("错误",error)
          data.error(error.body);
        })
      /*
      Vue.http.get("http://test.dcsf.hebeiwanteng.com/api/common/wxParking/getNowTime")
        .then((success)=>{
          console.log("成功",success)
        })
        .catch((error)=>{
          console.log("失败",error)
        })
      */
    },
    post(state, data) {
      Vue.http({
        method: 'POST',
        url: data.url,
        params: data.data,
        emulateJSON: true
      }).then(function (success) {
          data.success(success.body);
        }, function (error) {
          data.error(error.body);
        })
    },
    delete(state, data) {
      Vue.http({
        method: 'DELETE',
        url: data.url,
        params: data.data,
        emulateJSON: true
      }).then(function (success) {
          data.success(success.body);
        }, function (error) {
          data.error(error.body);
        })
    },
    put(state, data) {
      Vue.http({
        method: 'PUT',
        url: data.url,
        params: data.data,
        emulateJSON: true
      }).then(function (success) {
          data.success(success.body);
        }, function (error) {
          data.error(error.body);
        })
    },
  }
})
