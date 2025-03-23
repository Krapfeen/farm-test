<script setup>
import ButtonInput from './UI/ButtonInput.vue';
import { onMounted } from 'vue';
import { useFirestore } from '@/composables/useFirestore';

const props = defineProps({
  url: {
    type: String,
    required: false,
  },
  object: {
    type: Object,
    required: true
  }
});

const object = {
  income: 0,
  type: '',
  date: '2022-02-02',
  project: {
    name: 'Еуые'
  }
}

const { item, fetchItemById } = useFirestore('projects')

onMounted(async () => {
  await fetchItemById('')

})
// props.object.project = projects.find(element => element.id == props.object.project)

let url = `/projects/${props.object.project.id}`
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
