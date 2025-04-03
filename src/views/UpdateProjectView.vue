<script setup>
import ButtonInput from '@/components/UI/ButtonInput.vue'
import DateInput from '@/components/UI/DateInput.vue'
import NumberInput from '@/components/UI/NumberInput.vue'
import SelectInput from '@/components/UI/SelectInput.vue'
import StringInput from '@/components/UI/StringInput.vue'
import { useFirestore } from '@/composables/useFirestore'
import cattles from '@/constants/cattles'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { item, fetchItemById } = useFirestore('projects')
const id = ref(null)
const link = ref('')
const profit = ref(0)

onBeforeMount(async () => {
  id.value = route.params.id
  await fetchItemById(id.value)
  console.log(item.value)
  link.value = `/projects/${item.value.id}`
  cattles.forEach((element) => {
    element.type.forEach((type) => {
      if (item.value.subgroup == type.genus.toLowerCase()) {
        item.value.subgroup = type.name
        if (!item.value.income) {
          item.value.income = 0
        }
        profit.value = item.value.income - item.value.expenses
      }
    })
  })
})
</script>

<template>
  <div class="row mb-3" v-if="item">
    <h1 class="fs-1">{{ item.name }}</h1>
    <StringInput label="Название проекта" v-model="item.name" />
    <SelectInput label="Тип скотины" v-model="item.group" />
    <StringInput label="Тип скотины" v-model="item.group" />
    <StringInput label="Подтип скотины" v-model="item.subgroup" />
    <DateInput label="Дата приобритения" v-model="item.startDate"  />
    <DateInput v-if="item.birthday" label="Дата рождения" v-model="item.birthday" />
    <NumberInput label="Затраты" v-model="item.expenses" :readonly="true" />
    <NumberInput label="Выручка" v-model="item.income" :readonly="true" />
    <NumberInput label="Прибль" v-model=profit :readonly="true" />
    <DateInput v-if="item.end" label="Дата закола" :value="item.end" :readonly="true" />
  </div>
</template>


