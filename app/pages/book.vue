<template>
    <div>
        <HeroBanner  first_name="Upcoming Book" last_name="Upcoming Book" img="bg-[url(/hero_banner/book.png)]" /> 
            <div class="flex justify-center mt-16">
                <a href="#" class="flex justify-center items-center bg-white rounded-lg shadow-sm    w-[1300px]">
                <NuxtImg  src="/upcoming-book.png" alt="" /> 
                <div class="flex flex-col justify-between p-4 leading-normal ml-5">
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900">STAY TUNED!        </h5>
                    <p class="mb-3 font-normal text-gray-700">Tariq is currently working on writing a book that will chronicle his journey and distill the lessons he’s learned from Dubai’s incredible transformation. This book is intended to pass on those invaluable lessons to the entrepreneurs he continues to inspire, offering them guidance on how to achieve their own success stories.</p>
                </div>
            </a>

            </div>
         
        <Podcasts :podcasts="podcasts" />
        <DiaryEntries />
    </div>
</template>

<script setup>
    const podcasts = [
        {
            id:1,
            image:'/podcasts/18.png',
            youtube:'https://youtu.be/9umqog_DpJQ?si=gtm9lSNSnjCXun73',
            spotify:'https://open.spotify.com/episode/1kxLZDnXpvfTlXYTRY4xvY?si=bitJWcpPS5u_XLlYTc-25g',
        },
        {
            id:2,
            image:'/podcasts/17.png',
            youtube:'https://www.youtube.com/watch?v=MfIPCwJMweM',
            spotify:'https://open.spotify.com/episode/4rErqhQZS3F7B10ATPOACa?si=xuKx66EPTCa1cJcfQL5SVw',
        },
        {
            id:3,
            image:'/podcasts/16.png',
            youtube:'https://youtu.be/HwRmQDDDfkc?si=em1TxGaWKGS1e1Pm',
            spotify:'https://open.spotify.com/episode/1gEg6iJ2iYQCfOT9axsDtQ?si=WxubMILnS-aW-flM84cZrA',
        }, 
    ]
</script>

<style lang="scss" scoped>

</style>