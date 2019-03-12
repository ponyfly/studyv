<template>
  <div>
    <button @click="$emit('large-font')">加大字体</button>
    <button @click="$emit('change-color', '#a6f')">字体变色</button>
  </div>
</template>

<script>
export default {
  name: 'LargeFont',
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  button
    padding 15px
</style>
