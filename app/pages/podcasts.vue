<template>
    <div>
        <HeroBanner first_name="DOAF Podcast" last_name="DOAF Podcast" img="bg-[url(/hero_banner/podcasts.png)]" /> 
        <div class="flex justify-center items-center  mt-24">
            <div class=" w-3/5  flex flex-col items-center justify-center text-center">
                <NuxtImg src="/logo/podcast-logo.svg" class="h-32 mb-16"/>
            <div class="text-center">
                <h4 class="text-4xl font-bold">Through my Podcast, Diary of a Founder</h4>
                <p class="text-2xl">
                    I share raw, unfiltered and candid conversations with the most dynamic entrepreneurs and business leaders.
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
        
        {
            id:4,
            image:'/podcasts/15.png',
            youtube:'https://youtu.be/HwRmQDDDfkc?si=em1TxGaWKGS1e1Pm',
            spotify:'https://open.spotify.com/episode/1gEg6iJ2iYQCfOT9axsDtQ?si=WxubMILnS-aW-flM84cZrA',
        },
        
        {
            id:5,
            image:'/podcasts/14.png',
            youtube:'https://youtu.be/HwRmQDDDfkc?si=em1TxGaWKGS1e1Pm',
            spotify:'https://open.spotify.com/episode/1gEg6iJ2iYQCfOT9axsDtQ?si=WxubMILnS-aW-flM84cZrA',
        },
        
        {
            id:6,
            image:'/podcasts/13.png',
            youtube:'https://youtu.be/HwRmQDDDfkc?si=em1TxGaWKGS1e1Pm',
            spotify:'https://open.spotify.com/episode/1gEg6iJ2iYQCfOT9axsDtQ?si=WxubMILnS-aW-flM84cZrA',
        },
    ]
</script>

<style lang="scss" scoped>

</style>