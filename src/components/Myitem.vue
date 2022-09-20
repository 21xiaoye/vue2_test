<template>
    <transition name="todo" appear>
        <li>
            <label>
                <input type="checkbox" :checked="todos.done" @click="handles(todos.id)"/>
                <span v-show="!todos.isEdit">{{todos.title}}</span>
                <input type="text" 
                v-show="todos.isEdit" 
                :value="todos.title" 
                @blur="handler(todos,$event)"
                ref="inputName"/>
            </label>
            <button v-show="!todos.isEdit" class="bth btn-edit" @click="handlesEdit(todos)">编辑</button>
            <button  class="bth btn-danger" @click="handlesDelete(todos.id)">删除</button>
        </li>
    </transition>
</template>

<script>
export default {
    name: 'Myitem',
    //声明接收todos对象: props:['todos','checkTodo','checkDelete'],
    props:['todos'],
    data() {
        return {
            
        }
    }, methods: {    
        handles(id) {
            //this.checkTodo(id)
            this.$bus.$emit('checkTodo', id);
        },
        handlesDelete(id) {
            if (confirm("确认删除？")) {
                //this.checkDelete(id)
                this.$bus.$emit('deleteTodo', id);
            }
        },
        handlesEdit(todos) {
            if (todos.hasOwnProperty('isEdit')) {
                todos.isEdit = true
            } else {//没有isEdit这个属性值就创建一个isEdit
                this.$set(todos, 'isEdit', true)
            }
            this.$nextTick(function () {
                this.$refs.inputName.focus()
            })
           
        },  
        handler(todos,event) {//编辑完成
            todos.isEdit = false
            this.$bus.$emit('updateTodo',todos.id,event.target.value)
        }
    },
}
</script>

<style scoped>
    li{
        list-style: none;
        height: 37px;
        line-height: 37px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button{
        float: right;
        margin-top: 3px;
        height: 30px;
        border-radius: 5px;
        display: none;
    }
    li:before{
        content: initial;
    }
    li:last-child{
        border-bottom: none;
    }
    li:hover{
        /**设置鼠标悬浮样式 */
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
  
  
  .todo-enter-active{/*来 */
    animation: xiao_ye 0.5s linear ;
  }
  .todo-leave-active{/*去 */
    animation: xiao_ye 0.5s linear reverse;
  } 

 @keyframes xiao_ye{
    from{
      transform: translateX(100%);/*来的时候的动画 */
    }
    to{
      transform: translateX(0px);/*来到之后 */
    }
  }
</style>