import { createStore } from 'vuex'
import Photos from './modules/Photos'
import Categories from './modules/Categories'

export default createStore({
  // state: {
  //   categories: [],
  //   photos: [],
  //   photosRequest: {
  //     pending: false,
  //     error: false,
  //     success: false
  //   },
  //   allPhotosLoaded: false
  // },
  // getters: {
  //   Categories (state) {
  //     return state.categories
  //   },
  //   CategoriesAmount (state) {
  //     return state.categories.length
  //   },
  //   Photos (state) {
  //     return state.photos
  //   },
  //   PhotosRequest (state) {
  //     return state.photosRequest
  //   },
  //   allPhotosLoaded (state) {
  //     return state.allPhotosLoaded
  //   }
  // },
  // mutations: {
  //   UPDATE_CATEGORIES (state, data) {
  //     state.categories = data
  //   },
  //   UPDATE_PHOTOS (state, data) {
  //     state.photos = data
  //   },
  //   ADD_PHOTOS (state, data) {
  //     state.photos = [...state.photos, ...data]
  //   },
  //   START_PHOTOS_REQUEST (state) {
  //     state.photosRequest = {
  //       pending: true,
  //       error: false,
  //       success: false
  //     }
  //   },
  //   END_PHOTOS_REQUEST (state) {
  //     state.photosRequest = {
  //       pending: false,
  //       error: false,
  //       success: true
  //     }
  //   },
  //   ERROR_PHOTOS_REQUEST (state) {
  //     state.photosRequest = {
  //       pending: false,
  //       error: true,
  //       success: false
  //     }
  //   },
  //   TOGGLE_ALL_PHOTOS_LOADED (state) {
  //     state.allPhotosLoaded = !state.allPhotosLoaded
  //   },
  //   ADD_VOTE (state, _id) {
  //     state.photos._id = _id
  //     console.log(state.photos._id)
  //   }
  // },
  // actions: {
  //   async fetchCategories ({ commit }) {
  //     const res = await axios.get(`${apiUrl}/categories`)
  //     commit('UPDATE_CATEGORIES', res.data)
  //   },
  //   async fetchPhotosFromAPI ({ commit, state }, { url, page }) {
  //     try {
  //       // if it's first set of photos and allPhotosLoaded is true => make it default false
  //       if (state.allPhotosLoaded && page === 1) commit('TOGGLE_ALL_PHOTOS_LOADED')

  //       // it's not the first page and allPhotosLoaded is true? => stop function
  //       if (state.allPhotosLoaded) return false

  //       commit('START_PHOTOS_REQUEST')
  //       const res = await axios.get(url)
  //       commit('END_PHOTOS_REQUEST')

  //       // if the set is not full, toggle allPhotosLoaded
  //       if (res.data.length < 12) commit('TOGGLE_ALL_PHOTOS_LOADED')

  //       if (page > 1) commit('ADD_PHOTOS', res.data)
  //       else commit('UPDATE_PHOTOS', res.data)
  //     } catch (err) {
  //       commit('ERROR_PHOTOS_REQUEST')
  //     }
  //   },

  //   async fetchPhotos ({ dispatch }, page) {
  //     dispatch('fetchPhotosFromAPI', { url: `${apiUrl}/photos/${page}`, page })
  //   },

  //   async fetchCategoryPhotos ({ dispatch }, { category, page }) {
  //     dispatch('fetchPhotosFromAPI', { url: `${apiUrl}/photos/${category}/${page}`, page })
  //   },

  //   addVote ({ commit }, _id) {
  //     axios.put(`${apiUrl}/photos/vote/${_id}`, _id)
  //     commit('ADD_VOTE', _id)
  //     console.log('addvote')
  //     console.log(_id)
  //   }
  // },
  modules: {
    Photos,
    Categories
  }
})
