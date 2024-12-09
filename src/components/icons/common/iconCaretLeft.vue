<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    class="icon-left"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.7071 24.7071C20.0976 24.3166 20.0976 23.6834 19.7071 23.2929L12.4142 16L19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289C19.3166 6.90237 18.6834 6.90237 18.2929 7.29289L10.2929 15.2929C9.90237 15.6834 9.90237 16.3166 10.2929 16.7071L18.2929 24.7071C18.6834 25.0976 19.3166 25.0976 19.7071 24.7071Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup>
defineProps({ size: { type: Number, default: 24 } })
</script>

<style lang="scss" scoped></style>
