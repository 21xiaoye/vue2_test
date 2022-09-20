<template>
    <ul class="todo-main">
        <Myitem v-for="todo in todos" :key="todo.id"
         :todos="todo" :checkTodo="checkTodo" :checkDelete="checkDelete"/>
    </ul>
</template>

<script>
    import Myitem from './Myitem.vue';
export default {
    name:'MyList',
    
    components: {
        Myitem,
    }, props: ['todos','checkTodo','checkDelete']
}
</script>

<style scoped>
    .todo-main{
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding:0px;
    }
    .todo-empty{
        height: 40px;
        line-height: 40px;
        border-radius: 2px;
        border: 1px solid #ddd;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>