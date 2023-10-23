<template>
    <div class="w-full h-64 border-2 border-black flex justify-around items-center">
        <div class="w-[30%] h-[95%]  flex flex-col justify-between">
            <div class="w-full h-[75%]  border-2 border-black overflow-hidden">
                <img src="../assets/event/art-basel-miami.jpg" alt=""
                    class="w-full h-full object-fit zoom-image">
            </div>
            <div class="w-full h-[23%]  flex xl:justify-evenly md:justify-between items-center">
                <div
                    class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block duration cursor-pointer">
                    <img src="../assets/event/images (3).jpg" alt="" class="w-full h-full object-fit">
                </div>
                <div
                    class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block duration cursor-pointer">
                    <img src="../assets/event/images (4).jpg" alt="" class="w-full h-full object-fit">
                </div>
                <div
                    class="h-full w-14 border-2 border-black after:w-full after:h-full  after:bg-white  after:bg-opacity-50 after:z-10 after:absolute relative after:top-0 after:left-0 after:hidden hover:after:block duration cursor-pointer">
                    <img src="../assets/event/art-basel-miami.jpg" alt="" class="w-full h-full object-fit ">
                </div>
            </div>
        </div>
        <div class="w-[65%] h-[95%] ">
            <div class="w-full h-8  flex justify-center items-center">
                <h3 class="text-xl w-full text-center capitalize font-semibold">
                    {{title}}
                </h3>
            </div>
            <div class="w-full h-10  flex justify-around items-center">
                <div class="w-[35%] h-full flex justify-evenly items-center text-black bg-gray-200 bg-opacity-50 font-medium rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="black" d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"/><circle cx="16" cy="13" r="4" fill="none"/></svg>
                    <h3 class="text-md capitalize font-medium text-center">
                        {{location}}
                    </h3>
                </div>
                <div class="w-[35%] h-full text-black flex justify-evenly items-center bg-gray-200 bg-opacity-50 font-medium rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M10.95 18.35L7.4 14.8l1.45-1.45l2.1 2.1l4.2-4.2l1.45 1.45l-5.65 5.65ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z"/></svg>
                    <h3 class="text-sm text-center py-2 ">
                        <span>{{ date }}</span>
                    </h3>
                </div>
            </div>
            <div class="w-full h-[150px] mt-2 px-4  overflow-hidden">
                <p class="px-1 text-sm font-extralight text-center capitalize">{{ info }}</p>
            </div>
            <div class="w-full  flex justify-center items-center">
                <button class="w-[200px] mx-auto h-8">
                    <nuxt-link :to="{ name: 'ArtEventTicket-eventId',params :{eventId : id}}" class="w-full h-full">
                        <h3 class="w-full h-full bg-black text-white py-1 text-sm  capitalize font-semibold">buy ticket for {{ price }}
                        </h3>
                    </nuxt-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface event {
    id : string ,
title : string ,
price : string , 
info : string ,
date : string ,
location : string ,
}
const props = defineProps<event>()
</script>

<style scoped>
.zoom-image {
    transition: transform 0.3s;
}

.zoom-image:hover {
    transform: scale(1.1);
}</style>