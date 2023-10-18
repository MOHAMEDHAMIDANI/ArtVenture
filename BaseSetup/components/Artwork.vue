<template>
    <div class="w-[250px] h-[400px] border-2 rounded border-black">
        <div class="w-full h-[45%] flex justify-evenly items-center">
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#000000" d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
            <div class="w-[180px] bg-slate-400 h-[150px] rounded  overflow-hidden">
                <img src="../assets/img/c40365f91a73a13388fe776ef17ddbdd.jpg" alt="" class="w-full h-full object-fit object-center">
            </div>
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#000000" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
        </div>
        <div class="w-[90%] h-[55%]   mx-auto">
            <div class="flex items items-center max-h-10 justify-between overflow-hidden ">
                <h1 class="h-full font-semibold text-sm text-center capitalize underline w-[135px] overflow-hidden">Picasso stolen  artwork </h1>
                <h3 class="h-fit my-auto font-semibold text-sm ">$ 4200</h3>
            </div>
            <div class="w-full h-[120px]  overflow-hidden">
                <p class="px-1 text-xs font-extralight text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque autem sapiente corporis aspernatur reiciendis. Vel voluptatem ducimus dignissimos sit, saepe itaque facilis id iusto aperiam consectetur sunt magnam quis odio?</p>
            </div>
            <div class=" h-7 my-auto w-full flex justify-between items-center mt-1.5 ">
                <div class="flex justify-between items-center  h-full w-14">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><g fill="none" stroke="yellow" stroke-linecap="round" stroke-width="1.5"><path d="M5.367 10.242C4.29 8.422 3.752 7.512 4.11 6.788c.36-.724 1.379-.783 3.418-.9l.527-.03c.58-.034.869-.05 1.122-.185c.252-.135.439-.372.813-.848l.34-.432c1.316-1.673 1.974-2.509 2.73-2.38s1.11 1.137 1.817 3.154M5.805 13.51c-.553 2.09-.83 3.134-.295 3.71c.534.576 1.524.303 3.505-.245l.976-.474m7.057-8.99c1.89.786 2.835 1.18 2.942 1.983c.092.686-.477 1.283-1.64 2.29"/><path d="M16.239 19.57c1.485.386 2.228.58 2.629.173c.4-.407.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837c.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438c-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13c-.19-.095-.33-.263-.61-.599l-.255-.305c-.987-1.18-1.48-1.77-2.048-1.68c-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756c-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4c-.08.567.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597c.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545c.517.26 1.154-.155 2.427-.983"/></g></svg>
                    <span class=" text-center font-semibold">3.4</span>
                </div>
                <button class="w-[110px] h-7 z-[1]">
                <nuxt-link :to="{name : 'Register'}" class="mt-auto bg-red-300">
                    <h3 class="w-full h-full bg-black text-white pt-1 text-sm  capitalize font-semibold">purchase</h3>
                </nuxt-link>
            </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

