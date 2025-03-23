<script setup>
import { ref, onMounted } from 'vue'
import Project from '@/components/Project.vue';
import cattles from '@/constants/cattles';

const projects = ref([])

onMounted(async () => {
  cattles.forEach((element) => {
    projects.value.push(...element.type)
  })
});

function createLink (link) {
  return `/${link}`.toLowerCase()
}

</script>
<template>
  <Project v-for="project in projects" :name="project.name" :url=createLink(project.genus) :object="project" />
</template>
