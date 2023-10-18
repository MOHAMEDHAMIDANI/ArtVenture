<template>
    <MainLay>
        <div class="w-full flex justify-between flex-wrap items-center">
            <div class="w-[50%]  h-full capitalize ">
                <h1 class="text-[50px] font-extrabold w-fit">Welcome to ArtVenture</h1>
                <p class="text-2xl font-semibold w-[400px] pl-2 mb-5">
                    your gateway to a world of artistic wonders. Explore a virtual realm
                    where art knows no bounds
                </p>
                <div class="w-[350px] ml-5 h-10 flex flex-row-reverse justify-between items-center">
                    <button class="w-[140px] h-full btn z-[1]">
                        <nuxt-link :to="{ name: 'Login' }" class="text-center">
                            <h3
                                class="w-full h-full m-auto bg-white text-lg text-black border-2 p-0.5 border-black capitalize font-semibold">
                                get started
                            </h3>
                        </nuxt-link>
                    </button>
                    <button class="w-[140px] h-full btn z-[1]">
                        <nuxt-link :to="{ name: '' }" class="">
                            <h3
                                class="w-full h-full bg-black text-lg text-white p-0.5 border-2 border-black capitalize font-semibold">
                                contact us
                            </h3>
                        </nuxt-link>
                    </button>
                </div>
            </div>
            <div class="xl:w-[50%] xl:h-[400px] overflow-hidden mx-auto sm:w-[300px] md:h-[400px] sm:h-[200px] h-full capitalize">
                <img src="../assets/img/EX1541_SF837-VW008.jpg" alt="" class="xl:block md:hidden hidden object-cover">
                <img src="../assets/img/c40365f91a73a13388fe776ef17ddbdd.jpg" alt="" class="xl:hidden md:block h-full w-full object-cover object-center">
            </div>
        </div>
        <div  class="w-full my-10">
            <div class="w-full ">
                <h1 class="text-[45px] mx-auto text-center capitalize font-bold w-fit">what  we provide</h1>
            </div>
            <div class="flex justify-evenly flex-wrap gap-2 items-center mt-5">
                <div class="w-[350px] h-[500px] border-2 flex flex-col bg-white border-black">
                    <Icon name="arcticons:gallery" size="30" color="green"/>
                    <h1 class="text-2xl font-bold text-center h-16 mx-auto w-[70%]">Virtual Art Gallery</h1> 
                    <p class="text-sm font-medium p-5 h-[350px] ">
                        Create a visually engaging virtual art gallery where users can explore and appreciate various artworks. This section should allow users to view high-quality images of art pieces, filter and search for specific artists or styles, and provide detailed information about each artwork. You can also include features like zooming in on artwork details and a virtual tour for an immersive experience.
                    </p>
                    <nuxt-link :to="{name : 'index'}" class="w-fit">
                        <h3 class="text-2xl  font-bold text-left px-5 underline-offset-2 underline capitalize">learn more</h3>
                    </nuxt-link>
                </div>
                <div class="w-[350px] h-[500px] border-2 flex flex-col shadow-gray-400 shadow-lg bg-black border-black">
                    <Icon />
                    <h1 class="text-2xl font-bold text-center mx-auto w-[90%] h-16 text-white ">Artistic Exploration Blog</h1>
                    <p class="text-sm font-medium p-5 text-white h-[350px] ">
                        Dedicate a section of your website to an artistic exploration blog. Here, you can regularly publish articles, artist interviews, art history pieces, and discussions about different art movements. This section will serve as an educational resource and a place for art enthusiasts to learn, discuss, and engage with art-related content.
                    </p>
                    <nuxt-link :to="{name : 'index'}" class="w-fit">
                        <h3 class="text-2xl  font-bold text-left px-5 underline-offset-2 underline capitalize text-white ">learn more</h3>
                    </nuxt-link>
                </div>
                <div class="w-[350px] h-[500px] border-2 bg-white flex flex-col border-black">
                    <Icon name="iconoir:community"/>
                    <h1 class="text-2xl font-bold text-center mx-auto w-[90%] h-16">Community and Membership</h1>
                    <p class="text-sm font-medium p-5 h-[350px] ">
                        Encourage community engagement by allowing users to create accounts and become members of ArtVenture. Members can have profiles, follow their favorite artists, and participate in discussions or forums. You can also offer exclusive features to members, such as early access to art events, discounts on artwork purchases, or a virtual community where members can share their own art creations.
                    </p>
                    <nuxt-link :to="{name : 'index'}" class="w-fit">
                        <h3 class="text-2xl  font-bold text-left px-5 underline-offset-2 underline capitalize">learn more</h3>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from "../layouts/MainLay.vue";
</script>

<style scoped lang="scss">
.btn {
    position: relative;

    &::after {
        content: "";
        animation-delay: 2s;
        position: absolute;
        z-index: -1;
        left: 25px;
        top: 30px;
        border: 2px solid black;
        width: 120px;
        height: 25px;
        transition: all 0.3s ease-in-out;
    }

    &:hover::after {
        top: -5px;
        left: -5px;
        width: 150px;
        height: 60px;
    }
}
</style>