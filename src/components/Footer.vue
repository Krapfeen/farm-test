<script setup>
import links from '@/constants/links'
import packageJson from '../../package.json'
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <ul class="nav justify-content-start">
      <!-- <li v-for="link in links" class="nav-item"><a :href=link.url class="nav-link px-2 text-body-secondary">{{ link.name }}</a></li> -->
      <!-- <li v-for="link in links" class="nav-item"> -->
      <RouterLink v-for="link in links" :to="link.url" class="nav-link px-2 text-body-secondary" active-class="active">
        {{ link.name }}
      </RouterLink>
      <!-- </li> -->
    </ul>

    <!-- <p class="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p> -->
    <p class="mb-0 text-body-secondary justify-content-end">v{{ packageJson.version }}</p>
  </footer>
</template>
