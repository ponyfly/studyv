const mixin = {
  data() {
    return {
      msg: 'mixin msg'
    }
  },
  created() {
    console.log('mixin created: hello')
  }
}

export default mixin
