<template>
  <div class="text-xs text-red-600 my-2" v-if="message">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({ message: String })
</script>

<style lang="scss" scoped></style>
