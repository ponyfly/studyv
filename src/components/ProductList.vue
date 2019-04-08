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
    computed: mapState('product', {
      products: state => state.all
    }),
    methods: {
      ...mapActions('cart', [
        'addProductToCart'
      ]),
      ...mapActions('product', [
        'getAllProducts'
      ])
    },
    created() {
      // this.$store.dispatch('product/getAllProducts')
      this.getAllProducts()
      this.$store.dispatch('product/testAction')
    }
  }
</script>

<style scoped>

</style>
