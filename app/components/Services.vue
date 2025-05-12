<template>
    <div class="mt-[90px] pb-[50px]">
        <h4 class="text-4xl font-bold text-center text-white font-Roboto">Explore More</h4>
        <div class="flex flex-col items-center space-x-0 md:flex-row">
            <ServiceBox v-for="service in services" :key="service['id']" :image="service['image']" :text="service['text']" :description="service['description']" />
            
        </div>
            </div>
</template>

<script setup>
    const services = [
        {
            id:1,
            image:'/services/1.png',
            text:'Podcast',
            description:'Tariq shares raw conversations with dynamic entrepreneurs and business leaders.'
        },
        {
            id:2,
            image:'/services/2.png',
            text:'Diary Entries',
            description:'Tariq shares the highs, the lows and all the moments that have shaped him into a leader.'
        },
        {
            id:3,
            image:'/services/3.png',
            text:'Book',
            description:'Tariq’s upcoming book will record his journey and distill the lessons he has learned from Dubai.'
        },
        {
            id:4,
            image:'/services/4.png',
            text:'Foundation',
            description:'Tariq has established the Diary of a Founder Foundation to support struggling entrepreneurs.'
        },
    ]
</script>

<style lang="scss" scoped>

</style>