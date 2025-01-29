<template>
    <div class="flex items-center justify-center w-full space-x-2">
        <input  v-model="inputText" @keyup.enter="sendMessage" type="text"   placeholder="Enter Prompt" class="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2">
        <button   @click="sendMessage" class="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">Send</button>
    </div>
</template>

<script setup>
const inputText = ref('');

const emit = defineEmits()
const sendMessage = ()=>{
    if(inputText.value.trim()){
        emit('sendMessage',inputText.value);
        inputText.value = '';
    }
} 

</script>

<style lang="scss" scoped>

</style>