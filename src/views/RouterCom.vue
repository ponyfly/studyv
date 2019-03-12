<template>
  <div>
    <div>header</div>
    <button @click="exec">跳转到detail</button>
    <router-view></router-view>
    <div>footer</div>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    name: 'RouterCom',
    created() {
      console.log(this.$props.id)
      // console.log(this.$route)
    },
    methods: {
      exec() {
        this.$router.push({
          name: 'RouterComDetail',
          params: {
            name: '小黄鸭'
          },
          query: {
            age: 18
          }
        })
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter')
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave')
      next()
    },
    beforeRouteUpdate(to, from, next) {
      console.log('beforeRouteUpdate')
      next()
    }
  }
</script>

<style scoped>

</style>
