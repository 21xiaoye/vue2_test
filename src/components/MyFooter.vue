<template>
  <div class="todo-footer" v-show="total">
    <label>
        <input type="checkbox" :checked="isAll" @change="checkAll"/>
    </label>
    <span>
        <span>已完成{{doneTotal}}</span>/ 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>


export default {
    name: 'MyFooter',
    props:['todos','checkAllTodo','clearAllTodo'],
    data(){
        return {
            
        }
    }, computed: {
        total() {
            return this.todos.length
        }
        ,doneTotal(){
            /**var i = 0
            this.todos.forEach((todo) => {
                if (todo.done) {
                    i++
                }
            })
            return i*/
            //reduce做条件统计的
            const x=this.todos.reduce((pre,current) => {//pre上一次的值，current当前值
                return pre+(current.done ? 1 :0)
            }, 0)//初始值
            return x
        }, isAll:{//全部选中就控制checked选中
            get() {return this.doneTotal === this.total && this.total > 0 },
            set(value){
                this.checked=value
            }
        }
    }, methods: {
        checkAll(event) {//选择所有
           this.checkAllTodo(event.target.checked)
        },
        clearAll() {
            this.clearAllTodo()
        }
    }
}
</script>

<style scoped>
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left:6px;
        margin-top: 5px;
    }

    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input{
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button{
        float: right;
        margin-top: 5px;
    }
</style>