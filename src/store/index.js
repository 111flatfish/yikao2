import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    // 专业类型
    majorStyle:"perform",
    // 悬浮表单
    formflag:window.localStorage.getItem("formflag")
  },
  getters:{
    // 获取专业类型
    getmajorstyle:function (state) {
      return state.majorStyle;
    },
    // 获取悬浮表单
    getformflag:function (state) {
      return state.formflag;
    }
  }
  ,
  mutations:{
    // 设置悬浮表单
    setformflag(state,data){
      state.formflag = window.localStorage.setItem("formflag",data);
    },
    // 设置专业类型
    setmajorstyle(state,data){
      state.majorStyle = data;
    }
  },
  actions: {

  },
  modules: {

  }
})
