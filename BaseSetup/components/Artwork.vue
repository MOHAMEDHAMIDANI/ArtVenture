<template>
    <div class="w-[250px] h-[400px] border-2 rounded border-black">
        <div class="w-full h-[45%] flex justify-evenly items-center">
            <Icon name="material-symbols:arrow-left-rounded" class="w-[30px]  h-10"/>
            <div class="w-[180px] bg-slate-400 h-[150px] rounded  overflow-hidden">
                <img src="../assets/img/c40365f91a73a13388fe776ef17ddbdd.jpg" alt="" class="w-full h-full object-fit object-center">
            </div>
            <nuxt-icon name="material-symbols:arrow-circle-left-outline-rounded" class="w-[30px] h-10" />
        </div>
        <div class="w-[90%] h-[55%]   mx-auto">
            <div class="flex items items-center max-h-10 justify-between  ">
                <h1 class="h-full font-semibold text-sm text-center capitalize underline w-[135px] overflow-hidden">Picasso stolen  artwork </h1>
                <h3 class="h-fit my-auto font-semibold text-sm ">$ 4200</h3>
            </div>
            <div class="w-full h-[120px]  overflow-hidden">
                <p class="px-1 text-xs font-extralight text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque autem sapiente corporis aspernatur reiciendis. Vel voluptatem ducimus dignissimos sit, saepe itaque facilis id iusto aperiam consectetur sunt magnam quis odio?</p>
            </div>
            <div class=" h-7 my-auto  w-full flex justify-between items-center ">
                <span class="h- text-center w-14 mt-2 font-semibold">3.4<span class="font-bold">/5</span></span>
                <button class="w-[110px] h-6 mt-2 z-[1]">
                <nuxt-link :to="{name : 'Register'}" class="">
                    <h3 class="w-full h-full bg-black text-white p-0.5 text-sm  capitalize font-semibold">view details</h3>
                </nuxt-link>
            </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

