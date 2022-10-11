<template>
  <div>
    <Header></Header>

    <Image :src="bn" width="1700" height="629" :preview-src="thumb" />
  </div>
</template>

<script setup lang="ts">
import Header from "@/sections/header/Header.vue";
import bn from "./banner_center.minimized.jpeg";
import thumb from "./banner_center.thumb.jpeg";
</script>
<style scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
img {
  width: 800px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
