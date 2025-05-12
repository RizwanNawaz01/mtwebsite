<template>
    <div class="mt-10 pt-20 pb-[80px]  text-white">
        <HeadingBox text="Feature Episodes" description="Diary of a Founder Podcast" />
        <div class="flex flex-wrap justify-center gap-2 md:gap-14 ">
            <PodcastBox v-for="podcast in podcasts" :key="podcast['id']" :image="podcast['image']" :youtube="podcast['youtube']" :spotify="podcast['spotify']" />  
        </div>
        <div>
        </div>
        <div v-if="podcasts.length==3" class="flex justify-center mt-16">
            <a :href="'podcasts'" class="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-yellow rounded-full focus:outline-none">Load More <Icon name="material-symbols:arrow-right-alt-rounded" /></a>
        </div>
            </div>
</template>

<script setup>
    const props = defineProps({
        podcasts:Array
    })


</script>

<style lang="scss" scoped>

</style>