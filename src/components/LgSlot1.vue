<template>
  <a>
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'LgSlot1',
    props: {
      url: {
        type: String,
        required: false
      }
    },
    data() {
      return {
      }
    },
    methods: {
    },
    components: {
    }
  }
</script>

<style scoped>

</style>
