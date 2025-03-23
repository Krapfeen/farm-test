<script setup>
import links from '@/constants/links';
</script>

<template>
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

    <nav class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <a v-for="link in links" :href=link.url class="nav-link px-2">{{ link.name }}</a>
    </nav>
  </header>
</template>
