<<<<<<< HEAD
import { VueStorefrontModule } from '@vue-storefront/core/lib/module'
import { Catalog } from "@vue-storefront/core/modules/catalog"
=======
import { VueStorefrontModule } from '@vue-storefront/module'
import { Catalog } from '@vue-storefront/core/modules/catalog'
>>>>>>> Start on implementing payments via vuex
import { Cart } from '@vue-storefront/core/modules/cart'
import { Checkout } from '@vue-storefront/core/modules/checkout'
import { Compare } from '@vue-storefront/core/modules/compare'
import { Review } from '@vue-storefront/core/modules/review'
import { Mailer } from '@vue-storefront/core/modules/mailer'
import { Mailchimp } from '../modules/mailchimp'
<<<<<<< HEAD
import { Example } from './module-template'
=======
import { Mollie } from '../modules/payment-getnoticed-mollie'
>>>>>>> Start on implementing payments via vuex
import { Notification } from '@vue-storefront/core/modules/notification'
import { RecentlyViewed } from '@vue-storefront/core/modules/recently-viewed'
import { Homepage } from './homepage'
import { Claims } from './claims'
import { PromotedOffers } from './promoted-offers'
import { Ui } from './ui-store'
import { GoogleAnalytics } from './google-analytics';
import { AmpRenderer } from './amp-renderer';
import { PaymentBackendMethods } from './payment-backend-methods';
import { RawOutputExample } from './raw-output-example'
import { Magento2CMS } from './magento-2-cms'

<<<<<<< HEAD
// Some modules  that still needs API refactoring are  temporary registered in core
// This is how you can adjust any module with application-specific behavior
const extendedExample = new VueStorefrontModule({
  key: 'extend',
  afterRegistration: function(isServer, config) {
    console.info('Hello, im extended now!')
  }
})

Example.extend(extendedExample)

=======
>>>>>>> Start on implementing payments via vuex
export const registerModules: VueStorefrontModule[] = [
  Checkout,
  Catalog,
  Cart,
  Compare,
  Review,
  Mailer,
  Mailchimp,
  Notification,
  Ui,
  RecentlyViewed,
  Homepage,
  Claims,
  PromotedOffers,
<<<<<<< HEAD
  Magento2CMS,
  GoogleAnalytics,
  PaymentBackendMethods,
  RawOutputExample,
  AmpRenderer
  // Example
]
=======
  Mollie
]
>>>>>>> Start on implementing payments via vuex
