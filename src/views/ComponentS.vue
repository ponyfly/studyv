<template>
  <div>
    <h1>通过事件向父级组件发送消息</h1>
    <h2 :style="h2Style">字体</h2>
    <large-font v-on:large-font="changeFontSize" v-on:change-color="changeColor"></large-font>
    <h2>在组件上使用v-model</h2>
    <lg-input v-model="searchText"></lg-input>
    <h2>通过插槽分发内容</h2>
    <lg-slot>插槽里的内容</lg-slot>
    <h2>动态组件</h2>
    <button v-for="(tab, index) in tabs"
            :key="index"
            :class="[ 'btn', { 'active': currentTab === tab } ]"
            @click="currentTab = tab">{{tab}}</button>
    <component :is="currentTabComponent"></component>
    <h2>基础组件的自动化全局注册</h2>
    <base-button backgroundColor="#3dffb3">base btn</base-button>
    <h2>props自定义验证</h2>
    <lg-validator :valContext="valContext"></lg-validator>
    <h2>非 Prop 的特性</h2>
    <LgUnprops class="wrapper" user-name="zhangsan" name="san" :dynamic="dynamicData"></LgUnprops>
    <h2>自定义组件model</h2>
  </div>
</template>

<script>
  import LargeFont from '@/components/LargeFont.vue'
  import LgInput from '@/components/LgInput.vue'
  import LgSlot from '@/components/LgSlot.vue'
  import TabArchive from '@/components/TabArchive.vue'
  import TabHome from '@/components/TabHome.vue'
  import TabPost from '@/components/TabPost.vue'
  import LgValidator from '@/components/LgValidator.vue'
  import LgUnprops from '@/components/LgUnprops.vue'
  export default {
    name: 'ComponentS',
    data() {
      return {
        h2Style: {
          fontSize: '16px',
          color: '#000'
        },
        searchText: 'aaaaaaaaaaaaa',
        tabs: ['Home', 'Post', 'Archive'],
        currentTab: 'Home',
        valContext: 'success',
        dynamicData: 'dynamicData'
      }
    },
    computed: {
      currentTabComponent() {
        return `Tab${this.currentTab}`
      }
    },
    components: {
      LargeFont,
      LgInput,
      LgSlot,
      TabArchive,
      TabHome,
      TabPost,
      LgValidator,
      LgUnprops
    },
    methods: {
      changeFontSize() {
        this.h2Style.fontSize = parseInt(this.h2Style.fontSize.slice(0, 2)) + 1 + 'px'
      },
      changeColor(color) {
        this.h2Style.color = color
      }
    },
    updated() {
      console.log('updated')
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../assets/css/mixin.styl"
  h1
    font-size 40px
    color #000
  h2
    color orangered
  .btn
    wh(100px, 30px)
    &.active
      border(2px)
</style>
