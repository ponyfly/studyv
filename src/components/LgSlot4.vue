<template>
  <div>
    <slot :slotScopeData="slotScopeData">
      <div>{{slotScopeData.msg2}}</div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'LgSlot4',
    props: {},
    data() {
      return {
        slotScopeData: {
          msg1: '带有 slot-scope 特性的作用域插槽',
          msg2: '为了让 user 在父级的插槽内容可用，我们可以将 user 作为一个 slot 元素的特性绑定上去,'
        }
      }
    },
    methods: {
    },
    components: {
    }
  }
</script>

<style scoped>

</style>
