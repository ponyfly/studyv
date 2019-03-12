<template>
  <input type="text" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      value: {
        type: String
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="stylus" scoped>
  input
    width 300px
    height 30px
    padding 0 10px
    line-height 30px
    border 1px solid #5bc874
    border-radius 12px
</style>
