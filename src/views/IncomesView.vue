<script setup>
import Product from '@/components/Product.vue';
import ButtonInput from '@/components/UI/ButtonInput.vue';
import { useFirestore } from '@/composables/useFirestore';
import incomes from '@/constants/incomes';
import { onMounted } from 'vue';

const { items, fetchItems } = useFirestore('incomes')

onMounted(async () => {
  await fetchItems()
})

</script>

<template>
  <ButtonInput url="/incomes/add">Добавить доход</ButtonInput>
  <Product v-for="income in items" :object="income" />
</template>
