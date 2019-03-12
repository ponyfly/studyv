<template>
  <button :style="{backgroundColor}">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    inheritAttrs: false,
    props: {
      backgroundColor: {
        type: String,
        default: 'transparent'
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="stylus" scoped>
button
  padding 5px 15px
  border 1px solid #ccc
  border-radius 6px
  line-height 30px
  text-align center
</style>
