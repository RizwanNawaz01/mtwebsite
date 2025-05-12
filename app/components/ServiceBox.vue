<template>
    <div class="mt-10 transition-all lg:px-8 hover:mt-4"> 
<div class="max-w-sm bg-white shadow-sm ">
    <a href="#" class="overflow-hidden">
        <NuxtImg  :src="image" sizes="100vw sm:50vw md:385px"  densities="x1 x2"  alt="" />
    </a>
    <div class="p-5 text-center bg-black">
        <a href="#">
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-yellow ">{{ text }}</h5>
        </a>
        <p class="mb-3 font-normal text-[18px]  text-white">{{ description }}</p>
        
    </div>
</div>

    </div>
</template>

<script setup>
    const props = defineProps({
        image:String,
        text:String,
        description:String
    })
</script>

<style lang="scss" scoped>

</style>