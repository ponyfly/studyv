<template>
  <div class="todo__wrap">
    <form @submit.prevent="exec" data-a="添加todo">
      <input v-model="newToDoText" type="text"/>
      <button>Add</button>
    </form>
    <ul class="todo__list" @click.capture="exec" data-a="点击todo">
      <todo-item v-for="(todo, index) in todoList" :todo="todo" :key="index"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'TodoList',
  data () {
    return {
      newToDoText: '',
      todoList: []
    }
  },
  components: {
    TodoItem
  },
  methods: {
    exec(e) {
      const vm = this
      const dataset = e.target.dataset
      console.log(dataset.a)
      switch (dataset.a) {
        case '添加todo':
          vm.todoList.push(vm.newToDoText)
          break
        case '点击todo':
          console.log(this)
          break
        default:
          console.log('未定义指令')
      }
    }
  }
}
</script>

<style scoped>

</style>
