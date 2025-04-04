<script setup>
import ButtonInput from './UI/ButtonInput.vue';

const props = defineProps({
  object: {
    type: Object,
    required: true
  }
});
</script>
<template>
  <div class="card mt-2">
    <div class="card-body d-flex justify-content-between">
      <h5 class="card-title">{{ object.name }}</h5>
      <ButtonInput type="link" :to="'/' + object.genus.toLowerCase()">Перейти</ButtonInput>
    </div>
  </div>
</template>
