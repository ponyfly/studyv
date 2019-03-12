<template>
  <div>mixin</div>
</template>

<script>
  import myMixin from '@/utils/index.js'
  export default {
    name: 'ComponentMixin',
    mixins: [myMixin],
    data() {
      return {
        msg: '这是组件msg'
      }
    },
    created() {
      console.log('这是组件created')
    },
    mounted() {
      console.log('mounted')
    },
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    }
  }
</script>

<style scoped>

</style>
