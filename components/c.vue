<template>
  <code :class="props.i ? 'code-inline' : 'code-block'" v-html="html" />
</template>
<script setup lang="ts">
declare const Prism: any;
declare const shiki: any;

const props = defineProps({
  c: {},
  l: {},
  i: {},
});

const slots = useSlots();

// const html = await shiki
//   .getHighlighter({
//     theme: "dracula",
//   })
//   .then((highlighter) => {
//     // @ts-ignore
//     return highlighter.codeToHtml(slots.default()[0].children.trim(), {
//       lang: props.l ?? "js",
//     });
//   });

const html = Prism.highlight(
  // @ts-ignore
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
