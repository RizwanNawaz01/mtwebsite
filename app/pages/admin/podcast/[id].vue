<template>
    <div class="p-4 sm:ml-64">
          <div class="flex justify-between mt-14">
        <h3 class="text-lg font-bold">Podcasts Edit</h3>
    <NuxtLink to="/admin/entry" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Go Back</NuxtLink>

       </div>
   <div class="p-4 mt-5 border-2 border-gray-200 border-dashed rounded-lg">
       
<form enctype="multipart/form-data"  @submit.prevent="handleSubmit">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="youtube" class="block mb-2 text-sm font-medium text-gray-900 ">youtube</label>
            <input type="text" v-model="youtube" name="youtube" id="youtube" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write eye catching start...." required />
        </div>
        <div>
            <label for="spotify" class="block mb-2 text-sm font-medium text-gray-900 ">spotify</label>
            <input type="text" v-model="spotify" name="spotify" id="spotify" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="write the link to the entry" required />
        </div> 
        
    </div>  
    <div class="mb-6">
<div class="flex items-center justify-center w-full" v-if="isDeleted">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input  name="image" ref="fileInput"  id="dropzone-file" accept="image/png, image/gif, image/jpeg"  type="file" class="hidden" />
    </label>
</div> 
<div class="relative w-full" v-else> 
    <button @click="setDeleteState"  type="button" class="absolute inline-flex items-center justify-center p-2 text-white rounded-md bg-yellow right-10 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <input hidden class="hidden" type="hidden" v-model="image" />
    <NuxtImg :src="image" />
</div>

    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Update</button>
</form>
   </div>
</div>

</template> 
<script setup> 
import { ref } from 'vue'
     definePageMeta({
        middleware: 'auth',
        layout:'admin'
     })

    const podcast = ref(null)
    const route = useRoute()
    const youtube = ref('')
    const image = ref('')
    const spotify = ref('')
    const isDeleted = ref(false)
    const fileInput  = ref(null)   
    const { $swal } = useNuxtApp()

   const setDeleteState = ()=>{
        isDeleted.value=!isDeleted.value
    }

    onMounted(async ()=>{ 
    const podcast_response = await $fetch(`/api/podcast/${route.params.id}`)
    podcast.value = podcast_response;
    console.log(podcast_response)
        if (podcast.value) {
            youtube.value = podcast.value.youtube || ''
            spotify.value = podcast.value.spotify || ''
            image.value = podcast.value.image || ''
        }
    }) 
    
    const handleSubmit = async (e) => {
   
  
        const formData = new FormData()
        formData.append('youtube', youtube.value)
        formData.append('spotify', spotify.value) 
        if (isDeleted && fileInput.value?.files?.[0]) {
             formData.append('image', fileInput.value.files[0])
             formData.append('previous_image', '')
        } else {
            formData.append('previous_image', image.value)
        }

        try {
            const res = await $fetch(`/api/podcast/${route.params.id}`, {
            method: 'PUT',
            body: formData,
            })
        
            if(res.status == 200){ 
                 $swal.fire({
                title: 'Update successful!',
                icon: 'success',
                timer: 2000,
            }); 
            
            }else{ 
                   $swal.fire({
                title: 'Something went wrong!',
                icon: 'error',
                timer: 2000,
            }); 
            }
     
        } catch (error) {
             $swal.fire({
                title: `Error uploading data: ${error} `,
                icon: 'error',
                timer: 2000,
            }); 
        }
    }
</script>
 
<style lang="scss" scoped>

</style>
