<template>
  <div>
    <h1>inject</h1>
    <div>{{provideData}}</div>
    <BaseButton backgroundColor="wheat" @click.native="exec('provide')">点击我执行provide的方法</BaseButton>
  </div>
</template>

<script>
  export default {
    name: 'LgBorderInject',
    inject: ['provideData', 'provideMethod'],
    methods: {
      exec(type) {
        switch (type) {
          case 'provide':
            this.provideMethod()
            break
          default:
            console.log('未定义指令')
        }
      }
    }
  }
</script>

<style scoped>

</style>
