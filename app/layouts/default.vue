<template>
    <div>
        <Header :color="headerColor"/>
        <slot />
        <Footer />
    </div>
</template>

<script setup>
 
    const route = useRoute();
const headerColor = computed(() => { 
  if (route.name?.startsWith('diary')) return 'black'
  
  return 'white'
})
</script>

<style lang="scss" scoped>

</style>