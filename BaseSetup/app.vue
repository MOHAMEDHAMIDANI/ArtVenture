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
  console.log(TokenFromLogin)
  const TokenFromRegister = localStorage.getItem('TokenFromRegister');
  console.log(TokenFromRegister)
  const username = localStorage.getItem('username');
  console.log(username);
  if(TokenFromLogin || username || TokenFromRegister){
    store.TokenFromRegister = TokenFromRegister ;
    store.TokenFromLogin = TokenFromLogin ;
    store.username = username ;
  }
})
</script>