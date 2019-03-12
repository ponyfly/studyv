<template>
  <div class="post">
    <div v-if="page.error">
      {{page.error}}
    </div>
    <div v-if="page.post">
      {{page.post}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComponentFetch1',
    props: ['id'],
    data() {
      return {
        page: {
          post: null,
          error: null
        }
      }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
      // this.fetchData()
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    methods: {
      setData(err, post) {
        if (err) {
          this.page.error = err
        } else {
          this.page.post = post
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter')
      if (to.meta.activated) {
        next()
      } else {
        setTimeout(() => {
          const num = Math.floor(Math.random() * 2)
          if (num === 0) {
            next(vm => vm.setData('我是error我是error我是error我是error我是error'))
          } else if (num === 1) {
            next(vm => vm.setData('', '我是post我是post我是post我是post我是post我是post我是post我是post我是post'))
          }
        }, 1000)
      }
    },
    beforeRouteUpdate(to, from, next) {
      console.log('beforeRouteUpdate')
      this.page.post = null
      setTimeout(() => {
        const num = Math.floor(Math.random() * 2)
        if (num === 0) {
          this.setData('我是error我是error我是error我是error我是error')
        } else if (num === 1) {
          this.setData('', '我是post我是post我是post我是post我是post我是post我是post我是post我是post')
        }
        next()
      }, 1000)
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave')
      next()
    },
    activated() {
      console.log('activated')
      this.$route.meta.activated = true
    },
    deactivated() {
      console.log('deactivated')
    }
  }
</script>

<style scoped>

</style>
