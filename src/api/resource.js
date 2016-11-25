import Vue from 'vue'
import VueResource from 'vue-resource'
import { apiDomain } from '../config'
import { getCookieValue } from '../utils/cookie'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next) => {
    request.headers = request.headers || {}
    let userId = getCookieValue('userId')
    let userToken = getCookieValue('userToken')
    if (userId && userToken) {
        request.headers.userId = userId.replace(/(^")|("$)/g, '')
        request.headers.userToken = userToken.replace(/(^")|("$)/g, '')
    }
    next((response) => {
        return response
    })
})

const serverDomain = process.env.NODE_ENV !== 'production' ? '' : apiDomain
export const userResource = Vue.resource(serverDomain + '/user{/event}')
