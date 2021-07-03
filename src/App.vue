<template lang="pug">

#nav
    router-link(to="/") go_home
header
    h1 We move_product
router-view

</template>

<style lang="stylus">

@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@500&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap')

body
    background-color       : #f2f2f2
    font-family            : "Red Hat Text", sans-serif
    font-weight            : 500

header
    padding-bottom: 1rem

#app
    -webkit-font-smoothing : antialiased
    -moz-osx-font-smoothing: grayscale
    text-align             : center
    color                  : #000000
    margin-top             : 60px

a
    text-decoration        : none
    color                  : #000000
a:hover
    text-decoration        : underline

ul
    list-style-type: none
    padding: 0rem

button
    padding                : 1rem 4rem
    border                 : none
    border-radius          : 0.4rem
    background-color       : #000000
    color                  : #ffffff
    font-family            : "Red Hat Text", sans-serif

</style>

<script>

// @ is an alias to /src
import Home from '@/views/Home.vue'

export default {
    name: 'app',
    components: {
        Home
    }
}

</script>
