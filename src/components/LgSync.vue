<template>
  <div class="sync__wrap">
    <div @click="updateTitle">跟新title</div>
    <div>子组件：{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'LgSync',
    props: {
      title: {
        type: String
      }
    },
    methods: {
      updateTitle() {
        this.$emit('update:title', 'newTitle')
      }
    }
  }
</script>

<style scoped>

</style>
