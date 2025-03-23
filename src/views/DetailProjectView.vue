<script setup>
import NumberInput from '@/components/UI/NumberInput.vue'
import DateInput from '@/components/UI/DateInput.vue'
import { useRoute } from 'vue-router'
import StringInput from '@/components/UI/StringInput.vue'
import { onMounted, ref } from 'vue'
import ButtonInput from '@/components/UI/ButtonInput.vue'
import { useFirestore } from '@/composables/useFirestore'
import cattles from '@/constants/cattles'

const route = useRoute()
const id = ref(route.params.id)
const { item, fetchItemById } = useFirestore('projects')
const link = ref('')

onMounted(async () => {
  await fetchItemById(id.value)
  link.value = `/projects/${item.value.id}`
  cattles.forEach((element) => {
    element.type.forEach((type) => {
      if (item.value.subgroup == type.genus.toLowerCase()) {
        item.value.subgroup = type.name
      }
    })
  })
})
</script>
<template>
  <div class="row mb-3" v-if="item">
    <h1 class="fs-1">{{ item.name }}</h1>
    <div class="d-flex justify-content-between my-4">
      <ButtonInput>Добавить доходы</ButtonInput>
      <ButtonInput>Добавить расходы</ButtonInput>
    </div>
    <StringInput label="Тип скотины" v-model="item.group" :readonly="true" />
    <StringInput label="Подтип скотины" v-model="item.subgroup" :readonly="true" />
    <DateInput label="Дата приобритения" v-model="item.startDate" :readonly="true" />
    <DateInput v-if="item.birthday" label="Дата рождения" v-model="item.birthday"
      :readonly="true" />
    <NumberInput label="Затраты" :value="item.expenses" :readonly="true" />
    <NumberInput label="Выручка" :value="item.income" :readonly="true" />
    <NumberInput label="Прибль" :value="item.income - item.expenses" :readonly="true" />
    <DateInput v-if="item.end" label="Дата закола" :value="item.end" :readonly="true" />
  </div>
  <div class="d-flex justify-content-between" v-if="item && item.status">
    <ButtonInput variant="danger">Закрыть проект</ButtonInput>
    <ButtonInput variant="warning">Изменить проект</ButtonInput>
  </div>
</template>
