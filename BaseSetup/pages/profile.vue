<template>
    <ProfileLay>
        <div class="w-full h-[1000px]  flex justify-start flex-col items-center" >
            <div class="w-[200px] bg-blue-400 rounded-full overflow-hidden">
                <img v-if="store.photo" :src="store.photo" alt="" class=" w-full h-full">
                <img v-else src="../assets/img/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="" class=" w-full h-full">
            </div>
            <!-- <form action="" class="mt-5 h-[150px] flex flex-col justify-between items-center">
                <div class="flex items-center flex-col justify-between ">
                    <label for="username" class="text-black capitalize font-medium">username</label>
                    <input required v-model="username" id="username" type="password"
                        class="border-b-2 border-black outline-none pl-1 w-[300px] duration-500 ease-in-out bg-slate-50">
                </div>
                <div class="flex items-center flex-col justify-between ">
                    <label for="bio" class="text-black capitalize font-medium">bio</label>
                    <input required v-model="bio" id="bio" type="password"
                        class="border-b-2 border-black outline-none pl-1 w-[300px] duration-500 ease-in-out bg-slate-50">
                </div>
                <button @click="Register" class="w-[140px] h-10 btn z-[1] mt-2">
                <h3 class="w-full h-full bg-black text-lg text-white p-0.5 border-2 border-black capitalize font-semibold">
                    submit
                </h3>
            </button>
            </form> -->
            <div class="mt-5 h-[150px] w-[25%] flex flex-col justify-between items-center">
                <h3 class="font-bold text-2xl ">{{ store.username }}</h3>
                <p class="font-semibold text-xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia non neque eligendi incidunt odio harum dignissimos facilis nihil quas libero repellat at qui cum, consequuntur quo ratione sed quasi maiores?</p>
            </div>
        </div>
    </ProfileLay>
</template>

<script setup lang="ts">
import ProfileLay from "../layouts/ProfileLay.vue"
import { useUserStore } from "../stores/user"
const store = useUserStore()

</script>

<style scoped>

</style>