<template>
    <div class="w-full bottom-0 relative h-[500px] border-black  border-t-2">
        <div>
            <h3 class="text-[45px] mx-auto text-center md:text-2xl sm:text-lg capitalize font-bold w-fit">support us for more </h3>
            <div class="flex justify-center items-center h-9  my-5">
                <input type="text" placeholder="enter your email"
                    class="md:w-[500px] h-full bg-gray-50 outline-none sm:w-[250px]  text-black font-semibold border-2 pl-2 border-black">
                <button class="btn border-2  bg-black border-l-0 border-black w-[120px] duration-500 hover:bg-white h-full">
                    <h3
                        class="text-xl text-white text-center  mx-auto  h-full capitalize font-bold duration-500  hover:text-black w-fit">
                        support</h3>
                </button>
            </div>
        </div>
        <div class="w-full  h-full flex  flex-wrap justify-around items-center">
            <div class="w-[300px] h-[350px] flex flex-col justify-center items-center">
                <h3 class="text-2xl font-bold text-center mx-auto w-[90%] h-16 text-black capitalize">about us</h3>
                <nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link>
            </div>
            <div class="w-[300px] h-[350px] flex flex-col justify-center items-center">
                <h3 class="text-2xl font-bold text-center mx-auto w-[90%] h-16 text-black capitalize">about us</h3>
                <nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link>
            </div>
            <div class="w-[300px] h-[350px] flex flex-col justify-center items-center">
                <h3 class="text-2xl font-bold text-center mx-auto w-[90%] h-16 text-black capitalize">about us</h3>
                <nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link><nuxt-link :to="{ name: 'index' }" class="w-fit">
                    <h3 class="text-2xl  font-bold text-left px-5 ">learn more</h3>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.btn {
    position: relative;

    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0px;
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
}</style>