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
  <ButtonInput to="/expenses/add">Добавить расходы</ButtonInput>
  <Product v-for="income in items" :object="income" />
</template>
