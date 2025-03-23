<script setup>
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

</script>

<template>
  <label class="col-sm-2 col-form-label">{{ label }}</label>
  <select class="form-select" :required="required" :title=label v-model="model">
    <option selected disabled>Выберите {{ label.toLowerCase() }}</option>
    <option v-for="(value, key) in array" :key="key" :value="key">{{ value }}</option>
  </select>
</template>
