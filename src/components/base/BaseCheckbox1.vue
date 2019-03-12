<template>
  <div>
    <input
            type="checkbox"
            :checked="checked"
            @change="$emit('change', $event.target.checked)"
            >
    {{value}}
  </div>
</template>

<script>
  export default {
    name: 'BaseCheckbox',
    // inheritAttrs: false,
    model: {
      prop: '',
      event: 'change'
    },
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      value: String
    }
  }
</script>

<style lang="stylus" scoped>

</style>
