<template>
  <div class="todo-header">
    <transition-group
     :appear="true" name="animate__animated animate__bounce"
     enter-active-class="animate__swing"
     leave-active-class="animate__backOutDown"><!--appear设置页面刚开始就执行动画效果-->
      <h1 v-show="!isShow" @click="isShow=!isShow" key="1">{{name}}</h1>
      <h1 v-show="isShow" @click="isShow=!isShow" key="2">{{name1}}</h1>
    </transition-group>
    
    <!--<input type="text" placeholder="请输入你的任务" v-model="tile" @keyup.enter="add" />-->
    <input type="text" placeholder="请输入你的任务" v-model="tile" @keyup.enter="addTodos" />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import 'animate.css'
export default {
  name: 'MyHeader',
    props:['receive'],
    data() {
        return {
          name: '欢迎使用',
          name1:'日程',
          tile: '',
            isShow:false
        }
  }, methods: {
      /**add(event) {
        if(!this.tile) return 
       const todoObj = { id: nanoid(), title: this.tile, done: false }
        //console.log(todoObj)
      this.receive(todoObj)
        event.target.value=''
      }*/
      addTodos(event) {
        if (!this.tile || event.target.value==='' ) return//null值不传送
        const todoObj = {id: nanoid(),title:this.tile,done:false}
        this.$emit('adds',todoObj)
        event.target.value = ''
        //this.$off('adds')解绑单个事件（解绑多个事件this.$off(['a','b'...])
      }
    }
}
</script>

<style scoped>
  .todo-header input{
    width:560px;
    height: 28px;
    font-size: 14px;
    border-radius: 1px solid #ccc;
    padding: 4px 7px;
  }
  .todo-header input:focus{
    outline:none;
    border-color: rgba(60, 183, 220, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),0 0 8px rgba(19, 163, 240, 0.6)
  }
/**
  进入的起点，离开的终点 
  .hello-enter,.hello-leave-to{
    transform: translateX(-100%);
  }
  .hello-enter-active,.hello-leave-active{
    transition:0.5s linear;
  }
  进入的终点，离开的起点 
  .hello-enter-to,.hello-leave{
    transform: translateX(0);
  } */


  /* .hello-enter-active{来 
    animation: xiao_ye 0.5s linear ;
  }
  .hello-leave-active{去 
    animation: xiao_ye 0.5s linear reverse;
  } */

 /** @keyframes xiao_ye{
    from{
      transform: translateX(-100%);来的时候的动画 
    }
    to{
      transform: translateX(0px);来到之后 
    }
  }*/ 
</style>