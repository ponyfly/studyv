<template>
  <div class="container">
    <header>
      <slot name="header">
        default header
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer">
        default footer
      </slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'LgSlot3',
    data() {
      return {
      }
    },
    methods: {
    },
    components: {
    }
  }
</script>

<style lang="stylus" scoped>
.container
  border 2px solid #000
  border-radius 16px
</style>
