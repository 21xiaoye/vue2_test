<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{magAge}}</h2>
    <button @click="magAge++">改变年龄</button>
    <button @click="showAge">点一下</button>
    <button @click="showStudentName">发送数据</button>
  </div>
</template>

<script>
     import pubsub from 'pubsub-js'
    /**
     * props是只读的，Vue底层会检测props的修改，如果进行了修改，就会发出警告，若需要进行修改，
     * 那么需要复制内容到data中一份，然后修改data中的数据
     */
    /**
     * mixin混入，可以把多个组件共用的配置提取成一个对象；
     * 局部混合{......,
     *      mixins:['','']
     * }
     * 全局混合:main.js中
      * Vue.mixin()
     */
export default {
    name: 'StudentName',
    data(){
        return {
            msg: "欢迎",
            magAge:this.age
        }
    },//props:['name','sex','age'] 简单声明接收
    /**props: {
        name: String,//接收时对数据进行类型限制
        age: Number,
        sex:String
    }*/
    //接收的时候对数据进行类型限制，默认值指定，必要性限制
    props: {
        name: {
            type: String,//对传入的数据进行类型限制
            required: true,//name是必要的
        }, age: {
            type: Number,
            default: 0//数据没有传送的情况下设置默认值
        }, sex:{
            type:String,
            required:true
        }
    },//vc先处理props中的数据
    //peops中的数据，不可以更改，要想更改peops中的数据，必须在data中在配置一个对象
    methods: {
        showAge() {
            console.log(this.age)
            console.log(this.magAge);
        }, showStudentName() {
            pubsub.publish('hello',666)
        }
    }
}
</script>

<style>

</style>