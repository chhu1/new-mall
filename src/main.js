import Vue from 'vue'
import 'babel-polyfill'
import store from './store'
import router from './router'
import App from './app/containers/App'
import { Button } from 'element-ui'

Vue.use(Button)

import './vendor/flexible'

new Vue({
    store,
    router,
    ...App
}).$mount('#app')
