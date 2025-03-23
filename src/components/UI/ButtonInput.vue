<script setup>
const props = defineProps({
  url: {
    type: String,
    default: '#'
  },
  type: {
    type: String,
    default: 'link',
    validator: (value) => ['link', 'btn'].includes(value) // Валидация для type
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'warning', 'danger'].includes(value) // Валидация для variant
  }
});
</script>

<template>
  <component :is="type === 'link' ? 'a' : 'button'" :href="type === 'link' && url"
    :class="['btn', `btn-${variant}`]" :type="type === 'btn' ? 'button' : undefined"
    :data-bs-dismiss="type === 'btn' ? 'modal' : undefined">
    <slot></slot>
  </component>
</template>
