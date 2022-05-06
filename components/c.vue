<template>
  <code :class="props.i ? 'code-inline' : 'code-block'" v-html="html" />
</template>
<script setup lang="ts">
declare const Prism: any;

const props = defineProps({
  c: {},
  l: {},
  i: {},
});

const slots = useSlots();

const html = Prism.highlight(
  slots.default()[0].children.trim(),
  Prism.languages[(props.l as string) ?? "javascript"],
  "javascript"
);
</script>
<style lang="scss">
.code-block {
  display: block;
}
.code-inline {
  display: inline-block;
}
</style>
