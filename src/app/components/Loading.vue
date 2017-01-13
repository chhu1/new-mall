<template lang="jade">
    div(class="loading" v-show="isLonding")
</template>

<script>
export default {
    name: 'loading',
    props: {
        isLonding: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../static/stylus/base'
.loading
    top 50%
    left 50%
    z-index 9999
    position fixed
    width pxRem(150)
    height pxRem(120)
    border-radius pxRem(12)
    margin pxRem(-75) pxRem(-60)
    background rgba(0, 0, 0, 0.6)
    &:after
        top 50%
        left 50%
        content ''
        width pxRem(40)
        height pxRem(40)
        margin pxRem(-20)
        position absolute
        background url('../../static/images/loading.png') center center no-repeat
        background-size pxRem(40) pxRem(40)
        animation loadingplay 0.8s linear infinite
        transform translate3d(0, 0, 0)

@keyframes loadingplay {
    0% {
        transform rotate(0)
    }
    100% {
        transform rotate(360deg)
    }
}
</style>