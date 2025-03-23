<script setup>
import Product from '@/components/Product.vue';
import ButtonInput from '@/components/UI/ButtonInput.vue';
import incomes from '@/constants/incomes';
</script>

<template>
  <ButtonInput url="/incomes/add">Добавить доход</ButtonInput>
  <Product v-for="income in incomes" :object="income" />
</template>
