<template>
    <MainLay>
        <carousel v-slot="{ currentSlide }">
            <slider >
                <div v-if="currentSlide === 1" class="w-full h-full relative overflow-hidden">
                    <img  src="../assets/slidingphotos/EX1541_SF837-VW008.jpg" alt=""
                        class="w-full h-full object-cover object-center blu" />
                        <div class="w-full h-full absolute top-0 left-0 bg-black bg-opacity-20 ">
                            <h3 class="m-5 text-3xl font-bold w-[50%] text-white">Discover Artistic Wonders</h3>
                            <p class="m-5 text-xl text-white font-semibold w-[50%]">Step into a world where creativity knows no boundaries. ArtVenture is your gateway to an interactive art gallery that invites you to explore, appreciate, and even own remarkable artworks.</p>
                        </div>
                </div>
            </slider>
            <slider >
                <div v-if="currentSlide === 2" class="w-full h-full relative overflow-hidden">
                    <img  src="../assets/slidingphotos/istockphoto-1323645299-612x612.jpg" alt=""
                        class="w-full h-full object-cover object-center blu" />
                        <div class="w-full h-full absolute top-0 left-0 bg-white bg-opacity-20 ">
                            <h3 class="m-5 text-3xl font-bold w-[50%] text-white">Connect with Creativity</h3>
                            <p class="m-5 text-xl text-white font-semibold w-[50%]">Join a vibrant community of artists and art enthusiasts. Dive into our virtual gallery, where you can browse and acquire stunning artworks, interact with fellow creatives, and participate in engaging art events.</p>
                        </div>
                </div>
            </slider>
            <slider  >
                <div v-if="currentSlide === 3" class="w-full h-full relative overflow-hidden">
                    <img  src="../assets/slidingphotos/photo-1606164510427-0dff1bcb27d2.avif" alt=""
                        class="w-full h-full object-cover object-center blu" />
                        <div class="w-full h-full absolute top-0 left-0 bg-white bg-opacity-20 ">
                            <h3 class="m-5 text-3xl font-bold w-[50%] text-white">Your Artistic Journey Starts Here</h3>
                            <p class="m-5 text-xl text-white font-semibold w-[50%]">At ArtVenture, your passion for art takes center stage. Whether you're an artist looking to showcase your creations or an art lover seeking inspiration, our platform empowers you to embark on an enriching artistic journey.</p>
                        </div>
                </div>
            </slider>
        </carousel>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from "../layouts/MainLay.vue";

</script>

<style scoped></style>
