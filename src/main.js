import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import store from './store/index';
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store
}).$mount('#app')