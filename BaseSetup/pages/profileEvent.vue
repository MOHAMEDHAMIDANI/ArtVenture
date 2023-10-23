<template>
    <ProfileLay>
        <EditEvent v-for="event in store.AllEventArtWorkByUser" :key="event._id" :id="event._id" :title="event.title" :info="event.info" :location="event.location" :date="event.Date" />
    </ProfileLay>
</template>

<script setup lang="ts">
import ProfileLay from "../layouts/ProfileLay.vue"
import { useUserStore}  from '../stores/user'
const store = useUserStore()
onBeforeMount(() => {
    store.GetAllEventArtWorkByUser()
})


</script>

<style scoped>

</style>
