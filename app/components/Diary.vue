<template>
    <div class="flex p-3 mt-4 md:p-0" v-if="design=='component'">
        <div>
            <NuxtImg :src="img" class="h-32 mr-3 md:h-40"/>
        </div>
        <div class="w-[400px] ml-4 md:ml-0">
            <h3 class="text-[18px] md:text-2xl font-bold text-yellow line-clamp-1">{{ heading }}</h3>
            <p class="mb-3 text-[14px] md:text-[18px] line-clamp-3">{{ text }}</p>

            <a :href="'diary/'+link" class="px-4 py-2 mt-3 mr-2 text-sm font-medium text-black rounded-full bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 lg:px-2 lg:py-1 bg-yellow focus:outline-none">Read More <Icon class="" name="material-symbols:arrow-right-alt-rounded" /></a>
        </div>
    </div>

    <div class="pb-4 mt-4 mb-2 " v-else>
        <div class="mt-10 lg:px-8 "> 
                <div class="max-w-sm bg-black shadow-sm ">
                    <a href="#" class="overflow-hidden">
                        <NuxtImg  :src="img"   width="400"    height="400"    :style="{ objectFit: 'cover' }"    densities="x1 x2"  alt="" />
                    </a>
                    <div class="pt-2 pb-0">
                        <a href="#">
                            <h5 class="mb-2 text-[18px] md:text-2xl font-bold tracking-tight text-yellow  line-clamp-1">{{ heading }}</h5>
                        </a>
                        <p class=" text-white text-left mb-3 text-[14px] font-normal md:text-[18px]   line-clamp-3">{{ text }}</p>
                        
                    </div>
                    <div class="">
                        <a :href="'diary/'+link" class="px-4 py-2 mt-3 mr-2 text-sm font-medium text-black rounded-full bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 lg:px-2 lg:py-1 bg-yellow focus:outline-none">Read More <Icon class="" name="material-symbols:arrow-right-alt-rounded" /></a>
                    </div>
                </div> 
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        img:String,
        heading:String,
        text:String,
        link:String,
        design:{
            type:String,
            default:'component'
        }
    })

</script>

<style lang="scss" scoped>

</style>