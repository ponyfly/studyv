<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button class="f36" :class="{'red': 2 === 2}" @click="exec" data-a="plusAge">age</button><span>{{watchData.age}}</span>
    <div v-for="(item, index) in list" :key="index">
      <div>{{index}},{{item}}</div>
    </div>
    <div @click="exec" data-a="stopWrapper">
      <div @click="exec" data-a="stopInner">inner</div>
    </div>
    <todo-list></todo-list>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  props: ['id'],
  data() {
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
    TodoList
  },
  methods: {
    exec(e) {
      const vm = this
      const dataset = e.target.dataset.a
      switch (dataset) {
        case 'plusAge':
          vm.watchData.age++
          break
        case 'stopWrapper':
          console.log('阻止事件冒泡  外部事件')
          break
        case 'stopInner':
          console.log('阻止事件冒泡  内部事件')
          break
        default:
          console.log('未定义指令')
      }
    }
  },
  created() {
  },
  watch: {
    watchData: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      deep: true,
      immediate: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../assets/css/mixin.styl"
  .home
    .red
      color: #ff9995
</style>
