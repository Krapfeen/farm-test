<script setup>
import { useId } from 'vue';

const model = defineModel()
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [Number, String],
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
})

const id = useId()
</script>

<template>
  <label class="col-sm-2 col-form-label" :for="id">{{ label }}</label>
  <div class="col-sm-10">
    <input :readonly="readonly" v-model="model" :id="id" :required="required" type="number" class="form-control">
  </div>
</template>
