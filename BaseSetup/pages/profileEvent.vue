<template>
    <ProfileLay>
        <EditEvent v-for="event in store.AllEventArtWork" :key="art._id" :id="art._id" :title="art.title" :info="art.info" :location="art.location" :date="art.date" />
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
