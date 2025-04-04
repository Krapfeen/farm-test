<script setup>
import { ref, onMounted } from 'vue'
import Project from '@/components/Project.vue'
import { useFirestore } from '@/composables/useFirestore'
import { RouterLink } from 'vue-router';

const projects = ref([])
const { items, fetchItems } = useFirestore('projects');

onMounted(async () => {
  await fetchItems();
  projects.value = items.value;
});
</script>

<template>
  <RouterLink to="/projects/add" class="btn btn-primary d-flex justify-content-center">Добавить проект</RouterLink>
  <Project v-for="project in projects" :name="project.name" :url="'/projects/' + project.id" :object="project" />
</template>
