<script setup>
import Product from '@/components/Product.vue';
import ButtonInput from '@/components/UI/ButtonInput.vue';
import { useFirestore } from '@/composables/useFirestore';
import { onBeforeMount } from 'vue';

const { items, fetchItems } = useFirestore('expenses')

onBeforeMount(async () => {
  await fetchItems()
})

</script>

<template>
  <RouterLink to="/expenses/add" class="btn btn-primary d-flex justify-content-center">Добавить расходы</RouterLink>
  <Product v-for="income in items" :object="income" />
</template>
