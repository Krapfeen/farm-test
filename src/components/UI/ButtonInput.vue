<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  to: {  // Заменили url на to для совместимости с RouterLink
    type: [String, Object],
    default: '/'
  },
  type: {
    type: String,
    default: 'link',
    validator: (value) => ['link', 'btn'].includes(value)
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'warning', 'danger'].includes(value)
  }
});
</script>

<template>

  <!-- <div class="col-sm-10"> -->
    <component :is="type === 'link' ? RouterLink : 'button'" :to="type === 'link' ? to : undefined"
      :class="['btn', `btn-${variant}`]" :type="type === 'btn' ? 'button' : undefined"
      :data-bs-dismiss="type === 'btn' ? 'modal' : undefined">
      <slot></slot>
    </component>
  <!-- </div> -->
</template>
