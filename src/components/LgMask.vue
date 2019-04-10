<template>
  <div class="mask" v-if="visible">
    <div class="close" @click="$emit('input', false)">X</div>
  </div>
</template>

<script>
  export default {
    name: 'LgMask',
    model: {
      prop: 'visible'
    },
    props: {
      visible: {
        type: Boolean
      }
    },
    // inject: ['visible', 'closeMask'],
    data() {
      return {
        showMask: false
      }
    },
    methods: {
      exec(type) {
        switch (type) {
          case '关闭':
            // this.$parent.visible = false
            // this.$emit('update:visible', false)
            // this.closeMask()
            break
          default:
            console.log('未定义指令')
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mask
    position relative
    width 300px
    height 200px
    background-color wheat
    .close
      position absolute
      right 20px
      top 20px
</style>
