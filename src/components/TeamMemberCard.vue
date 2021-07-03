<template lang="pug">

ul.team-member-card
    li
        img(:src="teamMember.picture.medium")
    li
        h3 {{ teamMember.name.first }} {{ teamMember.name.last }}
    li
        a(:href="'mailto:' + teamMember.email") {{ teamMember.email }}
    li
        p {{ teamMember.location.country }}
    li
        button Connect now

</template>

<script>

export default {
    name: 'TeamMemberCard',
    props: {
        teamMember: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped lang="stylus">

ul.team-member-card
    width: 16rem
    display: flex
    flex-flow: wrap column
    justify-content: space-evenly
    border: 4px solid #000000
    img
        border-radius: 50%
        margin-top: 2rem
    p, a
        padding-top: 1rem
        font-size: 0.8rem
    button
        margin: 2rem 0

</style>
