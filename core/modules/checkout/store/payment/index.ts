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
    method: 'cashondelivery'
  },
  mutations: {
    addMethod (state, paymentMethod) {
      state.methods.push(paymentMethod)
    },
    replaceMethods (state, paymentMethods) {
      state.methods = paymentMethods
    },
    changeMethod (state, paymentMethod) {
      state.method = paymentMethod
    }
  },
  actions: {
    addMethod ({ commit }, paymentMethod) {
      commit('addMethod', paymentMethod)
    },
    replaceMethods ({ commit }, paymentMethods) {
      commit('replaceMethods', paymentMethods)
    },
    methodChanged ({ commit }, paymentMethod) {
      commit('changeMethod', paymentMethod)
    }
  },
  getters: {
    paymentMethods (state) {
      return state.methods
    },
    currentMethod (state) {
      return state.method
    }
  }
}
