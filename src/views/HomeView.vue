<template>
  <Project v-for="project in projects" :object="project" />
</template>

<script setup>
import Project from '@/components/Project.vue';
import { useFirestore } from '@/composables/useFirestore';
import { onBeforeMount, ref } from 'vue';

const { items, fetchItems } = useFirestore('projects')

const projects = ref([])

onBeforeMount(async () => {
  await fetchItems()
  items.value.forEach(element => {
    if (element.type && element.genus) {
      let object = { name: element.type, genus: element.genus }
      const isDuplicate = projects.value.some(
        item => item.name === object.name && item.genus === object.genus
      )
      if (!isDuplicate) {
        projects.value.push(object)
      }
    }
  })
})
</script>
