import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import store from './store/index';
import vClickOutside from 'v-click-outside'
export const eventBus = new Vue()


Vue.use(vClickOutside)

Vue.use(Vuex)

Vue.use(require('vue-moment'));


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store
}).$mount('#app')