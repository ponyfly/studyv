<template>
  <div>
    <LgBorderCircleReferList v-if="Array.isArray(todo)" :todos="todo"></LgBorderCircleReferList>
    <div v-else>{{todo}}</div>
  </div>
</template>

<script>
  import LgBorderCircleReferList from '@/components/LgBorderCircleReferList.vue'
  export default {
    name: 'LgBorderCircleRefer',
    props: ['todo'],
    components: {
      LgBorderCircleReferList
    }
  }
</script>

<style scoped>

</style>
