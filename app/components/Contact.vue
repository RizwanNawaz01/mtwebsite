<template>
    <div class="bg-white md:bg-[url(/form-image.png)] bg-no-repeat bg-cover border-t-2 md:border-none md:h-[700px]  flex justify-start items-center">
        <div class="text-white px-4 lg:px-8 w-[500px] pt-10 bg-white md:ml-72">
            <HeadingBox text="Connect with Tariq" description="Collaborations" class="text-black" />
            <form class="px-8 pt-6 pb-8 mb-4 bg-white">
                <div class="mb-4"> 
                    <input class="w-full px-3 py-2 text-gray-700 border-b appearance-none "  type="text" placeholder="Full Name">
                </div>
               
                <div class="mb-4"> 
                    <input class="w-full px-3 py-2 text-gray-700 border-b appearance-none "  type="email" placeholder="Email Address">
                </div>
               
               <div class="mb-4"> 
                   <input class="w-full px-3 py-2 text-gray-700 border-b appearance-none "  type="text" placeholder="Your Mobile">
               </div>
               <div class="mb-4"> 
                   <textarea class="w-full px-3 py-2 text-gray-700 border-b appearance-none "  type="text" placeholder="Your Message"></textarea>
               </div>
               <div class="flex justify-center mt-8">
                    <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-red rounded-full focus:outline-none">Get In Touch<Icon name="material-symbols:arrow-right-alt-rounded" /></a>
                </div>
            </form>  
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>

</style>