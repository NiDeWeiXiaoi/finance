import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api/index";

import { Toast } from 'vant';

Vue.use(Toast);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{
      token: localStorage.user ? JSON.parse(localStorage.user) : {},
    }
  },
  getters: {},
  mutations: {
    setUser(state, playload) {
      state.user = playload
    }
  },
  actions: {
    async login(content, playload) {
      // 将表单提交的账号密码进行提交playload={username, password}
      // 当登录成功, 后端返回用户当数据,进行修改用户信息
      //  保存登录当凭证token
      //token: 通过这个凭证就可以进行访问,
      /**
       * access-token就是登录凭证,他会有有效期,比如1小时有效
       * refresh-token: 当access-token失效的时候,使用refresh-token进行获取access-token
       * 就可以使用新的token登录,refresh-token都失效,就必须重新登录
       * 
       */
      let result = await api.postLogin(playload)
      
      if(result.msg == 'fail') {
        Toast.fail('用户名或密码错误');
      } else {
        Toast.success('登录成功')
        content.commit("setUser",result.result)
        localStorage.user = JSON.stringify(result.result)
        console.log(result)
      }

    }
  },
  modules: {},
});
