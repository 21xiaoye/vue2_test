//创建Vuex中的store
import Vuex from 'vuex'
import Vue from 'vue'
//准备actions--用于响应组件中的动作
const actions = {
    JIA: function (context,value) {//context上下文，commit在context里面
        console.log("actions中的jia被调用了", context, value)
        context.commit("JIA",value)
    },
    JIAN: function (context, value) {
        context.commit("JAVN",value)
    },
    jiaOdd: function (context, value) {
        if (context.state.sum % 2) {
            context.commit("JIA",value)
        }
    },
    jiaWait: function (context, value) {
        setTimeout(() => {
            context.commit("JIA",value)
        },500)
    }
}

//准备mutations--用于操作数据（state)
const mutations = {
    JIA(state, value) {
        console.log("mutations中的jia被调用了", state, value)
        state.sum += value
    },
    JIAN(state, value) {
        state.sum-=value
    },
    jiaOdd(state, value) {
        if (value % 2==0) {
            state.sum+=value
        }
    }
}

//准备state--用于存储数据
const state = {
    sum:0
}
//getters用于将stae中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum*10
    }
}
Vue.use(Vuex)
//创建store
const store = new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state: state,
    getters:getters,
})

export default store