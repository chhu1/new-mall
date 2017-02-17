<template lang="jade">
    .block
        ImgCarousel(:items="imgItems")
</template>

<script>
import ImgCarousel from '../components/ImgCarousel'

export default {
    name: 'app',
    components: {
        ImgCarousel
    },
    data() {
        return {
            imgItems: [{
                link: 'https://www.baidu.com',
                img: 'https://wlqq4mall.b0.upaiyun.com/point/20161129/1480411916091.jpg'
            }, {
                link: 'https://www.baidu.com',
                img: 'https://wlqq4mall.b0.upaiyun.com/point/20161213/1481610373394.jpg'
            }]
        }
    }
}
</script>

<style lang="stylus" >
@import '../../static/stylus/base'
.scoped
    text-align left
    color colFontBlack
</style>
