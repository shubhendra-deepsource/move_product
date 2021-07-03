<template lang="pug">

section
    ul.team-member-list
        li.team-member(v-for="(teamMember, index) in teamMembers" :key="index" :teamMember="teamMember")
            TeamMemberCard(v-bind:teamMember="teamMember")

</template>

<script>

import TeamMemberCard from './TeamMemberCard.vue'

export default {
    name: 'TeamMemberList',
    props: {
        teamMembers: {
            type: Object,
            required: true
        }
    },
    components: {
        TeamMemberCard
    }
}

</script>

<style scoped lang="stylus">

.team-member-list
    margin: 3.4rem auto
    display: flex
    flex-flow: row wrap
    justify-content: space-evenly

</style>
