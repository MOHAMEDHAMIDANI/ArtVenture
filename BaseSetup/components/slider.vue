<template>
    <div class="w-full h-full absolute">
    <transition name="fade">
        <slot />
    </transition>
    </div>
</template>

<script setup lang="ts">

</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>