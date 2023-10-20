<template>
    <div class="w-full h-[400px] mb-5 relative  border-black border-2">
        <slot :currentSlide="currentSlide" />
    </div>
</template>

<script setup lang="ts">
const currentSlide = ref(1)
const nextslide = () => {
    if (currentSlide.value === 3) {
        currentSlide.value = 1;
        return
    }
    currentSlide.value += 1;
}

const autoplay = () => {
    setInterval(() => {
        nextslide();
    }, 4000);
};
autoplay();

</script>