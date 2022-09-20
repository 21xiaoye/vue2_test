<template>
    <div class="demo">
        <h2>学校名称:<h3 v-show="is">{{schoolname}}</h3></h2>
        <h2 ref="titel">学校地址:{{addres}}</h2>
        <button @click="showName">显示学校名称</button>
        <button @click="showDOM">显示DOM元素</button>
    </div>
</template>
<script>
    import pubsub from 'pubsub-js'
export default {//export const school=Vue.extend
    name:'School',
         data() {
            return {
                schoolname:'新化完全中学',
                addres:'新化',
                is:''
            }
        },methods:{
            showName(){
                this.is=!this.is
             },
             showDOM() {
                console.log(this.$refs.titel)
             }
    }, mounted() {
             this.id=pubsub.subscribe('hrllo', (a,b)=> {//a消息名，b传送的数据
                console.log("订阅消息成功",b)
            })
    }, beforeCreate() {
            pubsub.unsubscribe(id)
        }
   }
    //export{school}统一暴露
    //export default school 默认暴露
</script>
<style scoped><!--scoped让样式在局部生效,防止冲突-->
    .demo{
        background-color: aqua;
    }
</style>

<!--
    原生操作获取DOM元素使用id,vue中使用ref，存放在vc的$refc上
    ref属性被用来给元素或子组件注册引用信息
    在组件标签中使用ref获取的是vc实例对象，在组件中使用id获取到的是组件中的DOM结构
-->