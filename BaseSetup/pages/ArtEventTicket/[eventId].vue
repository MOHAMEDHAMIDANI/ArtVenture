<template>
    <MainLay>
        <div class="container mx-auto my-4 w-full flex justify-between flex-wrap ">
            <!-- main one  -->
            <div class=" xl:w-[1000px] lg:w-[820px] md:w-[550px] mx-auto h-full ">
                <!-- review item and shipping -->
                <div class=" h-[230px] my-5  border-2 border-black">
                    <h3 class="capitalize px-5 mt-2  font-semibold text-black">review item and shipping</h3>
                    <div class="mt-2 px-5   flex justify-between flex-wrap gap-5 content-center">
                        <div class="w-[200px] h-[150px] my-auto">
                            <img src="../../assets/img/c40365f91a73a13388fe776ef17ddbdd.jpg" alt=""
                                class="object-fit rounded-md object-center h-full w-full border-[3px] border-secondColor">
                        </div>
                        <div class="w-[60%]   flex flex-col justify-evenly  items-center">
                            <h1 class="text-black font-semibold capitalize w-full text-start"> title : </h1>
                            <h1 class="text-black font-semibold capitalize w-full text-start">price : </h1>
                            <div class="w-full flex justify-around items-center">
                            <h1 class="text-black font-semibold capitalize w-full text-start"> amount of tickets : </h1>
                            <input type="number" class="w-24 bg-gray-200 text-white text-center border-black border-2 outline-none" min="1" max="5">
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" my-1.5 h-7  w-full">
                    <input id="returning customer" type="checkbox" class="top-1 relative accent-secondColor checkbox-xl my-auto">
                    <label for="returning customer" class="capitalize text-lg text-black font-semibold top-0 relative ml-3">returning customer ?</label>
                </div>
                <!-- delivery information  -->
                <div class="border-black border-2 mt-5  ">
                    <div class="flex justify-between content-center">
                        <h3 class="capitalize px-5 mt-2 text-lg font-semibold text-black">delivery information</h3>
                    </div>
                    <div class="flex">
                        <div class="flex flex-col ml-5 my-3">
                                <label for="first name" class="capitalize text-md text-black font-semibold ">first name</label>
                                <input id="first name" type="text" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                            <div class="flex flex-col ml-5 my-3">
                                <label for="second name" class="capitalize text-md text-black font-semibold ">second name</label>
                                <input id="second name" type="text" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                        </div>
                        <div class="flex flex-col ml-5 my-3">
                        <label for="address" class="capitalize text-md text-black font-semibold ">address</label>
                        <input id="address" type="code" required class="xl:w-[925px] lg:w-[725px] md:w-[500px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                    </div>
                    <div class="flex">
                        <div class="flex flex-col ml-5 my-3">
                                <label for="city / town" class="capitalize text-md text-black font-semibold ">city / town</label>
                                <input id="city / town" type="city" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                            <div class="flex flex-col ml-5 my-3">
                                <label for="zip code" class="capitalize text-md text-black font-semibold ">zip code</label>
                                <input id="zip code" type="email" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                        </div>
                        <div class="flex">
                        <div class="flex flex-col ml-5 my-3">
                                <label for="email" class="capitalize text-md text-black font-semibold ">email</label>
                                <input id="email" type="email" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                            <div class="flex flex-col ml-5 my-3">
                                <label for="mobile" class="capitalize text-md text-black font-semibold ">mobile</label>
                                <input id="mobile" type="tel" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                        </div>
                </div>
            </div>
            <!-- order summery  -->
            <div class=" mt-5 xl:w-[500px] lg:w-[820px] md:w-[550px] rounded-md border-2 mx-auto border-black">
                <h3 class="capitalize px-5 mt-2 text-xl font-semibold text-black">order summery</h3>
                <div class="mt-5 w-[400px] mx-auto relative flex justify-center content-center">
                    <input type="text" placeholder="enter coupon code"
                        class="w-[400px] p-1 pl-2 mx-auto relative rounded-full bg-gray-100 outline-secondColor">
                </div>
                <div class="mt-5">
                    <h3 class="capitalize px-5 mt-2 text-md font-semibold text-black">payment details</h3>
                    <form action="" class="accent-secondColor">
                        <div class="w-full ml-5 mt-5">
                            <input id="cash" type="radio" name="payment">
                            <label for="cash" class="capitalize text-md text-black font-semibold ml-2">cash on
                                delivery</label>
                        </div>
                        <div class="w-full ml-5 mt-5">
                            <input id="shopCart" type="radio" name="payment" >
                            <label for="shopCart" class="capitalize text-md text-black font-semibold ml-2">shopcart card</label>
                        </div>
                        <div class="w-full ml-5 mt-5">
                            <input id="paypal" type="radio" name="payment">
                            <label for="paypal" class="capitalize text-md text-black font-semibold ml-2">paypal</label>
                        </div>
                        <div class="w-full ml-5 mt-5">
                            <input id="card" type="radio" name="payment">
                            <label for="card" class="capitalize text-md text-black font-semibold ml-2">credit or debit card</label>
                        </div>
                    </form>
                    <form action="" class="mt-2">
                        <div class="flex flex-col ml-5 mt-2">
                            <label for="email" class="capitalize text-md text-black font-semibold ">email</label>
                            <input id="email" type="email" required class="w-[400px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div>
                        <div class="flex flex-col ml-5 mt-2">
                            <label for="card holder name" class="capitalize text-md text-black font-semibold ">card holder name</label>
                            <input id="card holder name" type="text" required class="w-[400px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div>
                        <div class="flex flex-col ml-5 mt-2">
                            <label for="card number" class="capitalize text-md text-black font-semibold ">card number</label>
                            <input id="card number" type="text" required class="w-[400px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div>
                        <div class="flex mb-2">
                            <div class="flex flex-col ml-5 mt-2">
                            <label for="expiry" class="capitalize text-md text-black font-semibold ">expiry</label>
                            <input id="expiry" type="date" required class="w-[200px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div><div class="flex flex-col ml-5 mt-2">
                            <label for="cvc" class="capitalize text-md text-black font-semibold ">cvc</label>
                            <input id="cvc" type="text" required class="w-[200px] mt-2 border-2 border-black rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from "../layouts/MainLay.vue";

</script>

<style scoped>

</style>