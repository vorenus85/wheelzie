<template>
  <footer class="project-credits card p-3">
    <span> © 2024 - Perge János </span>

    <div class="links ml-5">
      <a
        :href="githubRepoUrl"
        target="_blank"
        rel="noopener"
        aria-label="View source code on GitHub"
      >
        <IconGithub />
      </a>

      <a :href="linkedinUrl" target="_blank" rel="noopener" aria-label="View Linkedin profile">
        <IconLinkedin />
      </a>
    </div>
  </footer>
</template>

<script setup>
import IconGithub from '../icons/special/iconGithub.vue'
import IconLinkedin from '../icons/special/iconLinkedin.vue'

const linkedinUrl = 'https://hu.linkedin.com/in/janos-perge-508514142'
const githubRepoUrl = 'https://github.com/vorenus85/wheelzie'
</script>

<style scoped>
.project-credits {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  background: #fff;
  background: var(--white);
  border-radius: 10px;
  padding: 1rem;
}

.links {
  display: flex;
  gap: 0.5rem;
}

.links a {
  color: inherit;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #111827;
}
</style>
