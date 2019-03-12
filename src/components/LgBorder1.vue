<template>
  <div>
    <h3>
      <slot name="border1"></slot>
    </h3>
    <div>
      <input type="text" ref="input">
    </div>
    <LgBorderInject></LgBorderInject>
  </div>
</template>

<script>
  import LgBorderInject from '@/components/LgBorderInject.vue'
  export default {
    name: 'LgBorder1',
    data() {
      return {
        msg: '使用ref可以获取子组件'
      }
    },
    components: {
      LgBorderInject
    },
    methods: {
      focus() {
        this.$refs.input.focus()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  input
    border: 1px solid #000
</style>
