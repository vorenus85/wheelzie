<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 12 13"
    fill="none"
  >
    <path
      d="M6 7.0625C6.31066 7.0625 6.5625 6.81066 6.5625 6.5C6.5625 6.18934 6.31066 5.9375 6 5.9375C5.68934 5.9375 5.4375 6.18934 5.4375 6.5C5.4375 6.81066 5.68934 7.0625 6 7.0625Z"
      fill="currentColor"
    />
    <path
      d="M9 7.0625C9.31066 7.0625 9.5625 6.81066 9.5625 6.5C9.5625 6.18934 9.31066 5.9375 9 5.9375C8.68934 5.9375 8.4375 6.18934 8.4375 6.5C8.4375 6.81066 8.68934 7.0625 9 7.0625Z"
      fill="currentColor"
    />
    <path
      d="M3 7.0625C3.31066 7.0625 3.5625 6.81066 3.5625 6.5C3.5625 6.18934 3.31066 5.9375 3 5.9375C2.68934 5.9375 2.4375 6.18934 2.4375 6.5C2.4375 6.81066 2.68934 7.0625 3 7.0625Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup>
defineProps({ size: { type: Number, default: 24 } })
</script>

<style lang="scss" scoped></style>
