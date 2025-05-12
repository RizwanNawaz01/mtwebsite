<template>
    <div class="bg-black">
        <HeroBanner first_name="Muhammad" last_name="Tariq" img="bg-[url(/hero_banner/mobile/homepage.png)] md:bg-[url(/hero_banner/homepage.png)]" /> 
        <About />
        <Services />
        <Podcasts :podcasts="podcasts" />
        <DiaryEntries />
        <Contact />
    </div>
</template>


<script setup>
    import { ref, onMounted } from 'vue';
    const podcasts = ref([]);
        onMounted(async ()=>{
           const response = await $fetch('/api/podcast')
           podcasts.value  = response.slice(0,3) 
        }) 
</script>

<style lang="scss" scoped>

</style>