<template>
    <div>
        <div class="container w-full min-h-screen mx-auto">
            <Nav  />
            <div class=" my-5">
                <slot />
            </div>
        </div>  
        <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>