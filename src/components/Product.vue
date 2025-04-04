<script setup>
import ButtonInput from './UI/ButtonInput.vue';
import { onBeforeMount, ref } from 'vue';
import { useFirestore } from '@/composables/useFirestore';

const props = defineProps({
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
})
</script>
<template>
  <div class="card my-2">
    <div class="card-header">{{ object.project.name }}</div>
    <div class="card-body d-flex justify-content-between">
      <p class="card-text">{{ object.date }}</p>
      <p class="card-text">{{ object.income }}</p>
      <p class="card-text">{{ object.type }}</p>
      <ButtonInput type="link" :to="'/projects/' + object.project.id">Перейти</ButtonInput>
    </div>
  </div>
</template>
