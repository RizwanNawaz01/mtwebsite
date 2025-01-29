<template>
    <div class="mt-10 pt-20 pb-[80px] border border-b-2 ">
        <HeadingBox text="Featured Episodes" description="Diary of a Founder Podcast" />
        <div class="flex flex-wrap justify-center gap-2 md:gap-14 ">
            <PodcastBox v-for="podcast in podcasts" :key="podcast['id']" :image="podcast['image']" :youtube="podcast['youtube']" :spotify="podcast['spotify']" />  
        </div>
        <div>
        </div>
        <div v-if="podcasts.length==3" class="flex justify-center mt-16">
      <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-red rounded-full focus:outline-none">Load More <Icon name="material-symbols:arrow-right-alt-rounded" /></a>

        </div>
            </div>
</template>

<script setup>
    const props = defineProps({
        podcasts:Array
    })

    console.log(props.podcasts.length)

</script>

<style lang="scss" scoped>

</style>