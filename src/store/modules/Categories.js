import axios from 'axios'
import { apiUrl } from '@/config'

export default {
  namespaced: true,
  state: {
    categories: []
  },
  getters: {
    Categories (state) {
      return state.categories
    },
    CategoriesAmount (state) {
      return state.categories.length
    }
  },
  mutations: {
    UPDATE (state, data) {
      state.categories = data
    }
  },
  actions: {
    async fetchCategories ({ commit }) {
      const res = await axios.get(`${apiUrl}/categories`)
      commit('UPDATE', res.data)
    }
  }
}
