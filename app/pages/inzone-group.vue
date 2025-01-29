<template>
    <div>
        <HeroBanner  first_name="InZone Group" last_name="InZone Group" img="bg-[url(/hero_banner/inzone-group.png)]" /> 
        <div class="flex justify-center items-center  mt-24">
            <div class=" w-3/5  flex flex-col items-center justify-center text-center">
                <NuxtImg src="logo/InZone-logo.svg" class="h-20 mb-16"/>
            <div class="text-center">
                <h4 class="text-4xl font-bold">InZone Group has had the privilege of assisting                </h4>
                <p class="text-2xl">thousands of entrepreneurs in launching, building, and scaling their businesses in the UAE. Leveraging my legal expertise, we ensure that these ventures are built on solid foundations, setting the stage for long-term growth and success.</p>
            </div>
            </div> 
        </div>
        <div class="w-full mt-20" >
            <NuxtImg class="w-full" src="logos-image.png"/>

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