<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <slot :todo="todo"></slot>
      <slot name="todo" :todo="todo"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'LgSlot4',
    props: {
      todos: {
        type: Array
      }
    },
    data() {
      return {
      }
    },
    methods: {
    },
    components: {
    }
  }
</script>

<style scoped>

</style>
