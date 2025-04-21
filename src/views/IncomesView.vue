<script setup>
import Product from '@/components/Product.vue';
import ButtonInput from '@/components/UI/ButtonInput.vue';
import { useFirestore } from '@/composables/useFirestore';
import { onMounted } from 'vue';

const { items, fetchItems } = useFirestore('incomes')

onMounted(async () => {
  await fetchItems()
})

</script>

<template>
  <RouterLink to="/incomes/add" class="btn btn-primary d-flex justify-content-center">Добавить доход</RouterLink>
  <Product v-for="income in items" :object="income" />
</template>
