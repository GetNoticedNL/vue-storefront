import { checkoutModule } from './store/checkout'
import { paymentModule } from './store/payment'
import { shippingModule } from './store/shipping'

<<<<<<< HEAD
import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'
=======
import {
  VueStorefrontModule,
  VueStorefrontModuleConfig
} from '@vue-storefront/module'
>>>>>>> Start on implementing payments via vuex

export const KEY = 'checkout'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: {
    modules: [
      { key: 'shipping', module: shippingModule },
      { key: 'payment', module: paymentModule },
      { key: 'checkout', module: checkoutModule }
    ]
  }
}

export const Checkout = new VueStorefrontModule(moduleConfig)
