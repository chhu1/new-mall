<template lang="jade">
#app
    Loading(:isLonding="isLonding")
    keep-alive
        router-view(class="router")
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '../components/Loading'

export default {
    name: 'app',
    components: {
        Loading
    },
    computed: {
        ...mapGetters(['isLonding'])
    }
}
</script>

<style lang="stylus">
@import '../../static/stylus/base'
#app
    text-align left
    color colFontBlack
</style>
