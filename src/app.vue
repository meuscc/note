<template>
  <main>
    <Header></Header>
    <Footer></Footer>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Header from "~/section/header/Header.vue";
import Footer from "~/section/footer/Footer.vue";
</script>
<style scoped></style>
