<template>
    <div class="h-12 w-full container mb-16 border-b border-black mx-auto flex justify-between items-center">
        <div>
            <nuxt-link :to="{ name: 'index' }">
                <h1 class="text-2xl font-bold capitalize ">artVenture</h1>
            </nuxt-link>
        </div>
        <div class="flex  sm:hidden md:flex justify-between items-center h-full xl:w-[400px] md:w-[300px] ">
            <nuxt-link :to="{ name: 'Events' }">
                <Icon />
                <h1 class="text-xs hover:underline underline-offset-8 hover:scale-110 duration-500 font-medium capitalize">
                    Events</h1>
            </nuxt-link>

            <nuxt-link :to="{ name: 'VirtualGallery' }">
                <Icon />
                <h1 class="text-xs hover:underline underline-offset-8 hover:scale-110 duration-500 font-medium capitalize">
                    Virtual Gallery</h1>
            </nuxt-link>

            <nuxt-link :to="{ name: 'artMarketplace' }">
                <Icon />
                <h1 class="text-xs hover:underline underline-offset-8 hover:scale-110 duration-500 font-medium capitalize">
                    artMarketplace</h1>
            </nuxt-link>
        </div>
        <div class="flex justify-evenly items-center w-[220px]">
            <button v-if="!store.TokenFromLogin" class="w-[90px] btn  z-[1]">
                <nuxt-link :to="{ name: 'Login' }" class="">
                    <h3 class="w-full h-full bg-white text-black border-2 p-0.5 border-black capitalize font-semibold">sign
                        in</h3>
                </nuxt-link>
            </button>
            <button v-if="!store.TokenFromLogin" class="w-[90px] btn z-[1]">
                <nuxt-link :to="{ name: 'Register' }" class="">
                    <h3 class="w-full h-full bg-black text-white  p-0.5 border-2 border-black  capitalize font-semibold">
                        sign up</h3>
                </nuxt-link>
            </button>
            <div @mouseover="openNav = true" @mouseleave="openNav = false" v-if="store.TokenFromLogin" class="flex cursor-pointer relative justify-around btn items-center w-[125px] h-full">
                <div 
                    class="w-full h-9  flex justify-between  items-center text-white  p-0.5 border-2 border-black  capitalize font-semibold">
                    <img src="../assets/img/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt=""
                        class="w-7 h-7 object-cover border rounded-full">
                    <h3 class="text-black text-xs font-thin w-fit "> {{ store.username }}</h3>
                </div>
                <div  v-if="openNav"
                    class=" capitalize absolute top-11 z-20 w-[200px] flex flex-col justify-between items-center max-h-[250px] border-2 border-black shadow-lg bg-white">
                    <div class="bg-white w-full hover:bg-black duration-1000 hover:text-white">
                        <nuxt-link :to="{ name: 'profile' }">
                            <h1 class="w-full h-full text-xl font-bold text-center">Profile</h1>
                        </nuxt-link>
                    </div>
                    <div class="bg-white w-full hover:bg-black duration-1000 hover:text-white">
                        <nuxt-link :to="{ name: 'addart' }">
                            <h1 class="w-full h-full text-xl font-bold text-center">add artwork</h1>
                        </nuxt-link>
                    </div>
                    <div class="bg-white w-full hover:bg-black duration-1000 hover:text-white">
                        <nuxt-link :to="{ name: 'index' }">
                            <h1 class="w-full h-full text-xl font-bold text-center">add event</h1>
                        </nuxt-link>
                    </div>
                    <div class="bg-white md:hidden sm:block w-full hover:bg-black duration-1000 hover:text-white">
                        <nuxt-link :to="{ name: 'index' }">
                            <h1 class="w-full h-full text-xl font-bold text-center">marketplace</h1>
                        </nuxt-link>
                    </div>
                    <div class="bg-white md:hidden sm:block w-full hover:bg-black duration-1000 hover:text-white">
                        <nuxt-link :to="{ name: 'index' }">
                            <h1 class="w-full h-full text-xl font-bold text-center">virtual gallery</h1>
                        </nuxt-link>
                    </div>
                    <div class="bg-white md:hidden sm:block w-full hover:bg-black duration-1000 hover:text-white">
                        <nuxt-link :to="{ name: 'index' }">
                            <h1 class="w-full h-full text-xl font-bold text-center">events</h1>
                        </nuxt-link>
                    </div>
                    <div class="bg-white w-full hover:bg-black duration-1000 hover:text-white">
                        <nuxt-link :to="{ name: 'index' }">
                            <h1 class="w-full h-full text-xl font-bold text-center">logout</h1>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { useUserStore } from '@/stores/user'
const store = useUserStore()
const openNav =  ref(false)
</script>

<style lang="scss" scoped>
.btn {
    position: relative;

    &::after {
        content: '';
        animation-delay: 2s;
        position: absolute;
        z-index: -1;
        left: 3px;
        top: 17px;
        border: 2px solid black;
        width: 90px;
        height: 25px;
        transition: all 0.3s ease-in-out;
    }

    &:hover::after {
        top: -5px;
        left: -5px;
        width: 100px;
        height: 48px;
    }
}</style>