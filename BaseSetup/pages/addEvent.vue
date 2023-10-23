<template>
    <MainLay>
        <div class="w-full  flex flex-col">
            <div class="flex justify-center  items-center flex-col ">
                <h3 class="text-2xl font-bold text-center mx-auto w-[90%] h-10 underline underline-offset-2">the final
                    result </h3>
                <div class="w-full h-64 border-2 border-black flex justify-around items-center">
                    <div class="w-[30%] h-[95%]  flex flex-col justify-between">
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
                            <h3 class="text-xl w-full text-center capitalize font-semibold">
                                {{ title.slice(0, 50) }}
                            </h3>
                        </div>
                        <div class="w-full h-10  flex justify-around items-center">
                            <div
                                class="w-[35%] h-full flex justify-evenly items-center text-black bg-gray-200 bg-opacity-50 font-medium rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <path fill="black"
                                        d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z" />
                                    <circle cx="16" cy="13" r="4" fill="none" />
                                </svg>
                                <h3 v-if="location" class="text-md capitalize font-medium text-center">
                                    {{ location.slice(0, 12) }}
                                </h3>
                            </div>
                            <div
                                class="w-[35%] h-full text-black flex justify-evenly items-center bg-gray-200 bg-opacity-50 font-medium rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="black"
                                        d="M10.95 18.35L7.4 14.8l1.45-1.45l2.1 2.1l4.2-4.2l1.45 1.45l-5.65 5.65ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z" />
                                </svg>
                                <h3 v-if="date" class="text-sm text-center py-2 ">
                                    <span>{{ date }}</span>
                                </h3>
                            </div>
                        </div>
                        <div class="w-full h-[150px] mt-4 px-4  overflow-hidden">
                            <p class="px-1 text-md font-extralight text-center capitalize"> {{ info }}</p>
                        </div>
                        <div class="w-full  flex justify-center items-center">
                            <button class="w-[200px] mx-auto h-8">
                                <nuxt-link :to="{ name: '' }" class="w-full h-full">
                                    <h3 class="w-full h-full bg-black text-white py-1 text-sm  capitalize font-semibold">buy
                                        ticket
                                    </h3>
                                </nuxt-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <h3 class="text-2xl font-bold text-center mx-auto w-[70%]  h-fit  underline underline-offset-2">please
                    enter your information down below </h3>
                <div class="w-full mt-5">
                    <div class="flex items-center flex-col justify-between ">
                        <label for="title" class="text-black capitalize font-medium"> title</label>
                        <input required v-model="title" id="title" type="text"
                            class="border-b-2 border-black outline-none pl-1 md:w-[300px] xl:w-full bg-slate-50">
                    </div>
                    <div class="flex items-center flex-col justify-between ">
                        <label for="location" class="text-black capitalize font-medium"> location</label>
                        <input required v-model="location" id="location" type="text"
                            class="border-b-2 border-black outline-none pl-1 md:w-[300px] xl:w-full bg-slate-50">
                    </div>
                    <div class="flex items-center flex-col justify-between ">
                        <label for="info" class="text-black capitalize font-medium">infos about the Event </label>
                        <textarea required v-model="info" id="info" type="text"
                            class="border-b-2 border-black outline-none pl-1 h-[220px] md:w-[300px] xl:w-full  bg-slate-50"></textarea>
                    </div>
                    <div class="flex items-center flex-col justify-between ">
                        <label for="price" class="text-black capitalize font-medium">date of the event </label>
                        <input required v-model="date" id="price" type="date" placeholder=""
                            class="border-b-2 border-black outline-none pl-1 md:w-[300px] xl:w-full bg-slate-50">
                    </div>
                </div>
            </div>
            <button @click="Register" class="w-[140px] h-10 btn mt-2 mx-auto">
                <h3 class="w-full h-full bg-black text-lg text-white p-0.5 border-2 border-black capitalize font-semibold">
                    add
                </h3>
            </button>
        </div>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from "../layouts/MainLay.vue";
const title = ref('')
const info = ref('')
const location = ref('')
const date = ref(null)
const imgInp = ref(null)
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
</script>

<style scoped></style>