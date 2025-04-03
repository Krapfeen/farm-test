<script setup>
import { useId } from 'vue';

const model = defineModel()
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true
  },
  readonly: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
});

const id = useId()
</script>

<template>
  <label class="col-sm-2 col-form-label" :for="id">{{ label }}</label>
  <div class="col-sm-10">
    <input :readonly="readonly" :required="required" :id="id" v-model="model" type="date" class="form-control">
  </div>
</template>
