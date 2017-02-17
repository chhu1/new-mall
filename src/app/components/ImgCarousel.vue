<template lang="jade">
.block
    el-carousel(class="carousel")
        el-carousel-item(class="carousel-item" v-for="item in items")
            a(:href="item.link" target="_black")
                img(:src="item.img")
</template>

<script>
export default {
    name: 'imgCarousel',
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../static/stylus/base'
.block
    display block

.carousel
    height pxRem(260)
    .carousel-item
        a
            display block
            img
                width 100%
                height inherit
</style>
