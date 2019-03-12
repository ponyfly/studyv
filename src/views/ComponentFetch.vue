<template>
  <div class="post">
    <div v-if="page.isLoading">
      isLoading...
    </div>
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
    name: 'ComponentFetch',
    data() {
      return {
        page: {
          isLoading: false,
          post: null,
          error: null
        }
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.page.error = this.page.post = null
        this.page.isLoading = true
        setTimeout(() => {
          this.page.isLoading = false
          const num = Math.floor(Math.random() * 2)
          if (num === 0) {
            this.page.error = '我是error我是error我是error我是error我是error'
          } else if (num === 1) {
            this.page.post = '我是post我是post我是post我是post我是post我是post我是post我是post我是post'
          }
        }, 3000)
      }
    }
  }
</script>

<style scoped>

</style>
