<template>
    <div class="w-[250px] h-[400px] border-2 rounded border-black">
        <div class="w-full h-[45%] flex justify-evenly items-center">
            <div class="w-[220px] bg-slate-400 h-[160px] rounded  overflow-hidden">
                <img src="../assets/art/download (3).jpg" alt="" class="w-full h-full object-fit object-center">
            </div>
        </div>
        <div class="w-[90%] h-[55%]   mx-auto">
            <div class="flex items items-center max-h-10 justify-between overflow-hidden ">
                <h1 class="h-full font-semibold text-sm text-center capitalize underline w-[135px] overflow-hidden">Picasso stolen  artwork </h1>
                <h3 class="h-fit my-auto font-semibold text-sm ">$ 4200</h3>
            </div>
            <div class="w-full h-[120px]  overflow-hidden">
                <p class="px-1 text-xs font-extralight text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque autem sapiente corporis aspernatur reiciendis. Vel voluptatem ducimus dignissimos sit, saepe itaque facilis id iusto aperiam consectetur sunt magnam quis odio?</p>
            </div>
            <div class=" h-7 my-auto w-full flex justify-center items-center mt-1.5 ">
                <button class="w-[110px] h-7 z-[1]">
                <nuxt-link :to="{name : 'ArtworkpurchaseDetail-Id' , params : {Id : 41}}" class="mt-auto bg-red-300">
                    <h3 class="w-full h-full bg-black text-white pt-1 text-sm  capitalize font-semibold">purchase</h3>
                </nuxt-link>
            </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

