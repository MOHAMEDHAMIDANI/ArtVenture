<template>
    <div class="w-[250px] h-[400px] border-2 rounded border-black">
        <div class="w-full h-[45%] flex justify-evenly items-center">
            <div class="w-[220px] bg-slate-400 h-[160px] rounded  overflow-hidden">
                <img :src="image" alt="" class="w-full h-full object-fit object-center">
            </div>
        </div>
        <div class="w-[90%] h-[55%]   mx-auto">
            <div class="flex items items-center max-h-10 justify-between overflow-hidden ">
                <h1 class="h-full font-semibold text-sm text-center capitalize underline w-[135px] overflow-hidden">{{ title }} </h1>
                <h3 class="h-fit my-auto font-semibold text-sm ">$ {{price}}</h3>
            </div>
            <div class="w-full h-[120px]  overflow-hidden">
                <p class="px-1 text-xs font-extralight text-center">{{ info }}</p>
            </div>
            <div class=" h-7 my-auto w-full flex justify-center items-center mt-1.5 ">
                <button class="w-[110px] h-7 z-[1]">
                <nuxt-link :to="{name : 'ArtworkpurchaseDetail-Id' , params : {Id : id}}" class="mt-auto bg-red-300">
                    <h3 class="w-full h-full bg-black text-white pt-1 text-sm  capitalize font-semibold">purchase</h3>
                </nuxt-link>
            </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface art {
    id : string ,
    title : string  ,
    info : string ,
    price : string , 
    image : string , 

}
const props = defineProps<art>()
</script>

