<template>
    <ProfileLay>
        <EditArtwork v-for="art in store.AllArtWorkByUser" :key="art._id" :id="art._id" :title="art.title" :info="art.info" :price="art.price" :image="art.image"  />
    </ProfileLay>
</template>

<script setup lang="ts">
import ProfileLay from "../layouts/ProfileLay.vue"
import { useUserStore}  from '../stores/user'
const store = useUserStore()
onBeforeMount(() => {
    store.GetAllArtWorkByUser()
})

</script>

<style scoped>

</style>