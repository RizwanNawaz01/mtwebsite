<template>
        <div class="p-4 sm:ml-64">
        <div class="flex justify-between mt-14">
        <h3 class="text-lg font-bold">Podcasts</h3>
    <NuxtLink to="/admin/podcast/create" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Create Podcast</NuxtLink>

       </div>
   <div class="p-4 mt-5 border-2 border-gray-200 border-dashed rounded-lg">
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 rtl:text-right ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                 <th scope="col" class="px-6 py-3">
                     #
                </th>
                <th scope="col" class="px-6 py-3">
                  Image
                </th>
                <th scope="col" class="px-6 py-3">
                     Youtube
                </th>
                <th scope="col" class="px-6 py-3">
                    Spotify
                </th> 
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 odd:bg-white odd:" v-for="(podcast, index)  in podcasts" :key="podcast['id']" >
                  <td class="px-6 py-4">
                  {{index+1}}
                </td> 
                <td class="px-6 py-4">
                   <NuxtImg width="200" :src="podcast['image']"/>
                </td>
                <td class="px-6 py-4">
                   {{podcast['youtube'].slice(0,100)}}...
                </td>
                <td class="px-6 py-4">
                   {{podcast['spotify']}}
                </td>
                <td class="px-6 py-4">
                    <NuxtLink :to="`podcast/${podcast['id']}`" class="mr-2 font-medium text-blue-600"><Icon name="simple-line-icons:pencil"/></NuxtLink> 
                    <a  @click="deleteItem(podcast['id'])" class="font-medium text-blue-600"><Icon class="text-[red]" name="simple-line-icons:trash"/></a>
                </td>
            </tr>
             
        </tbody>
    </table>
</div>

   </div>
      </div>
    </template>

    <script setup>
import { ref } from 'vue'
const { $swal } = useNuxtApp()
     definePageMeta({
        middleware: 'auth',
        layout:'admin'
     })
   const podcasts = ref([]);
        onMounted(async ()=>{
             
                const response = await $fetch('/api/podcast');
                podcasts.value = response 
         
        })  
        
        const deleteItem= async (link)=>{

             const result = await $swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    });
     if (result.isConfirmed) {
            try { 
               
                const { data, error } = await useFetch(`/api/podcast/${link}`, {
                method: 'DELETE',
                });

            
                if (error.value) {
                throw new Error('Failed to delete item');
                }
                $swal.fire({
                        title: 'Item deleted successfully',
                        icon: 'success',
                        timer: 2000,
                });  
            } catch (err) {
                console.error('Error:', err); 
                 $swal.fire({
                        title: 'Error deleting item',
                        icon: 'error',
                        timer: 2000,
                }); 
            }
        }
        }
     </script>