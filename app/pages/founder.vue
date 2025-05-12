<template>
    <div class="bg-black">
        <HeroBanner  first_name="DOAF Foundation" last_name="DOAF Foundation" img="bg-[url(/hero_banner/foundation.png)]" /> 
        <div class="flex items-center justify-center mt-24">
            <div class="flex flex-col items-center justify-center w-full text-center md:w-3/5 ">
                <NuxtImg src="logo/foundation.svg" class="h-20 mb-16"/>
            <div class="text-center">
                <h4 class="text-3xl font-bold text-white md:text-4xl">Tariq has established the Diary of a Founder Foundation                </h4>
                <p class="mt-2 text-white md:mt-0 text-1xl md:text-2xl">with a heartfelt purpose: to support struggling entrepreneurs. Through this foundation, he provides education, training, and access to essential services like legal, corporate, taxation, accounting, and mentorship—ensuring that those who need it most have the resources to turn their dreams into reality.</p>
            </div>
            </div> 
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