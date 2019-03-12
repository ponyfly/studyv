<template>
  <div class="inner"></div>
</template>

<script>
  export default {
    name: 'LgUnprops',
    inheritAttrs: false,
    data() {
      return {
        fatherData: this.$attrs
      }
    },
    created() {
      console.log(this.$attrs)
      this.fatherData.name = 'nnnnnn'
      console.log('father', this.fatherData)
      console.log(this.$attrs)
    }
  }
</script>

<style scoped>

</style>
