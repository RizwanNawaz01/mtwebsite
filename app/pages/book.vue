<template>
    <div class="bg-black">
        <HeroBanner  first_name="Upcoming Book" last_name="Upcoming Book" img="bg-[url(/hero_banner/book.png)]" /> 
            <div class="flex justify-center mt-16 bg-black" >
                <a href="#" class="flex justify-center items-center  bg-black rounded-lg shadow-sm    w-[1300px]">
                <NuxtImg  src="/upcoming-book.png" alt="" /> 
                <div class="flex flex-col justify-between p-4 ml-5 leading-normal bg-black">
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-white">STAY TUNED!        </h5>
                    <p class="mb-3 font-normal text-white ">Tariq is currently working on writing a book that will chronicle his journey and distill the lessons he’s learned from Dubai’s incyellowible transformation. This book is intended to pass on those invaluable lessons to the entrepreneurs he continues to inspire, offering them guidance on how to achieve their own success stories.</p>
                </div>
            </a>

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