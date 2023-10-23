<template>
    <div>
        <Nav />
        <div class="flex justify-between  items-center w-full h-full flex-wrap container mx-auto ">
            <div class="w-full mb-5  border-2 border-black h-10 flex justify-evenly  items-center">
                <nuxt-link :to="{ name: 'profile' }">
                <Icon />
                <h1 class="text-2xl hover:underline underline-offset-8 hover:scale-110 duration-500 font-medium capitalize w-full  text-center ">
                    profile</h1>
            </nuxt-link>
            <nuxt-link :to="{ name: 'profileArt' }">
                <Icon />
                <h1 class="text-2xl hover:underline underline-offset-8 hover:scale-110 duration-500 font-medium capitalize w-full  text-center ">
                    your artwork</h1>
            </nuxt-link>
            <nuxt-link :to="{ name: 'profileEvent' }">
                <Icon />
                <h1 class="text-2xl hover:underline underline-offset-8 hover:scale-110 duration-500 font-medium capitalize w-full  text-center ">
                    your Events</h1>
            </nuxt-link>
            </div>
            <div class="flex  gap-4 flex-wrap justify-center ">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>