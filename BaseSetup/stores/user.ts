import { defineStore } from 'pinia'
export const useUserStore = defineStore('User', {
    state: () => ({
        TokenFromRegister:ref('') as Ref<string>,
        TokenFromLogin:ref('') as Ref<string>,
        username : ref('') as Ref<string>,
    }),
    getters : {

    },
    actions: {

    },
})