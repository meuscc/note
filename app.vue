<template>
  <NuxtPage />
</template>
<script setup lang="ts">
const route = useRoute();
import { createStyles } from "~/styles";
import { createNav } from "./index";
import { onMounted } from "vue";
import createYtbBg from "~/ytb_bg";

onMounted(() => {
  console.log(JSON.parse(JSON.stringify(route)));
  if (typeof window !== "undefined") {
    // createNav();
    // createYtbBg();
    createStyles();
  }
});
</script>
