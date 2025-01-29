<template>
    <div  ref="scrollContainer" class="h-[450px]  mt-16 lg:mt-2 mb-3  bg-white  rounded-lg  flex flex-col gap-2 [&::-webkit-scrollbar]:w-2  overflow-y-scroll">
       
        <Message v-for="(response,index) in responses" :key="index" :agent_message="response.message" :agent="response.agent"/> 
    </div>
</template>

<script setup>
import { onMounted, onUpdated, ref,watch } from 'vue';

    const props = defineProps({
        responses:Array
    })

    
    
const scrollContainer = ref(null);

const scrollToBottom = () => {
  const container = scrollContainer.value;
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};

watch(
  () => props.responses,
 () => {
    scrollToBottom();
  },
  { immediate: true } 
);

onMounted(() => {
  scrollToBottom();
});

onUpdated(() => {
  scrollToBottom();
});
</script>

<style scoped>
.scrollable-container {
  scroll-behavior: smooth;
}

</style>