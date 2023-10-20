<template>
    <MainLay>
        <div class="w-full  flex flex-col">
            <div class="flex justify-center  items-center flex-col ">
                <h3 class="text-2xl font-bold text-center mx-auto w-[90%] h-10 underline underline-offset-2">the final
                    result </h3>
                <div class="w-full h-64 border-2 border-black flex justify-around items-center">
                    <div class="w-[30%] h-[95%]  flex flex-col justify-between">
                        <div class="w-full h-[75%]  border-2 border-black overflow-hidden">
                            <img src="../assets/event/art-basel-miami.jpg" alt="" class="w-full h-full object-fit">
                            <h3 v-if="!img" class="w-full h-full bg-gray-200 my-auto pt-12">click to add photo</h3>
                        </div>
                        <div class="w-full h-[23%]  flex xl:justify-evenly md:justify-between items-center">
                            <div
                                class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block duration cursor-pointer">
                                <img src="../assets/event/images (3).jpg" alt="" class="w-full h-full object-fit">
                                <h3  class="w-full h-full bg-gray-200 my-auto pt-12">click to add photo</h3>
                            </div>
                            <div
                                class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block duration cursor-pointer">
                                <img src="../assets/event/images (4).jpg" alt="" class="w-full h-full object-fit">
                                <h3 v-if="!img" class="w-full h-full bg-gray-200 my-auto pt-12">click to add photo</h3>
                            </div>
                            <div
                                class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block duration cursor-pointer">
                                <img src="../assets/event/art-basel-miami.jpg" alt="" class="w-full h-full object-fit ">
                                <h3 v-if="!img" class="w-full h-full bg-gray-200 my-auto pt-12">click to add photo</h3>
                            </div>
                        </div>
                    </div>
                    <div class="w-[65%] h-[95%] ">
                        <div class="w-full h-8  flex justify-center items-center">
                            <h3 class="text-xl w-full text-center capitalize font-semibold">
                                {{ title.slice(0 , 50) }}
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
                                    {{ location.slice(0,12) }}
                                </h3>
                            </div>
                            <div
                                class="w-[35%] h-full text-black flex justify-evenly items-center bg-gray-200 bg-opacity-50 font-medium rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="black"
                                        d="M10.95 18.35L7.4 14.8l1.45-1.45l2.1 2.1l4.2-4.2l1.45 1.45l-5.65 5.65ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z" />
                                </svg>
                                <h3 v-if="date" class="text-sm text-center py-2 ">
                                    <span>{{date}}</span>
                                </h3>
                            </div>
                        </div>
                        <div class="w-full h-[150px] mt-4 px-4  overflow-hidden">
                            <p class="px-1 text-md font-extralight text-center capitalize"> {{ info }}</p>
                        </div>
                        <div class="w-full  flex justify-center items-center">
                            <button class="w-[200px] mx-auto h-8">
                                <nuxt-link :to="{ name: ''}"
                                    class="w-full h-full">
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
    const title =  ref('')
    const info =  ref('')
    const location =  ref('')
    const date =  ref(null)

</script>

<style scoped></style>