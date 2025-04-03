<script setup>
import DateInput from '@/components/UI/DateInput.vue';
import NumberInput from '@/components/UI/NumberInput.vue';
import SelectInput from '@/components/UI/SelectInput.vue';
import { useFirestore } from '@/composables/useFirestore';
import cattles from '@/constants/cattles';
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const id = ref(null)
const formData = ref({})
const incomes = ref([])
const { addItem } = useFirestore('incomes')
const { item, items, fetchItems, fetchItemById, fetchItemsByField, updateItem } = useFirestore('projects')

function getIncomesList () {
  cattles.forEach(element => {
    if (element.genus.toLowerCase() === item.value.genus.toLowerCase()) {
      element.produced_goods.forEach(income => {
        incomes.value.push(income)
      })
      element.subtypes.forEach(subtype => {
        if (subtype.name.toLowerCase() === item.value.subtype.toLowerCase()) {
          subtype.produced_goods.forEach(income => {
            incomes.value.push(income)
          })
        }
      })
    }
  })
}

watch(() => formData.value.project, async () => {
  await fetchItemsByField('name', formData.value.project)
  item.value = items.value[0]
  if (!id.value) {
    getIncomesList()
  }
})

onBeforeMount(async () => {
  id.value = route.params.id
  if (id.value) {
    await fetchItemById(id.value)
    getIncomesList()
  } else {
    await fetchItems()
  }
})

async function submitForm() {
  try {
    if (!id.value) {
      id.value = item.value.id
      await fetchItemById(id.value)
    }
    formData.value.project = id.value
    if (!formData.value.date) {
      formData.value.date = new Date().toISOString().split('T')[0]
    }
    await addItem(formData.value)
    router.push(`/projects/${id.value}`)
  } catch {

  }
}
</script>

<template>
  <h1>Внесение дохода</h1>
  <h2 v-if="id && item">{{ item.name }}</h2>
  <form @submit.prevent="submitForm" method="post" class="row mb-3">
    <SelectInput v-if="!id" label="Проект" :array=items v-model="formData.project" />
    <SelectInput label="Вид дохода" :array=incomes v-model="formData.type" />
    <NumberInput label="Сумма дохода" v-model="formData.income" />
    <DateInput label="Дата дохода" v-model="formData.date" />
    <input type="submit" value="Добавить доход" class="btn btn-primary mt-4">
  </form>
</template>
