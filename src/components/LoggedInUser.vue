<template>
  <div class="we-profile-module flex">
    <div class="we-profile-avatar">
      <img
        :src="imageUrl(imageThumb, folder)"
        :alt="username"
        width="36"
        height="36"
        loading="lazy"
      />
    </div>
    <div class="we-profile-data flex">
      <strong class="name">{{ username }}</strong>
      <span class="role">{{ role }}</span>
    </div>
  </div>
</template>

<script setup>
import { useImageUrl } from '@/composables/useImageUrl'
import { ref } from 'vue'

const { imageUrl } = useImageUrl()
const role = ref('Admin')
const username = ref('Abram Schleifer')
const imageThumb = ref('avatar.png')
const folder = ref('users')
</script>

<style lang="scss" scoped>
.we-profile-module {
  height: 36px;
  gap: 14px;
}

.we-profile-avatar {
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.we-profile-data {
  flex-direction: column;
}

.we-profile-data {
  .name {
    font-size: 12px;
    font-weight: 500;
  }

  .role {
    font-size: 10px;
    color: var(--gray-20);
  }
}
</style>
