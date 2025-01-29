<template>
    <div>
        <HeroBanner first_name="Muhammad" last_name="Tariq" img="bg-[url(/hero_banner/mobile/homepage.png)] md:bg-[url(/hero_banner/homepage.png)]" /> 
        <About />
        <Services />
        <Podcasts :podcasts="podcasts" />
        <DiaryEntries />
        <Contact />
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