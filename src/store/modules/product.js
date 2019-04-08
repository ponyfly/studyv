import shop from '@/api/shop'

const state = {
  all: []
}

const getters = {

}

const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  },
  testAction(contenxt) {
    console.log(contenxt)
  }
}

const mutations = {
  setProducts(state, products) {
    state.all = products
  },
  decrementProductInventory(state, { id }) {
    console.log(arguments)
    const pro = state.all.find(pro => pro.id === id)
    pro.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
