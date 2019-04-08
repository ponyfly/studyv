<template>
  <div class="ele">
    <el-button>我是button</el-button>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <div class="scroll__container">
          <ul class="scroll__content">
            <li class="scroll__item" v-for="(item, index) in list" :key="index">{{ item }}</li>
          </ul>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import { Container, Header, Main, Footer } from 'element-ui'
  export default {
    name: 'Ele',
    data() {
      return {
        list: ['text01', 'text02', 'text03']
      }
    },
    created() {
    },
    components: {
      'el-container': Container,
      'el-header': Header,
      'el-main': Main,
      'el-footer': Footer
    }
  }
</script>

<style lang="stylus" scoped>
.ele
  flex: auto
  background-color #5bc874
  .el-container
    height 100%
    .el-main
      background-color: #409EFF;
      flex auto
      .scroll__container
        height:100%;
        overflow scroll;
        .scroll__item
          padding: 10px 0
          border 1px solid #fcc
</style>
