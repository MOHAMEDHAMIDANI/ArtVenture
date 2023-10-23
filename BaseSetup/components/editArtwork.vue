<template>
    <div>
        <div v-if="!edit">
            <div class="w-[250px] h-[400px] border-2 rounded border-black relative">
                <svg @click="toggleEdit" class="absolute cursor-pointer  -top-2 -right-2" xmlns="http://www.w3.org/2000/svg"
                    width="32" height="32" viewBox="0 0 24 24">
                    <path fill="#000000"
                        d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z" />
                </svg>
                <svg @click="deleteart" class="absolute cursor-pointer  -top-2 -left-2" xmlns="http://www.w3.org/2000/svg" width="32"
                    height="32" viewBox="0 0 24 24">
                    <path fill="#000000" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z" />
                </svg>
                <div class="w-full h-[45%] flex justify-evenly items-center">
                    <div class="w-[220px] bg-slate-400 h-[160px] rounded  overflow-hidden">
                        <img :src="props.image" alt="" class="w-full h-full object-fit object-center">
                    </div>
                </div>
                <div class="w-[90%] h-[55%]   mx-auto">
                    <div class="flex items items-center max-h-10 justify-between overflow-hidden ">
                        <h1 class="h-full font-semibold text-sm text-center capitalize underline w-[135px] overflow-hidden">
                            {{ props.title }} </h1>
                        <h3 class="h-fit my-auto font-semibold text-sm ">$ {{ props.price }}</h3>
                    </div>
                    <div class="w-full h-[120px]  overflow-hidden">
                        <p class="px-1 text-xs font-extralight text-center">{{ props.info }}</p>
                    </div>
                    <div class=" h-7 my-auto w-full flex justify-center items-center mt-1.5 ">
                        <button class="w-[110px] h-7 z-[1]">
                            <nuxt-link :to="{ name: 'ArtworkpurchaseDetail-Id', params: { Id: props.id } }"
                                class="mt-auto bg-red-300">
                                <h3 class="w-full h-full bg-black text-white pt-1 text-sm  capitalize font-semibold">
                                    purchase</h3>
                            </nuxt-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="  flex flex-col">
                <div class="w-[400px]  flex justify-start items-center flex-col ">
                    <div class="flex justify-center  items-center flex-col ">
                        <h3 class="text-2xl font-bold text-center mx-auto w-[90%] h-10 underline underline-offset-2">the
                            final
                            result </h3>
                        <div class="w-[250px] h-[400px] border-2 rounded border-black relative">
                            <svg @click="toggleEdit" class="absolute cursor-pointer  -top-3  -right-3"
                                xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="#000000"
                                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z" />
                            </svg>
                            <div class="w-full h-[45%] flex justify-evenly items-center">
                                <div @click="imgInp.click()"
                                    class="w-[220px] cursor-pointer text-center h-[160px] rounded  overflow-hidden">
                                    <img v-if="img" :src="img" alt="" class="w-full h-full object-fit object-center">
                                    <h3 v-if="!img" class="w-full h-full bg-gray-200 my-auto pt-12">click to add photo</h3>
                                </div>
                                <input ref="imgInp" @change="upload" type="file" class="hidden">
                            </div>
                            <div class="w-[90%] h-[55%]   mx-auto">
                                <div class="flex items items-center max-h-10 justify-between  ">
                                    <h1
                                        class="h-full font-semibold text-sm text-center capitalize underline w-[135px] overflow-hidden">
                                        {{ title.slice(0, 30) }}</h1>
                                    <h3 v-if="price" class=" my-auto font-semibold text-sm w-14 ">$ {{ price.slice(0, 5) }}
                                    </h3>
                                </div>
                                <div class="w-full h-[120px]  overflow-hidden">
                                    <p class="px-1 text-xs font-extralight text-center">{{ info }}</p>
                                </div>
                                <div class=" h-7 my-auto w-full flex justify-between items-center mt-1.5 ">
                                    <div class="flex justify-between items-center  h-full w-14">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24">
                                            <g fill="none" stroke="yellow" stroke-linecap="round" stroke-width="1.5">
                                                <path
                                                    d="M5.367 10.242C4.29 8.422 3.752 7.512 4.11 6.788c.36-.724 1.379-.783 3.418-.9l.527-.03c.58-.034.869-.05 1.122-.185c.252-.135.439-.372.813-.848l.34-.432c1.316-1.673 1.974-2.509 2.73-2.38s1.11 1.137 1.817 3.154M5.805 13.51c-.553 2.09-.83 3.134-.295 3.71c.534.576 1.524.303 3.505-.245l.976-.474m7.057-8.99c1.89.786 2.835 1.18 2.942 1.983c.092.686-.477 1.283-1.64 2.29" />
                                                <path
                                                    d="M16.239 19.57c1.485.386 2.228.58 2.629.173c.4-.407.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837c.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438c-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13c-.19-.095-.33-.263-.61-.599l-.255-.305c-.987-1.18-1.48-1.77-2.048-1.68c-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756c-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4c-.08.567.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597c.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545c.517.26 1.154-.155 2.427-.983" />
                                            </g>
                                        </svg>
                                        <span class=" text-center font-semibold">3.4</span>
                                    </div>
                                    <button class="w-[110px] h-7 z-[1]">
                                        <nuxt-link :to="{ name: '' }" class="mt-aut">
                                            <h3
                                                class="w-full h-full bg-black text-white pt-1 text-sm  capitalize font-semibold">
                                                submit</h3>
                                        </nuxt-link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <h3 class="text-2xl font-bold text-center mx-auto w-[70%]  h-fit  underline underline-offset-2">
                            please
                            enter your information down below </h3>
                        <div class="w-full mt-5">
                            <div class="flex items-center flex-col justify-between ">
                                <label for="title" class="text-black capitalize font-medium">the title</label>
                                <input required v-model="title" id="title" type="text"
                                    class="border-b-2 border-black outline-none pl-1 md:w-[300px] xl:w-full bg-slate-50">
                            </div>
                            <div class="flex items-center flex-col justify-between ">
                                <label for="info" class="text-black capitalize font-medium">infos about the artwork </label>
                                <textarea required v-model="info" id="info" type="text"
                                    class="border-b-2 border-black outline-none pl-1 h-[220px] md:w-[300px] xl:w-full  bg-slate-50"></textarea>
                            </div>
                            <div class="flex items-center flex-col justify-between ">
                                <label for="price" class="text-black capitalize font-medium">your price</label>
                                <input required v-model="price" id="price" type="text" placeholder=""
                                    class="border-b-2 border-black outline-none pl-1 md:w-[300px] xl:w-full bg-slate-50">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const edit = ref(false)
const toggleEdit = () => {
    edit.value = !edit.value
}
const price = ref('')
const info = ref('')
const title = ref('')
const imgInp = ref(null)
const img = ref('')

 price 
 info 
 title 
 imgInp 
 img 
const upload = () => {
    const photo = imgInp.value.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(photo)
    fileReader.onloadend = () => {
        img.value = fileReader.result;
    }
}
interface art {
    id: string,
    title: string,
    info: string,
    price: string,
    image : string 
}
const props = defineProps<art>()
import { useUserStore } from '../stores/user'
const store = useUserStore()
const deleteart = async () => {
    await store.DeleteArtWork(props.id)
    await store.GetAllArtWorkByUser()
    edit.value = false
}
const updateart = async () => {
    await store.UpdateArtWork(props.id, {
        title: title.value,
        info: info.value,
        price: price.value,
    })
}
</script>

<style scoped></style>