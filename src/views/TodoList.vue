<template>
  <div class="todo__wrap">
    <form @submit.prevent="exec" data-a="添加todo">
      <input v-model="newToDoText" type="text"/>
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      newToDoText: '',
      todoList: []
    }
  },
  methods: {
    exec (e) {
      const vm = this
      const dataset = e.target.dataset
      switch (dataset.a) {
        case '添加todo':
          vm.todoList.push(vm.newToDoText)
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
