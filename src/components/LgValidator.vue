<template>
  <div>{{valContext}}</div>
</template>

<script>
  export default {
    name: 'LgValidator',
    props: {
      valContext: {
        type: String,
        validator(value) {
          return ['success', 'fail', 'error'].indexOf(value) !== -1
        }
      }
    }
  }
</script>

<style scoped>

</style>