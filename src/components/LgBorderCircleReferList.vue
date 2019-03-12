<template>
  <div>
    <div v-for="(todo, index) in todos" :key="index">
      <LgBorderCircleReferItem :todo="todo"></LgBorderCircleReferItem>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LgBorderCircleReferList',
    props: ['todos'],
    data() {
      return {
      }
    },
    components: {
      LgBorderCircleReferItem: () => import('@/components/LgBorderCircleReferItem.vue')
    }
  }
</script>

<style scoped>

</style>
