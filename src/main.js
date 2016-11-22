import Vue from 'vue'
import store from './store'
import router from './router'
import App from './app/containers/App'

import './vendor/flexible'

new Vue({
    store,
    router,
    ...App
}).$mount('#app')
