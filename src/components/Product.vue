<script setup>
import ButtonInput from './UI/ButtonInput.vue';
import { onBeforeMount, ref } from 'vue';
import { useFirestore } from '@/composables/useFirestore';

const props = defineProps({
  // url: {
  //   type: String,
  //   required: false,
  // },
  object: {
    type: Object,
    required: true
  }
});

const url = ref('')
const { items, fetchItems } = useFirestore('projects')

onBeforeMount(async () => {
  await fetchItems()
  props.object.project = items.value.find(element => element.id == props.object.project)
  url.value = `/projects/${props.object.project.id}`
})

// let url = `/projects/${props.object.value.project.id}`
</script>
<template>
  <div class="card my-2">
    <div class="card-header">{{ object.project.name }}</div>
    <div class="card-body d-flex justify-content-between">
      <p class="card-text">{{ object.date }}</p>
      <p class="card-text">{{ object.income }}</p>
      <p class="card-text">{{ object.type }}</p>
      <ButtonInput :href=url>Перейти</ButtonInput>
    </div>
  </div>
</template>
