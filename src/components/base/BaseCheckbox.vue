<template>
  <div class="testdivclass">
    <input
            type="checkbox"
            :checked="checked"
            v-bind="$attrs"
            @change="$emit('change, $event.target.checked')">
    {{value}}
  </div>
</template>

<script>
  export default {
    name: 'BaseCheckbox',
    inheritAttrs: false, // 禁止div继承父作用域的非prop的特性绑定，使用v-bind=$attrs可以将非prop的特性绑定到非根元素上，但是不影响class和style的绑定，例如：inheritAttrs：true时，元素渲染为<div class=testdivclass testclass value="tom" name="sex" data-a="test">,当inheritAttrs：false时，元素渲染为<div class=testdivclass testclass>，使用v-bind=$attrs时，input元素会渲染为<input value="tom" name="sex" data-a="test"/>
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      value: String
    },
    created() {
      console.log(this.$attrs)
    }
  }
</script>

<style lang="stylus" scoped>

</style>
