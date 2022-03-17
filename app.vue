<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
    {{ route }}
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
import { onMounted } from "vue";
import createYtbBg from "~/ytb_bg";

onMounted(() => {
  if (typeof window !== "undefined") {
    createYtbBg();
  }
});
</script>
