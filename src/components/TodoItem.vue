<template>
  <li class="todo__item">{{todo}}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: String,
      default: ''
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.todo__item
  color: #f6a
</style>
