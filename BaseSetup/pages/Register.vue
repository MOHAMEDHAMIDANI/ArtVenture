<template>
    <MainLay>
        <div class="w-[450px] h-[700px] flex flex-col justify-evenly items-center mx-auto mb-14 border-2 border-black ">
            <h1 class="text-2xl font-bold text-center mx-auto w-[90%] h-16 underline underline-offset-2">SignUp</h1>
            <div @click="picUpload.click()"
                class="w-[100px] h-[100px] border-2 border-black rounded-full overflow-hidden cursor-pointer">
                <input @change="handleImageChange" type="file" class="hidden" ref="picUpload" accept="image/*">
                <img v-if="!pic" src="../assets/img/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                    alt="">
                <img v-if="pic" :src="pic" alt="">

            </div>
            <div class="flex flex-col h-[35%] justify-between items-center">
                <div class="flex items-center flex-col justify-between ">
                    <label for="username" class="text-black capitalize font-medium">username</label>
                    <input required v-model="username" id="username" type="text"
                        class="border-b-2 border-black outline-none pl-1 w-[300px] bg-slate-50">
                </div>
                <div class="flex items-center flex-col justify-between ">
                    <label for="email" class="text-black capitalize font-medium">email</label>
                    <input required v-model="email" id="email" type="email"
                        class="border-b-2 border-black outline-none pl-1 w-[300px] bg-slate-50">
                </div>
                <div class="flex items-center flex-col justify-between ">
                    <label for="password" class="text-black capitalize font-medium">password</label>
                    <input required v-model="password" id="password" type="password"
                        class="border-b-2 border-black outline-none pl-1 w-[300px] duration-500 ease-in-out bg-slate-50">
                </div>
                <div class="flex items-center flex-col justify-between ">
                    <label for="confirm password" class="text-black capitalize font-medium">confirm password</label>
                    <input required v-model="confirmPassword" id="confirm password" type="password"
                        class="border-b-2 border-black outline-none pl-1 w-[300px] bg-slate-50">
                </div>
            </div>
            <button @click="Register" class="w-[140px] h-10 btn z-[1]">
                <h3 class="w-full h-full bg-black text-lg text-white p-0.5 border-2 border-black capitalize font-semibold">
                    submit
                </h3>
            </button>
            <div class=" h-10 flex items-center w-[75%] capitalize">
                <h3 class="text-md font-bold text-center mx-auto ">already have an account ?</h3>
                <nuxt-link :to="{ name: 'Login' }">
                    <h5 class="text-md font-extrabold text-center mx-auto ">SignIn</h5>
                </nuxt-link>
            </div>
        </div>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from "../layouts/MainLay.vue";
import axios from 'axios'
import { useUserStore } from '@/stores/user'
const picUpload: Ref<HTMLInputElement> | string = ref(null);
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const email = ref('')
const pic = ref('')


const store = useUserStore()

const handleImageChange = async () => {
    const imageInput = picUpload.value.files[0];
    const fileReader = new FileReader()
    fileReader.readAsDataURL(imageInput)
    fileReader.onload = () => {
        pic.value = fileReader.result
    }
}
const Register = async () => {
    if (password.value != confirmPassword.value) {
        console.error('password iss not  matching')
        return
    }
    try {
        await axios.post('http://localhost:3000/api/ArtVenture/auth/Register', { username: username.value, email: email.value, password: password.value})
            .then(res => {
                store.TokenFromRegister = res.data.token;
                store.username = res.data.user.username;
            })
        localStorage.setItem("TokenFromRegister", store.TokenFromRegister)
        localStorage.setItem("username", store.username)
        useRouter().push({ name: 'Login' })
    } catch (error) {
        console.log(error)
    }
}
</script>

<style scoped></style>