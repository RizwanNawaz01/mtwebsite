<template>
    <div> 
        <p class="text-yellow text-center font-bold">{{ description }}</p>
        <h4 class="font-Roboto text-center text-4xl font-bold">{{ text }}</h4>
    </div>
</template>

<script setup>
    const props = defineProps({
        text:String,
        description:String
    })
</script>

<style lang="scss" scoped>

</style>