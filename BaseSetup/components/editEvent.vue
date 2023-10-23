<template>
    <div> 
        <div class="relative" >
            <svg @click="toggleEdit" class="absolute cursor-pointer  top-1 right-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                viewBox="0 0 24 24">
                <path fill="#000000"
                    d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z" />
            </svg>
            <svg class="absolute cursor-pointer  -top-2 -left-2" @click="deleteart()" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000000" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/></svg>
            <div class="w-full h-64 border-2 border-black flex justify-around items-center flex-w">
                <div v-if="!edit" class="w-[30%] h-[95%]  flex flex-col justify-between">
                    <div class="w-full h-[75%]  border-2 border-black overflow-hidden">
                        <img src="../assets/event/art-basel-miami.jpg" alt="" class="w-full h-full object-fit zoom-image">
                    </div>
                    <div class="w-full h-[23%]  flex xl:justify-evenly md:justify-between items-center">
                        <div  v-for="img in props.images "
                            class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block duration cursor-pointer">
                            <img src="../assets/event/images (3).jpg" alt="" class="w-full h-full object-fit">
                        </div>
                        
                    </div>
                </div>
                <div v-else class="w-[30%] h-[95%]  flex flex-col justify-between ">
                            <div @click="imgInp1.click()"
                                class="w-full h-[75%]  border-2 border-black overflow-hidden flex justify-center items-center">
                                <img v-if="img1" alt="" class="w-full h-full object-fit" :src="img1">
                                <input @change="handleImg1" ref="imgInp1" type="file" class="hidden">
                                <h3 v-if="!img1"
                                    class="w-full h-full bg-gray-200 text-center pt-16 text-xl after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block">
                                    click to add photo</h3>
                            </div>
                            <div class="w-full h-[23%]  flex xl:justify-evenly md:justify-between items-center">
                                <div @click="imgInp2.click()"
                                    class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block  cursor-pointer">
                                    <img v-if="img2" :src="img2" alt="" class="w-full h-full object-fit">
                                    <input @change="handleImg2" ref="imgInp2" type="file" class="hidden">
                                    <h3 v-if="!img2" class="w-full h-full bg-gray-200 my-auto text-center pt-3">click</h3>
                                </div>
                                <div @click="imgInp3.click()"
                                    class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block  cursor-pointer">
                                    <img v-if="img3" :src="img3" alt="" class="w-full h-full object-fit">
                                    <input @change="handleImg3" ref="imgInp3" type="file" class="hidden">
                                    <h3 v-if="!img3" class="w-full h-full bg-gray-200 my-auto text-center pt-3">click</h3>
                                </div>
                                <div @click="imgInp4.click()"
                                    class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block  cursor-pointer">
                                    <img v-if="img4" :src="img4" alt="" class="w-full h-full object-fit ">
                                    <input @change="handleImg4" ref="imgInp4" type="file" class="hidden">
                                    <h3 v-if="!img4" class="w-full h-full bg-gray-200 my-auto text-center pt-3">click</h3>
                                </div>
                            </div>
                        </div>
                <div class="w-[65%] h-[95%] ">
                    <div class="w-full h-8  flex justify-center items-center">
                        <h3 v-if="!edit" class="text-xl w-full text-center capitalize font-semibold">
                            {{title}}
                        </h3>
                        <input v-else required v-model="title" id="title" type="text"
                            class="border-b-2 border-black outline-none pl-1 md:w-[300px] xl:w-full bg-slate-50">
                    </div>
                    <div class="w-full h-10  flex justify-around items-center">
                        <div
                            class="w-[35%] h-full flex overflow-hidden justify-evenly items-center text-black bg-gray-200 bg-opacity-50 font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path fill="black"
                                    d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z" />
                                <circle cx="16" cy="13" r="4" fill="none" />
                            </svg>
                            <h3 v-if="!edit" class="text-md capitalize font-medium text-center">
                                {{ props.location }}
                            </h3>
                            <input v-else required v-model="location" id="location" type="text" placeholder="canada"
                            class="  outline-none pl-1 w-[180px] h-full bg-transparent">
                        </div>
                        <div
                            class="w-[35%] h-full text-black flex justify-evenly items-center bg-gray-200 bg-opacity-50 font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="black"
                                    d="M10.95 18.35L7.4 14.8l1.45-1.45l2.1 2.1l4.2-4.2l1.45 1.45l-5.65 5.65ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z" />
                            </svg>
                            <h3 v-if="!edit" class="text-sm text-center py-2 ">
                                <span>{{ props.date
                                }}</span>
                            </h3>
                            <input v-else required v-model="date" id="date" type="date" placeholder="time zone"
                            class="  outline-none pl-1 w-[180px] h-full bg-transparent">
                        </div>
                    </div>
                    <div class="w-full h-[150px] mt-2 px-4  overflow-hidden">
                        <p v-if="!edit" class="px-1 text-sm font-extralight text-center capitalize">{{ props.info }}</p>
                            <textarea v-else required v-model="info" id="info" type="text"
                            class="border-b-2 border-black outline-none pl-1 h-[220px] w-[700px]  bg-slate-50"></textarea>
                    </div>
                    <div class="w-full  flex justify-center items-center">
                        <button v-if="!edit" class="w-[200px] mx-auto h-8">
                            <nuxt-link :to="{ name: '', }"
                                class="w-full h-full">
                                <h3 class="w-full h-full bg-black text-white py-1.5 text-sm  capitalize font-semibold">buy
                                    ticket
                                </h3>
                            </nuxt-link>
                        </button>
                        <button v-else @click="updateart" class="w-[200px] mx-auto h-8">
                                    <nuxt-link :to="{ name: '' }" class="w-full h-full">
                                        <h3
                                            class="w-full h-full bg-black text-white py-1.5 text-sm  capitalize font-semibold">
                                            submit changes
                                        </h3>
                                    </nuxt-link>
                                </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
const edit = ref(false)
const toggleEdit = () => {
    edit.value = !edit.value
}
const title = ref('')
const info = ref('')
const location = ref('')
const date  = ref('')
const img1 = ref('')
const imgInp1 = ref(null)
const img2 = ref('')
const imgInp2 = ref(null)
const img3 = ref('')
const imgInp3 = ref(null)
const img4 = ref('')
const imgInp4 = ref(null)
const handleImg1 = () => {
    const imageInput = imgInp1.value.files[0];
    const fileReader = new FileReader()
    fileReader.readAsDataURL(imageInput)
    fileReader.onload = () => {
        img1.value = fileReader.result
    }
}
const handleImg2 = () => {
    const imageInput = imgInp2.value.files[0];
    const fileReader = new FileReader()
    fileReader.readAsDataURL(imageInput)
    fileReader.onload = () => {
        img2.value = fileReader.result
    }
}
const handleImg3 = () => {
    const imageInput = imgInp3.value.files[0];
    const fileReader = new FileReader()
    fileReader.readAsDataURL(imageInput)
    fileReader.onload = () => {
        img3.value = fileReader.result
    }
}
const handleImg4 = () => {
    const imageInput = imgInp4.value.files[0];
    const fileReader = new FileReader()
    fileReader.readAsDataURL(imageInput)
    fileReader.onload = () => {
        img4.value = fileReader.result
    }
}
interface event {
    id : string ,
title : string ,
price : string , 
info : string ,
date : string ,
location : string ,
images : string[]
}
const props = defineProps<event>()

import { useUserStore}  from '../stores/user'
const store = useUserStore()
const deleteart = async () => {
    await store.DeleteEventArtWork(props.id)
    await store.GetAllEventArtWorkByUser()
    edit.value = false
}
const updateart = async () => {
    await store.UpdateEventArtWork(props.id , {title : title.value ,
info : info.value ,
Date : date.value ,
location : location.value ,})
useRouter().push({name  : 'profileEvent'})
}
</script>

<style scoped></style>

<style lang="scss" scoped></style>