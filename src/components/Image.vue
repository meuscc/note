<template>
  <span>
    <img
      alt="img shape"
      aria-hidden="true"
      :src="`data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27${props.width}%27%20height=%27${props.height}%27/%3e`"
    />
    <img
      class="preview"
      :src="props.previewSrc"
      :width="props.width"
      :height="props.height"
      :style="`max-width: ${props.width}px`"
      alt=""
    />
    <img
      class="main"
      :src="props.src"
      :width="props.width"
      :height="props.height"
      alt=""
      :style="`max-width: ${props.width}px`"
    />
  </span>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  src: String,
  previewSrc: String,
  width: String,
  height: String,
});
</script>
<style scoped>
span {
  position: relative;
}
img {
  display: block;
  max-width: 100%;
  width: initial;
  height: initial;
  background: none;
}

img.main,
img.preview {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.main {
  opacity: 1;
  animation: 1s ease-out 0s 1 main-anim;
}

@keyframes main-anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
