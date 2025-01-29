<template>
    <div :class="img" class=" bg-no-repeat bg-cover h-[111vh] mt-[-99px] flex justify-start items-center">
        <transition name="fade" mode="out-in">  
            <h1 :key="currentName"  class="px-4 text-5xl font-bold text-white lg:px-8m md:text-8xl">{{ currentName }}</h1>
        </transition>

        <div class="flex flex-col items-center justify-center next-section ">
            <p class="text-2xl text-white md:text-3xl">Scroll</p>
            <Icon name="material-symbols:arrow-circle-down-outline-rounded" class="mt-2 text-3xl text-center text-white" />
        </div>
    </div>
</template>

<script setup>
  const props = defineProps({
    first_name:String,
    last_name:String,
    img:String
  })
 
import { ref, onMounted } from "vue";
const first_name = props.first_name;
const last_name = props.last_name;
const currentName = ref(first_name);
 
onMounted(() => {
  setInterval(() => {
    currentName.value = currentName.value === first_name ? last_name : first_name;
  }, 2000);  
});
</script>

<style  scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.next-section {
    position: absolute;
    z-index: 12;
    width: 100%;
    height: 100px;
    left: 0;
    bottom: 0;
    text-align: center;
    color: #fff;
    font-size: 26px;
    text-decoration: none;
    cursor: pointer;
}
</style>