<template>
    <div> 

<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
       
      <div class="grid grid-cols-2 gap-4 mb-4">
         <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 ">
            <p class="text-2xl text-gray-400 ">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 ">
            <p class="text-2xl text-gray-400 ">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div> 
      </div> 
   </div>
</div>

    </div>
</template>

<script setup>
     definePageMeta({
        middleware: 'auth',
        layout:'admin'
     })
</script>
 
<style lang="scss" scoped>

</style>