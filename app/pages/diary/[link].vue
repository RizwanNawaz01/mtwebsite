<template>
    <div  class="pt-4 pl-2 bg-black md:p-4">
          <div class="mb-2">
            <p class="text-white">
              <NuxtLink to="/">Home</NuxtLink> /
              <NuxtLink to="/diary">Diary</NuxtLink> /
              <span>{{route.params.link}}</span>
            </p>
          </div>
          <div class="justify-center  mx-auto grid grid-cols-2 gap-5 mb-4  w-full md:w-[1320px]">
            <div>
                <NuxtImg class="object-fit h-[900] w-full" :src="`${entry?.img}`" />
            </div>
            <div>
                <h3 class="mb-2 text-[28px] font-bold text-yellow">{{entry?.heading || 'Loading...'}}</h3>
                <p class="text-[16px] text-white" v-html="entry?.text || 'Loading...'"></p>
            </div>
          </div>
         <DiaryEntries />
         <Podcasts :podcasts="podcasts" />
    </div>
</template>

<script setup>
 
 import { ref, onMounted } from 'vue';
    const podcasts = ref([]);
    const entry = ref(null);
    const route = useRoute()

        onMounted(async ()=>{
           const podcasts_response = await $fetch('/api/podcast')
           podcasts.value  = podcasts_response.slice(0,3);
           
         const entry_response = await $fetch(`/api/entry/${route.params.link}`)
           entry.value = entry_response;
           
        }) 
        
</script>

<style lang="scss" scoped>

</style>