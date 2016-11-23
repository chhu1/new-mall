import Vue from 'vue'
import Vuex from 'vuex'

import loading from './modules/loading'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        loading
    },
    strict: process.env.NODE_ENV !== 'production'
})

if (module.hot) {
    module.hot.accept(['./modules/loading'], () => {
        const loading = require('./modules/loading').default
        store.hotUpdate({
            modules: {
                loading
            }
        })
    })
}

export default store
