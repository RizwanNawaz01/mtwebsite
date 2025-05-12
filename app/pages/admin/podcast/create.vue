<template>
    <div class="p-4 sm:ml-64">
          <div class="flex justify-between mt-14">
        <h3 class="text-lg font-bold">Podcasts</h3>
    <NuxtLink to="/admin/podcast" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Go Back</NuxtLink>

       </div>
   <div class="p-4 mt-5 border-2 border-gray-200 border-dashed rounded-lg">
       
<form enctype="multipart/form-data"  @submit.prevent="handleSubmit">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="youtube" class="block mb-2 text-sm font-medium text-gray-900 ">Youtube</label>
            <input type="text" v-model="youtube" name="youtube" id="youtube" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write eye catching start...." required />
        </div>
        <div>
            <label for="spotify" class="block mb-2 text-sm font-medium text-gray-900 ">Spotify</label>
            <input type="text" v-model="spotify" name="spotify" id="spotify" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="write the link to the entry" required />
        </div>  
    </div>   
    <div class="mb-6">
<div class="flex items-center justify-center w-full">
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
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Submit</button>
</form>
   </div>
</div>

</template> 
<script setup>
import { ref   } from 'vue'

const { $swal } = useNuxtApp()

     definePageMeta({
        middleware: 'auth',
        layout:'admin'
     })



    const youtube = ref('')  
    const spotify = ref('')
    const fileInput  = ref(null) 
 

const handleSubmit = async (e) => {
    const formData = new FormData()
    formData.append('youtube', youtube.value)
    formData.append('text', message.value)
    formData.append('incept', incept.value)
    formData.append('spotify', spotify.value)
    formData.append('image', fileInput.value.files[0])
    
    try {
            const res = await $fetch('/api/podcast', {
                method: 'POST',
                body: formData,
            })
            if(res.status == 200){
                 $swal.fire({
                        title: 'Item created successfully',
                        icon: 'success',
                        timer: 2000,
                });  
                youtube.value=''; 
                spotify.value='';
                fileInput.value='';
            }
                } 
        catch (error) {
             $swal.fire({
                        title: 'Error uploading data',
                        icon: 'error',
                        timer: 2000,
                });  
                    console.error("Error uploading data:", error)
        }
} 
</script>
 
<style lang="scss" scoped>

</style>
