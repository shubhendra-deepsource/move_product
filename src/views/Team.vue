<template lang="pug">

section.team-member-view
    p Get to know your future team
    TeamMemberList(v-bind:teamMembers="teamMembers")

</template>

<script>

import TeamMemberList from '@/components/TeamMemberList.vue'
import { ref } from 'vue'

export default {
    name: 'Team',
    components: {
        TeamMemberList
    },
    setup () {
        const teamMembers = ref([])

        async function fetchMembers () {
            const url = 'https://randomuser.me/api/?results=4'
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    teamMembers.value = data.results
                })
        }

        fetchMembers()

        return {
            teamMembers
        }
    }
}

</script>

<style scoped lang="stylus">

section.team-member-view
    padding-top: 2rem
    border-top: 4px dashed #c3c3c3

</style>
