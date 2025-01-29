<template>
    <div>
        <header class="bg-white">
    <nav class="flex items-center justify-between px-4 py-3 lg:px-8">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">   <NuxtImg  src="/logo-tariq.png"   class="h-[50px] md:h-[75px]"  alt="Logo"  densities="x1 x2" /></NuxtLink>
      <!-- Desktop Menu -->
      <ul class="hidden space-x-6 font-medium text-white lg:flex">
        <li><a href="#" class="hover:text-primary-700">The Story</a></li>
        <li><NuxtLink to="/podcasts" class="hover:text-primary-700">DOAF Podcast</NuxtLink></li>
        <li><NuxtLink to="/inzone-group" class="hover:text-primary-700">InZone Group</NuxtLink></li> 
        <li><NuxtLink to="/diary-entries" class="hover:text-primary-700">Diary Entries</NuxtLink></li> 
        <li><NuxtLink to="/founder" class="hover:text-primary-700">DOAF Foundation</NuxtLink></li> 
        <li><NuxtLink to="/book" class="hover:text-primary-700">Upcoming Book</NuxtLink></li> 
      </ul>
      <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:ml-2 md:mr-2  bg-red rounded-full focus:outline-none">Get In Touch <Icon name="material-symbols:arrow-right-alt-rounded" /></a>

      <!-- Mobile Menu Button -->
      <button  @click="toggleSidebar"  class="flex items-center p-2 text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span class="sr-only">Open main menu</span>
        <svg  class="w-8 h-8" fill="currentColor"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zM3 10h14a1 1 0 010 2H3a1 1 0 010-2zM3 15h14a1 1 0 010 2H3a1 1 0 010-2z" clip-rule="evenodd"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <div
        v-if="isSidebarOpen"
        class="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 lg:hidden"
      >
        <div class="fixed top-0 right-0 z-50 w-64 h-full p-6 bg-white shadow-lg" >
          <button  @click="toggleSidebar" class="absolute p-2 rounded-full top-4 right-4 hover:bg-gray-100 focus:outline-none"   >
            <svg class="w-6 h-6"  fill="currentColor"  viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"  >
              <path   fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </button> 
          <!-- Sidebar Menu -->
          <ul class="mt-6 space-y-4 font-medium text-gray-700">
            <li><a href="#" class="hover:text-primary-700">The Story</a></li>
        <li><NuxtLink to="/podcasts" class="hover:text-primary-700">DOAF Podcast</NuxtLink></li>
        <li><NuxtLink to="/inzone-group" class="hover:text-primary-700">InZone Group</NuxtLink></li> 
        <li><NuxtLink to="/diary-entries" class="hover:text-primary-700">Diary Entries</NuxtLink></li> 
        <li><NuxtLink to="/founder" class="hover:text-primary-700">DOAF Foundation</NuxtLink></li> 
        <li><NuxtLink to="/book" class="hover:text-primary-700">Upcoming Book</NuxtLink></li> 
          </ul>
        </div>
      </div>
    </transition>
  </header>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<style lang="scss" scoped>

</style>