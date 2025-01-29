<template>
    <div class="lg:px-8 mt-10 hover:mt-4 transition-all"> 
<div class="max-w-sm bg-white border border-gray-200  shadow-sm  ">
    <a href="#" class="overflow-hidden">
        <NuxtImg  :src="image" sizes="100vw sm:50vw md:385px"  densities="x1 x2"  alt="" />
    </a>
    <div class="p-5 text-center">
        <a href="#">
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-red ">{{ text }}</h5>
        </a>
        <p class="mb-3 font-normal text-[18px] text-gray-700 ">{{ description }}</p>
        
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