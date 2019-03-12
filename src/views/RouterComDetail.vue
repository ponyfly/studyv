<template>
  <div>这是 {{$route.name}}</div>
</template>

<script>
  export default {
    name: 'RouterComDeatil',
    props: ['id', 'name'],
    created() {
      console.log(this.$props)
      // console.log(this.$route)
    },
    updated() {
      console.log('updated')
    }
  }
</script>

<style scoped>

</style>
