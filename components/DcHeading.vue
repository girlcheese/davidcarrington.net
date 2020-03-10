<template>
  <div class="font-sans">
    <span class="text-base text-purple-500 font-bold">&laquo;</span>
    <a
      href="#"
      class="text-base md:text-sm text-purple-500 font-bold no-underline hover:underline"
      >Back Link</a
    >
    <h2>
      <slot></slot>
    </h2>
    <hr class="border-b border-gray-400" />
  </div>
</template>

<script>
export default {
  name: 'DcHeading'
}
</script>

<style scoped>
h2 {
  @apply font-sans break-normal text-gray-900 pt-6 pb-2 text-2xl font-bold;
}
</style>
