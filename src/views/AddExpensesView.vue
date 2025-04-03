<script setup>
import DateInput from '@/components/UI/DateInput.vue';
import NumberInput from '@/components/UI/NumberInput.vue';
import SelectInput from '@/components/UI/SelectInput.vue';
import { useFirestore } from '@/composables/useFirestore';
import expenses from '@/constants/expenses';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const id = ref(null)
const formData = ref({})
const { addItem } = useFirestore('expenses')
const { item, items, fetchItems, fetchItemById, fetchItemsByField } = useFirestore('projects')

onBeforeMount(async () => {
  id.value = route.params.id
  if (id.value) {
    await fetchItemById(id.value)
  } else {
    await fetchItems()
  }
})

async function submitForm() {
  try {
    if (!id.value) {
      await fetchItemsByField('name', formData.value.project)
      id.value = items.value[0].id
    }
    formData.value.project = id.value
    if (!formData.value.date) {
      formData.value.date = new Date().toISOString().split('T')[0]
    }
    await addItem(formData.value)
    router.push(`/projects/${id.value}`)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <h1>Внесение расхода</h1>
  <h2 v-if="id && item">{{ item.name }}</h2>
  <form @submit.prevent="submitForm" method="post" class="row mb-3">
    <SelectInput v-if="!id" label="Проект" :array=items v-model="formData.project" />
    <SelectInput label="Вид расоходов" :array=expenses v-model="formData.type" />
    <NumberInput label="Сумма расхода" v-model="formData.expense" />
    <DateInput label="Дата дохода" v-model="formData.date" />
    <input type="submit" value="Зафиксировать" class="btn btn-primary mt-4">
  </form>
</template>
