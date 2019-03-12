<template>
  <div class="about">
    <h1>This is an {{name}} page</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: ['id'],
  data() {
    return {
      name: 'about'
    }
  },
  created() {
    console.log(this.id)
  }
}
</script>
