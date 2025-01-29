<template>
    <div>
        <HeroBanner  first_name="DOAF Foundation" last_name="DOAF Foundation" img="bg-[url(/hero_banner/foundation.png)]" /> 
        <div class="flex justify-center items-center  mt-24">
            <div class=" w-3/5  flex flex-col items-center justify-center text-center">
                <NuxtImg src="logo/foundation.svg" class="h-20 mb-16"/>
            <div class="text-center">
                <h4 class="text-4xl font-bold">Tariq has established the Diary of a Founder Foundation                </h4>
                <p class="text-2xl">with a heartfelt purpose: to support struggling entrepreneurs. Through this foundation, he provides education, training, and access to essential services like legal, corporate, taxation, accounting, and mentorship—ensuring that those who need it most have the resources to turn their dreams into reality.</p>
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
    ]
</script>

<style lang="scss" scoped>

</style>