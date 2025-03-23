<script setup>
const model = defineModel()
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [Number, String],
    required: false
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
</script>

<template>
  <label class="col-sm-2 col-form-label">{{ label }}</label>
  <div class="col-sm-10">
    <input :readonly="readonly" :required="required" v-model="model" type="text" class="form-control">
  </div>
</template>
