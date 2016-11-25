<template lang="jade">
    #app
        img(src="../../static/images/logo.png")
        Hello
        Loading(:isLonding="isLonding")
        keep-alive
            router-view(class="router")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Hello from '../components/Hello'
import Loading from '../components/Loading'

export default {
    name: 'app',
    components: {
        Hello,
        Loading
    },
    created() {
        this.showLoading()
        setTimeout(function() {
            this.hideLoading()
        }.bind(this), 5000)
    },
    computed: {
        ...mapGetters(['isLonding'])
    },
    methods: {
        ...mapActions(['showLoading', 'hideLoading'])
    }
}
</script>

<style lang="stylus" scoped>
@import '../../static/stylus/base'
#app
    text-align center
    color colFontBlack
    margin-top pxRem(120)
    font-family "Microsoft YaHei", Arial, Helvetica, sans-serif
</style>
