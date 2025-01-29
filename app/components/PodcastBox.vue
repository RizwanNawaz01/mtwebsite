<template>
    <div class="w-full mt-5 transition-all sm:w-1/2 md:w-1/3 lg:w-1/4"> 
<div class="w-full bg-white border border-gray-200  shadow-sm  rounded-bl-[20px]  rounded-br-[20px] ">
    <a :href="youtube"  class="w-full md:w-[475px] block">
        <NuxtImg  :src="image" class="w-full p-3 md:p-0" densities="x1 x2"  alt="" />
    </a>
    <div class="flex items-center justify-between p-5 text-center">
        <a :href="youtube" >
            <p class="flex items-center mb-2 text-2xl font-bold tracking-tight text-red ">Watch Episode <Icon name="material-symbols:arrow-right-alt-rounded" /></p>
        </a> 
        <div>
           <a :href="youtube"> <Icon name="logos:youtube-icon" class="mr-2 text-2xl"/></a>
           <a :href="spotify"><Icon name="logos:spotify-icon" class="text-2xl"/> </a>
        </div>
        
    </div>
</div>

    </div>
</template>

<script setup>
  const props = defineProps({
        image:String,
        youtube:String,
        spotify:String
    })
</script>

<style lang="scss" scoped>

</style>