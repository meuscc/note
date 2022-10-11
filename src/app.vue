<template>
  <main>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </main>
</template>

<script setup lang="ts">
import Header from "~/section/header/Header.vue";
import Footer from "~/section/footer/Footer.vue";
</script>
<style scoped></style>
