<template lang="jade">
    #app
        img(src="../../static/images/logo.png")
        Hello
        Loading(:isLonding="isLonding")
        ArticleList(:listData="articleList")
        keep-alive
            router-view(class="router")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Hello from '../components/Hello'
import ArticleList from '../components/ArticleList'
import Loading from '../components/Loading'

export default {
    name: 'app',
    components: {
        Hello,
        Loading,
        ArticleList
    },
    data() {
        return {
            articleList: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    },
    created() {
        this.testLoading()
    },
    computed: {
        ...mapGetters(['isLonding'])
    },
    methods: {
        testLoading() {
            this.showLoading()
            setTimeout(function() {
                this.hideLoading()
            }.bind(this), 5000)
        },
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
