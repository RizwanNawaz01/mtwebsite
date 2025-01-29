<template>
    <div v-if="design == 'component'" class="pl-2 md:p-0">
        <div class="bg-[url(/diary-enteries.png)] bg-no-repeat bg-cover h-[600px]  lg:pl-8 flex flex-col justify-center items-center">
        <div class="flex flex-col w-full md:w-[1320px] mb-2">
            <p class="font-bold text-red">Read</p>
            <h4 class="text-4xl font-bold">Diary Entries</h4>
        </div>
        <div class="flex flex-col gap-4 w-full md:w-[1320px] ">
            <Diary v-for="diary in diaries" :key="diary['id']" :img="diary['img']" :heading="diary['heading']" :text="diary['text']" :link="diary['link']" />
            <div class="flex flex-col items-start justify-start mt-2 ">
          <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-red rounded-full focus:outline-none">Load More <Icon name="material-symbols:arrow-right-alt-rounded" /></a>
    </div>
    
        </div>

    </div>
    
    </div>

    <div v-else class="lg:pl-8">
        <div class="flex ">
            <Diary design="page" v-for="diary in diaries" :key="diary['id']" :img="diary['img']" :heading="diary['heading']" :text="diary['text']" :link="diary['link']" />
            <div class="flex flex-col items-start justify-start mt-2 ">
    </div>
    
        </div>
    </div>
  
</template>

<script setup>
    const props = defineProps({
        
        design:{
            type:String,
            default:"component"
        }
    })

    const diaries = ref([]);
        onMounted(async ()=>{
            if(props.design == 'page'){
                diaries.value= await $fetch('/api/entry') 
            }else{
                const response = await $fetch('/api/entry')
                diaries.value = response.slice(0,2) 
            }
        }) 
 
</script>

<style  scoped>

</style>