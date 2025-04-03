<script setup>
import { useId } from 'vue';

const model = defineModel()
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  array: {
    type: Array,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
})

const id = useId()
</script>

<template>
  <label class="col-sm-2 col-form-label" :for="id">{{ label }}</label>
  <select class="form-select" :required="required" :title=label v-model="model" :id="id">
    <option selected disabled>Выберите {{ label.toLowerCase() }}</option>
    <option v-for="object in array" :key="object.genus" :value="object.name">{{ object.name }}</option>
  </select>
</template>
