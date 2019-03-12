<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button :disabled="!product.inventory" @click="addProductToCart(product)">add to cart</button>
    </li>
  </ul>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'ProductList',
    computed: mapState({
      products: state => state.product.all
    }),
    methods: {
      ...mapActions('cart', [
        'addProductToCart'
      ])
    },
    created() {
      this.$store.dispatch('product/getAllProducts')
    }
  }
</script>

<style scoped>

</style>
