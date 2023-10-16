<template>
    <MainLay>
        <div class="w-[450px] h-[700px] flex flex-col justify-between items-center mx-auto mb-14 border-2 border-black ">
            <h1 class="text-2xl font-bold text-center mx-auto w-[90%] h-16 underline underline-offset-2">SignIn</h1>
            <div class="flex flex-col h-[35%] justify-between items-center">
                <div class="flex items-center flex-col justify-between ">
                    <label for="email" class="text-black capitalize font-medium">email required</label>
                    <input required v-model="email" id="email" type="email" class="border-b-2 border-black outline-none pl-1 w-[300px] bg-slate-50">
                </div>
                <div class="flex items-center flex-col justify-between ">
                    <label for="password" class="text-black capitalize font-medium">password</label>
                    <input required v-model="password" id="password" type="password" class="border-b-2 border-black outline-none pl-1 w-[300px] duration-500 ease-in-out bg-slate-50">
                </div>
                <div class="flex items-center flex-col justify-between ">
                    <label for="confirm password" class="text-black capitalize font-medium">confirm password</label>
                    <input required v-model="confirmPassword" id="confirm password" type="password" class="border-b-2 border-black outline-none pl-1 w-[300px] bg-slate-50">
                </div>
            </div>
            <button @click="Login()" class="w-[140px] h-10 btn z-[1]">
                <h3 class="w-full h-full bg-black text-lg text-white p-0.5 border-2 border-black capitalize font-semibold">
                    submit
                </h3>
            </button>
            <div class=" h-10 flex items-center w-[80%] capitalize">
                <h3 class="text-md font-bold text-center mx-auto ">don't you have an account ?</h3>
                <nuxt-link :to="{ name: 'Register' }">
                    <h5 class="text-md font-extrabold text-center mx-auto ">SignUp</h5>
                </nuxt-link>
            </div>
        </div>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from "../layouts/MainLay.vue";
import axios from 'axios'
const password = ref('')
const confirmPassword = ref('')
const email = ref('')
const Login = async() =>{
    if(password.value != confirmPassword.value){
        console.error('password iss not  matching')
        return
    }
    try {
        const token  = await axios.post('http://localhost:3000/api/ArtVenture/auth/Login',{ email:email.value , password : password.value })
        console.log(token)
    } catch (error) {
        console.log(error)
    }
}
</script>

<style scoped></style>