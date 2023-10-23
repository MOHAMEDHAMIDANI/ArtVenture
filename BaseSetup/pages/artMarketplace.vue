<template>
    <MainLay>
        <div class="flex justify-center items-center h-9  my-5">
            <input type="text" placeholder="artwork name "
                class="md:w-[500px] h-full bg-gray-50 outline-none sm:w-[250px]  text-black font-semibold border-2 pl-2 border-black">
            <button class="btn border-2  bg-black border-l-0 border-black w-[120px] duration-500 hover:bg-white h-full">
                <h3
                    class="text-xl text-white text-center  mx-auto  h-full capitalize font-bold duration-500  hover:text-black w-fit">
                    search</h3>
            </button>
        </div>
        <div class="flex justify-center items-center h-9  mt-3">
            <div class="w-[40%] h-full bg-slate-300">
                <select  name="" id="" class="w-full h-full bg-black text-white -200 text-center text-xl font-semibold capitalize">
                    <option value="" class="text-black bg-gray-50">price</option>
                    <option value="" class="text-black bg-gray-50">popularity</option>
                </select>
            </div>
        </div>
        <div class="w-full min-h-[630px] relative mt-5">
            <h3 v-if="false" class="top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute text-[50px] sm:text-3xl capitalize font-semibold"> no result yet ...</h3>
            <div class="w-full h-full flex flex-wrap  gap-5 justify-center ">
            <Artwork v-for="art in store.AllArtWork" :key="art._id" :id="art._id" :title="art.title" :info="art.info" :price="art.price"  />
        </div>
        </div>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from "../layouts/MainLay.vue";
import { useUserStore}  from '../stores/user'
const store = useUserStore()
onBeforeMount(() => {
    store.GetAllArtWork()
})

</script>

<style scoped></style>