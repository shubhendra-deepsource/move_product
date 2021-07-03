<template lang="pug">

section.valueprop
    p Design.
    p Develop.
    p Deploy.
ul.menu
    li.left
        router-link(to="/team") Meet
            br
            | the
            br
            | team
    li.right
        router-link(to="/product") Try
            br
            | our
            br
            | apps
button Start free trial

</template>

<style scoped lang="stylus">

h1
    font-weight: 700
    font-size: 2.4rem
    padding: 1rem
p
    margin: 0rem
ul.menu
    display: flex
    justify-content: center
    flex-wrap: wrap
    margin 3rem auto
    padding: 0
    li
        padding: 2.4rem 1.6rem
        list-style: none
        font-size: 1.4rem
    li.left
        box-shadow: 4px 0
        text-align: right
    li.right
        box-shadow: -4px 0
        text-align: left
button
    padding: 1rem 4rem
    border: none
    border-radius: 0.4rem
    background-color: #000000
    color: #ffffff
    font-family: "Red Hat Text", sans-serif
button:hover
    cursor: pointer
    background-color: #303030

</style>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
    }
}

</script>
