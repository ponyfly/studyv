<template>
  <input type="text" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'LgInput',
  props: {
    value: String
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  @import "../assets/css/mixin.styl"
  input
    wh(200px, 30px)
    border(2px)
</style>
