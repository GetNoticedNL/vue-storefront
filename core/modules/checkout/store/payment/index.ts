import { Module } from 'vuex'
import RootState from '@vue-storefront/store/types/RootState'
import PaymentState from '../../types/PaymentState'

export const paymentModule: Module<PaymentState, RootState> = {
  namespaced: true,
  state: {
    methods: [
      {
        code: 'cashondelivery',
        title: 'Cash On Delivery',
        is_server_method: true
      }
    ],
    selectedMethod: 'cashondelivery'
  },
  mutations: {
    addMethod (state, paymentMethod) {
      state.methods.push(paymentMethod)
    },
    replaceMethods (state, paymentMethods) {
      state.methods = paymentMethods
    },
    updateSelectedMethod (state, paymentMethod) {
      state.selectedMethod = paymentMethod
    }
  },
  actions: {
    addMethod ({ commit }, paymentMethod) {
      commit('addMethod', paymentMethod)
    },
    replaceMethods ({ commit }, paymentMethods) {
      commit('replaceMethods', paymentMethods)
    },
    updateSelectedMethod ({ commit }, paymentMethod) {
      commit('updateSelectedMethod', paymentMethod)
    }
  },
  getters: {
    paymentMethods (state) {
      return state.methods
    },
    currentMethod (state) {
      return state.selectedMethod
    }
  }
}
