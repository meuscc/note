<template>
  <ClientOnly>
    <C :c="props.c" :l="props.l">{{ slots.default()[0].children }}</C>
  </ClientOnly>
</template>
<script setup lang="ts">
const props = defineProps({
  c: {},
  l: {},
});

const slots = useSlots();
</script>
