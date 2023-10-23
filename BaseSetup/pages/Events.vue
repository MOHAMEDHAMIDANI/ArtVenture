<template>
    <MainLay>
        <div class="flex justify-center items-center h-9  my-5">
                <input type="text" placeholder="event name "
                    class="md:w-[500px] h-full bg-gray-50 outline-none sm:w-[250px]  text-black font-semibold border-2 pl-2 border-black">
                <button class="btn border-2  bg-black border-l-0 border-black w-[120px] duration-500 hover:bg-white h-full">
                    <h3
                        class="text-xl text-white text-center  mx-auto  h-full capitalize font-bold duration-500  hover:text-black w-fit">
                        search</h3>
                </button>
            </div>
            <div>
                
            </div>
        <div class="w-full h-full grid grid-cols-1 gap-2">
            <Event v-for="event in store.AllEventArtWork" :key="art._id" :id="art._id" :title="art.title" :info="art.info" :location="art.location" :date="art.date" />
        </div>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from "../layouts/MainLay.vue";
import { useUserStore}  from '../stores/user'
const store = useUserStore()
onBeforeMount(() => {
    store.GetAllEventArtWork()
})
setTimeout(() => {
    console.log(store.AllEventArtWork)
},5000)
</script>

<style scoped>

</style>