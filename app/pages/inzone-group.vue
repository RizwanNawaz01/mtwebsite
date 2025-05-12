<template>
    <div class="bg-black">
        <HeroBanner  first_name="InZone Group" last_name="InZone Group" img="bg-[url(/hero_banner/inzone-group.png)]" /> 
        <div class="flex items-center justify-center mt-24">
            <div class="flex flex-col items-center justify-center w-3/5 text-center ">
                <NuxtImg src="logo/InZone-logo.svg" class="h-20 mb-16"/>
            <div class="text-center text-white">
                <h4 class="text-4xl font-bold">InZone Group has had the privilege of assisting                </h4>
                <p class="text-2xl">thousands of entrepreneurs in launching, building, and scaling their businesses in the UAE. Leveraging my legal expertise, we ensure that these ventures are built on solid foundations, setting the stage for long-term growth and success.</p>
            </div>
            </div> 
        </div>
        <div class="w-full mt-20" >
            <NuxtImg class="w-full" src="logos-image.png"/>

        </div>
        <Podcasts :podcasts="podcasts" />
        <DiaryEntries />
    </div>
</template>
<script setup>
 import { ref, onMounted } from 'vue';
    const podcasts = ref([]);
        onMounted(async ()=>{
           const podcasts_response = await $fetch('/api/podcast')
           podcasts.value  = podcasts_response.slice(0,3); 
           
        }) 
</script>

<style lang="scss" scoped>

</style>