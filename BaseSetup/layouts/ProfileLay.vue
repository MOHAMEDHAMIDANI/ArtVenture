<template>
    <div>
        <Nav />
        <div class="flex justify-between  items-center w-full h-full flex-wrap container mx-auto ">
            <div class="w-[250px] border-2 border-black min-h-[200px] flex-col flex justify-evenly  items-center">
                <nuxt-link :to="{ name: 'Events' }">
                <Icon />
                <h1 class="text-2xl hover:underline underline-offset-8 hover:scale-110 duration-500 font-medium capitalize w-full  text-center ">
                    profile</h1>
            </nuxt-link>
            <nuxt-link :to="{ name: 'Events' }">
                <Icon />
                <h1 class="text-2xl hover:underline underline-offset-8 hover:scale-110 duration-500 font-medium capitalize w-full  text-center ">
                    your artwork</h1>
            </nuxt-link>
            <nuxt-link :to="{ name: 'Events' }">
                <Icon />
                <h1 class="text-2xl hover:underline underline-offset-8 hover:scale-110 duration-500 font-medium capitalize w-full  text-center ">
                    your Events</h1>
            </nuxt-link>
            
            </div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>