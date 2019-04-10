<template>
  <div>
    <label for="tomson">tomson</label>
    <input id="tomson" type="checkbox" value="tomson" :checked="checkedVal === 'tomson'" @change="exec('tomson')">
    <label for="amysom">amysom</label>
    <input id="amysom" type="checkbox" value="amysom" :checked="checkedVal === 'amysom'" @change="exec('amysom')">
    <label for="bob">bob</label>
    <input id="bob" type="checkbox" value="bob" :checked="checkedVal === 'bob'" @change="exec('bob')">
  </div>
</template>

<script>
  export default {
    name: 'BaseRadio',
    data() {
      return {
        checkedVal: ''
      }
    },
    methods: {
      exec(val) {
        this.checkedVal = val
      }
    }
  }
</script>

<style scoped>

</style>