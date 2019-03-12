import shop from '@/api/shop'

const state = {
  items: [],
  checkoutStatus: null
}

const getters = {
  cartProducts(state, getters, rootState, rootGetter) {
    console.log(rootState)
    return state.items.map(({ id, quantity }) => {
      const pro = rootState.product.all.find(pro => pro.id === id)
      return {
        title: pro.title,
        price: pro.price,
        quantity
    }
    })
  },
  cartTotalPrice(state, getters) {
    return getters.cartProducts.reduce((total, curVal) => {
      console.log(total)
      return total + curVal.price * curVal.quantity
    }, 0)
  }
}

const actions = {
  checkout({ state, commit, rootState, rootGetter }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },
  addProductToCart({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      console.log(cartItem)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('product/decrementProductInventory', { id: product.id }, { root: true })
    }
  }
}

const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, { id }) {
    state.items.find(pro => pro.id === id).quantity++
  },
  setCartItems(state, { items }) {
    state.items = items
  },
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
