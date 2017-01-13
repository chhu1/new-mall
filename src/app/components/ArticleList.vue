<template lang="jade">
    .article-wrap
        section(v-for="item in listData")
            {{ item.message }}
</template>

<script>
export default {
    name: 'articleList',
    props: {
        listData: {
            type: Array
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../static/stylus/base'

</style>