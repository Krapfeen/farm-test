<script setup>
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
const emit = defineEmits(['update:value']);

function updateValue(event) {
  emit('update:value', event.target.value);
}
</script>

<template>
  <label class="col-sm-2 col-form-label">{{ label }}</label>
  <div class="col-sm-10">
    <input :value="value" :readonly="readonly" :required="required" @input="updateValue" type="number" class="form-control">
  </div>
</template>
