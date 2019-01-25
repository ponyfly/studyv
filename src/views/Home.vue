<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
    <button class="f36" :class="{'red': 2 === 2}" @click="exec" data-a="plusAge">age</button><span>{{watchData.age}}</span>
    <div v-for="(item, index) in list" :key="index">
      <div>{{index}},{{item}}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      name: 'home',
      msg: 'Welcome to Your Vue.js App',
      watchData: {
        name: '张三',
        age: 16
      },
      list: [1, 2, 3, 4, 5]
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    exec (e) {
      const vm = this
      const dataset = e.target.dataset.a
      switch (dataset) {
        case 'plusAge':
          vm.watchData.age++
          break
        default:
          console.log('未定义指令')
      }
    }
  },
  created () {
  },
  watch: {
    watchData: {
      handler (newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      deep: true,
      immediate: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    .red
      color: #ff9995
</style>
