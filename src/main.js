import Vue from 'vue'
import App from './App.vue'
//引入插件
import plugin from './plugin'
//引入store
import store from './store/index'
Vue.config.productionTip = false//关闭生产提示
Vue.use(plugin)//使用插件

new Vue({
  el: '#app',
  //render: h=>h(App)
  /**render(createElement) {
    return createElement(App)
  }*/
  render: createElement => createElement(App),
  store:store ,
  beforeCreate() {
    Vue.prototype.$bus=this//安装全局事件总线
  }
})
