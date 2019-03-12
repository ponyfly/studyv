<template>
  <div>
    <h2>组件使用v-model input</h2>
    <base-input v-model="msg"></base-input>
    <h2>组件使用v-model checkbox 单个</h2>
    <base-checkbox v-model="isRight" class="testclass" value="tom" name="sex" :dynamic="dynamicData" data-a="test"></base-checkbox>
    <h2>将原生事件绑定到组件</h2>
    <base-button backgroundColor="#f6a" @click.native="exec">确认</base-button>
    <h2>.sync</h2>
    <LgSync v-bind.sync="doc"></LgSync>
    <div>父组件：{{doc.title}}</div>
  </div>
</template>

<script>
  import LgSync from '@/components/LgSync.vue'

  export default {
    name: 'ComponentD',
    data() {
      return {
        msg: 'dddddd',
        isRight: true,
        dynamicData: 'dynamicData',
        doc: {
          title: 'docTitle'
        }
      }
    },

    components: {
      LgSync
    },
    methods: {
      exec() {
        console.log()
      }
    }
  }
</script>

<style scoped>

</style>
