<template>
  <div class="events">
    <h2>stop事件</h2>
    <div class="col--red">错误示例</div>
    <div @click="exec" data-a="wrapperHandler" class="wrapper">
      wrapper
      <div @click="exec" data-a="innerHandler" class="inner">inner</div>
    </div>
    <div class="col--green">正确示例</div>
    <div @click="execRightWrapper" class="wrapper">
      wrapper
      <div @click="execRightInner" class="inner">inner</div>
    </div>
    <div class="col--green">stop正确示例</div>
    <div @click="execRightWrapper" class="wrapper">
      wrapper
      <div @click.stop="execRightInner" class="inner">inner</div>
    </div>
    <h2>capture事件</h2>
    <div class="col--green">capture正确示例</div>
    <div @click.capture="execRightWrapper" class="wrapper">
      wrapper
      <div @click="execRightInner" class="inner">inner</div>
    </div>
    <h2>prevent事件</h2>
    <div class="col--green">prevent正确示例</div>
    <form @submit.prevent="exec" data-a="preventHandler">
      <button>注册</button>
    </form>
    <h2>self事件</h2>
    <div class="col--green">self正确示例</div>
    <div @click.self.once="execRightWrapper" class="wrapper">
      wrapper
      <div @click="execRightInner" class="inner">inner</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {}
  },
  created() {
    console.log(this)
  },
  methods: {
    exec(e) {
      const vm = this
      const dataset = e.target.dataset
      console.log(dataset.a)
      switch (dataset.a) {
        case 'wrapperHandler':
          console.log(`触发了 ${dataset.a}`) // 这样写会执行两次innerHandler,因为e代表的是触发元素上的事件，所以两次传进来的都是同样的e，所以这样不行
          break
        case 'innerHandler':
          console.log(`触发了 ${dataset.a}`)
          break
        case 'preventHandler':
          console.log(`触发了 ${dataset.a}`)
          break
        default:
          console.log('未定义指令')
      }
    },
    execRightWrapper() {
      console.log(`触发了 wrapperHandler`)
    },
    execRightInner() {
      console.log(`触发了 innerHandler`)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "../assets/css/mixin.styl"
  .wrapper
    margin 0 auto
    wh(300px)
    bgc(#f6a)
    .inner
      wh(100px, 150px)
      bgc(wheat)
</style>
