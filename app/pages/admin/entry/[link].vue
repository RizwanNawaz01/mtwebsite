<template>
    <div class="p-4 sm:ml-64">
          <div class="flex justify-between mt-14">
        <h3 class="text-lg font-bold">Diary Entries</h3>
    <NuxtLink to="/admin/entry" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Go Back</NuxtLink>

       </div>
   <div class="p-4 mt-5 border-2 border-gray-200 border-dashed rounded-lg">
       
<form enctype="multipart/form-data"  @submit.prevent="handleSubmit">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="heading" class="block mb-2 text-sm font-medium text-gray-900 ">Heading</label>
            <input type="text" v-model="heading" name="heading" id="heading" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write eye catching start...." required />
        </div>
        <div>
            <label for="link" class="block mb-2 text-sm font-medium text-gray-900 ">Link</label>
            <input type="text" v-model="link" name="link" id="link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="write the link to the entry" required />
        </div>
        <div>
            <label for="incept" class="block mb-2 text-sm font-medium text-gray-900 ">Incept</label>
            <input type="text" v-model="incept" name="incept" id="incept" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="write the incept to the entry" required />
        </div>
        
    </div>
    <div class="mb-6">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Text</label>
         <textarea v-model="message" name="message" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
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

    const entry = ref(null)
    const route = useRoute()
    const heading = ref('')
    const image = ref('')
    const message = ref('')
    const incept = ref('')
    const link = ref('')
    const isDeleted = ref(false)
    const fileInput  = ref(null)   
    const { $swal } = useNuxtApp()

   const setDeleteState = ()=>{
        isDeleted.value=!isDeleted.value
    }

    onMounted(async ()=>{ 
    const entry_response = await $fetch(`/api/entry/${route.params.link}`)
    entry.value = entry_response;
        if (entry.value) {
            heading.value = entry.value.heading || ''
            message.value = entry.value.text || ''
            incept.value = entry.value.incept || ''
            link.value = entry.value.link || ''
            image.value = entry.value.img || ''
        }
    }) 
    
    const handleSubmit = async (e) => {
   
  
        const formData = new FormData()
        formData.append('heading', heading.value)
        formData.append('text', message.value)
        formData.append('incept', incept.value)
        formData.append('link', link.value)
        if (isDeleted && fileInput.value?.files?.[0]) {
             formData.append('image', fileInput.value.files[0])
             formData.append('previous_image', '')
        } else {
            formData.append('previous_image', image.value)
        }

        try {
            const res = await $fetch(`/api/entry/${route.params.link}`, {
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
