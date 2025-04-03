<script setup>
import { onUpdated, ref } from 'vue';
import NumberInput from '@/components/UI/NumberInput.vue';
import DateInput from '@/components/UI/DateInput.vue';
import StringInput from '@/components/UI/StringInput.vue';
import SelectInput from '@/components/UI/SelectInput.vue';
import { useFirestore } from '@/composables/useFirestore';
import { useRouter } from 'vue-router';
import cattles from '@/constants/cattles';

const formData = ref({})
const subtypes = ref({})
const init = ref({})
const router = useRouter()
const { addItem } = useFirestore('projects')

onUpdated(() => {
  cattles.forEach(element => {
    if (element.name == formData.value.type) {
      subtypes.value = element.subtypes
      init.value = element.appearance_methods
      formData.value.genus = element.genus.toLowerCase()
    }
  })
})

async function submitForm() {
  try {
    if (!formData.value.startDate) {
      formData.value.startDate = new Date().toISOString().split('T')[0]
    }
    const docRef = await addItem(formData.value)
    router.push(`/projects/${docRef.id}`)
  } catch (error) {
    console.error('Ошибка при создании проекта:', error);
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" method="post" class="row mb-3">
    <StringInput label="Название проекта" v-model="formData.name" :required="true" />
    <SelectInput label="Вид скотины" :array="cattles" v-model="formData.type" :required="true" />
    <SelectInput label="Вид приобритения" :array="init" v-model="formData.init" :required="true" />
    <SelectInput label="Вид скотины" :array="subtypes" v-model="formData.subtype" :required="true" />
    <DateInput label="Дата рождения" v-model="formData.birthday" />
    <DateInput label="Дата приобритения" v-model="formData.startDate" />
    <NumberInput label="Затраты" v-model="formData.expenses" :required="true" />
    <input type="submit" value="Создать проект" class="btn btn-primary mt-4">
  </form>
</template>
