<script setup>
import { onMounted, ref } from 'vue';
import ButtonInput from './UI/ButtonInput.vue';

const props = defineProps({
  // name: {
  //   type: String,
  //   required: true,
  // },
  // url: {
  //   type: String,
  //   required: false,
  // },
  object: {
    type: Object,
    required: true
  }
});

const link = ref('')


onMounted(() => {
  link.value = '#/' + props.object.genus.toLowerCase()
})
</script>
<template>
  <div class="card mt-2">
    <div class="card-body d-flex justify-content-between">
      <h5 class="card-title">{{ object.name }}</h5>
      <!-- <div class="d-flex justify-content-between">
        <div class="d-flex flex-column">
          <div class="">Затраты</div>
          <div>{{ object.expenses }}</div>
        </div>
        <div class="d-flex flex-column">
          <div class="">Выручка</div>
          <div>{{ object.income }}</div>
        </div>
        <div class="d-flex flex-column">
          <div class="">Прибыль</div>
          <div>{{ object.income - object.expenses }}</div>
        </div>
      </div> -->
      <!-- <a :href="url" class="btn btn-primary">Перейти</a> -->
       <ButtonInput :href="link">Перейти</ButtonInput>
    </div>
  </div>
</template>
