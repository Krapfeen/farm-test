<script setup>
import links from '@/constants/links'
import packageJson from '../../package.json'
</script>

<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <ul class="nav col-md-8 justify-content-end">
      <li v-for="link in links" class="nav-item"><a :href=link.url class="nav-link px-2 text-body-secondary">{{ link.name }}</a></li>
    </ul>

    <!-- <p class="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p> -->
    <p class="col-md-4 mb-0 text-body-secondary">{{ packageJson.version }}</p>
  </footer>
</template>
