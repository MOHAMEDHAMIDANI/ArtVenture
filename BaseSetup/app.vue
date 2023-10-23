<template>
  <div class="w-full h-full bg-white " >
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from './stores/user'
const store = useUserStore()
onBeforeMount(() => {
  const TokenFromLogin = localStorage.getItem('TokenFromLogin');
  const TokenFromRegister = localStorage.getItem('TokenFromRegister');
  const username = localStorage.getItem('username');
  const photo = localStorage.getItem('photo');


  if(TokenFromLogin || username || TokenFromRegister){
    store.TokenFromRegister = TokenFromRegister ;
    store.TokenFromLogin = TokenFromLogin ;
    store.username = username ;
  }
})
</script>