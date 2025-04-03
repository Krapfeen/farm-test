<script setup>
import { ref, onMounted } from 'vue'
import Project from '@/components/Project.vue'
import { useFirestore } from '@/composables/useFirestore'

const projects = ref([])

function getProjectURL(project) {
  return `/projects/${project.id}`;
}
const { items, fetchItems } = useFirestore('projects');

onMounted(async () => {
  await fetchItems();
  projects.value = items.value;
});
</script>

<template>
  <a href="/projects/add" class="btn btn-primary d-flex justify-content-center">Добавить проект</a>
  <Project v-for="project in projects" :name="project.name" :url=getProjectURL(project) :object="project" />
</template>
