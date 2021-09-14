import Vue from 'vue'
import App from './App.vue'

// import './assets/sass/main.sass'
import './assets/sass/chat_form.css'
import './assets/sass/chat_message_list.css'
import './assets/sass/chat_title.css'
import './assets/sass/contact_info.css'
import './assets/sass/friend_list.css'
import './assets/sass/info_option_container.css'
import './assets/sass/media_container.css'
import './assets/sass/option.css'
import './assets/sass/status_container.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')