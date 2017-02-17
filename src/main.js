import Vue from 'vue'
import 'babel-polyfill'
import store from './store'
import router from './router'
import App from './app/containers/App'
import { Button, Carousel, CarouselItem } from 'element-ui'

import './vendor/flexible'
import './static/stylus/normalize.styl'

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)

new Vue({
    store,
    router,
    ...App
}).$mount('#app')
