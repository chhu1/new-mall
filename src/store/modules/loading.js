import { SHOW_LOADING, HIDE_LOADING } from '../actions'

const state = {
    isLonding: false
}

const mutations = {
    [SHOW_LOADING](state) {
        state.isLonding = true
    },
    [HIDE_LOADING](state) {
        state.isLonding = false
    }
}

export default {
    state,
    mutations
}
