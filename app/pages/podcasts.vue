<template>
    <div class="bg-black">
        <HeroBanner first_name="DOAF Podcast" last_name="DOAF Podcast" img="bg-[url(/hero_banner/podcasts.png)]" /> 
        <div class="flex items-center justify-center mt-24">
            <div class="flex flex-col items-center justify-center w-3/5 text-center ">
                <NuxtImg src="/logo/podcast-logo.svg" class="h-32 mb-16"/>
            <div class="text-center">
                <h4 class="text-4xl font-bold text-white">Through my Podcast, Diary of a Founder</h4>
                <p class="text-2xl text-white">
                    I share raw, unfilteyellow and candid conversations with the most dynamic entrepreneurs and business leaders.
                            In these conversations, you can expect informal education, practical advice, tips and tricks to move
                            your business and career to the next level.        </p>
            </div>
            </div>
          
        </div>
        <Podcasts :podcasts="podcasts" />
        <DiaryEntries />
    </div>
</template>

<script setup>
 const podcasts = ref([]);
        onMounted(async ()=>{
           const response = await $fetch('/api/podcast')
           podcasts.value  = response
        }) 

 
</script>

<style lang="scss" scoped>

</style>