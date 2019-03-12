<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ProductCart/>
  </div>
</template>

<script>
  import ProductCart from '@/components/ProductCart.vue'
  import ProductList from '@/components/ProductList.vue'
  export default {
    name: 'ComponentCart',
    components: {
      ProductCart,
      ProductList
    }
  }
</script>

<style scoped>

</style>
