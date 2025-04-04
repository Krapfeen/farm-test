<script setup>
import NumberInput from '@/components/UI/NumberInput.vue'
import DateInput from '@/components/UI/DateInput.vue'
import { useRoute } from 'vue-router'
import StringInput from '@/components/UI/StringInput.vue'
import { onBeforeMount, onMounted, ref } from 'vue'
import ButtonInput from '@/components/UI/ButtonInput.vue'
import { useFirestore } from '@/composables/useFirestore'
// import cattles from '@/constants/cattles'

const route = useRoute()
const id = ref(route.params.id)
const { item, fetchItemById } = useFirestore('projects')
const { items: incomeItems, fetchItemsByField: fetchIncomesItems } = useFirestore('incomes')
const { items: expensesItems, fetchItemsByField: fetchExpensesItems } = useFirestore('expenses')
// const link = ref('')
const incomes = ref(0)
const expenses = ref(0)
const profit = ref(0)

onBeforeMount(async () => {
  await fetchItemById(id.value)
  // link.value = `/projects/${item.value.id}`
  expenses.value = item.value.expenses
  await fetchIncomesItems('project', id.value)
  incomeItems.value.forEach(income => {
    incomes.value += income.income
  })
  await fetchExpensesItems('project', id.value)
  expensesItems.value.forEach(expense => {
    expenses.value += expense.expense
  })
  profit.value = incomes.value - expenses.value
})
</script>
<template>
  <div class="row mb-3" v-if="item">
    <h1 class="fs-1">{{ item.name }}</h1>
    <div class="d-flex justify-content-between my-4">
      <ButtonInput type="link" :url="'#/incomes/' + id + '/add'">Добавить доходы</ButtonInput>
      <ButtonInput type="link" :url="'#/expenses/' + id + '/add'">Добавить расходы</ButtonInput>
    </div>
    <StringInput label="Тип скотины" v-model="item.type" :readonly="true" />
    <StringInput label="Подтип скотины" v-model="item.subtype" :readonly="true" />
    <DateInput label="Дата приобритения" v-model="item.startDate" :readonly="true" />
    <DateInput v-if="item.birthday" label="Дата рождения" v-model="item.birthday" :readonly="true" />
    <NumberInput label="Затраты" v-model="expenses" :readonly="true" />
    <NumberInput label="Выручка" v-model="incomes" :readonly="true" />
    <NumberInput label="Прибль" v-model=profit :readonly="true" />
    <DateInput v-if="item.end" label="Дата закола" :value="item.end" :readonly="true" />
  </div>
  <!-- <div class="d-flex justify-content-between" v-if="item && !item.endDate">
    <ButtonInput variant="danger">Закрыть проект</ButtonInput>
    <ButtonInput variant="warning" type="link" :url="'/projects/' + id + '/update'">Изменить проект</ButtonInput>
  </div> -->
</template>
