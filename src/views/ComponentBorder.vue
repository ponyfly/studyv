<template>
  <div>
    <h2>边界情况</h2>
    <LgBorder1 ref="border1">
      <template slot="border1">
        使用ref标记子组件，可以获取子组件的数据和方法
      </template>
    </LgBorder1>
    <button @click="focus">聚焦input</button>
    <h2>循环引用</h2>
    <LgBorderCircleReferList :todos="todos"></LgBorderCircleReferList>
  </div>
</template>

<script>
  import LgBorder1 from '@/components/LgBorder1.vue'
  import LgBorderCircleReferList from '@/components/LgBorderCircleReferList.vue'
  export default {
    name: 'ComponentSlot',
    data() {
      return {
        provideData: '暴露给所有后代组件的数据',
        todos: ['吃饭', '睡觉', ['打豆豆', '撸代码']]
      }
    },
    provide() {
      return {
        provideData: this.provideData,
        provideMethod: this.provideMethod
      }
    },
    mounted() {
      this.picker = {
        name: 'picker'
      }
      let picker = {
        name: '张三',
        age: 18
      }
      this.$once('hook:beforeDestroy', () => {
        console.log('hook:beforeDestroy')
        picker = null
      })
    },
    beforeDestroy() {
      this.picker = null
      console.log('destroy')
    },
    methods: {
      focus() {
        this.$refs.border1.focus()
      },
      provideMethod() {
        console.log('暴露给所有后代组件的方法')
      }
    },
    components: {
      LgBorder1,
      LgBorderCircleReferList
    }
  }
</script>

<style scoped>

</style>
