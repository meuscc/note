<template>
  <div id="root"></div>
  <div class="">
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
import { createStyles } from "./styles/index";
import { createNav } from "./index";
import { onMounted } from "vue";
import createYtbBg from "~/ytb_bg";

onMounted(() => {
  if (typeof window !== "undefined") {
    createNav();
    createYtbBg();
    createStyles();
  }
});
</script>
