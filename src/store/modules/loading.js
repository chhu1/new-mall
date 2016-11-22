import { SHOW_LOADING, HIDE_LOADING } from '../actions'

const state = {
    showLoading: false
}

const mutations = {
    [SHOW_LOADING](state) {
        state.showLoading = true
    },
    [HIDE_LOADING](state) {
        state.showLoading = false
    }
}

export default {
    state,
    mutations
}
