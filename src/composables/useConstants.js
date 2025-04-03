import { ref } from "vue"
import incomesList from "@/constants/incomes"

export function useConstants() {
  const incomes = ref({})
  const test = ref(false)

  const getIncomes = () => {
    incomes.value = incomesList
  }

  const getExpenses = () => {

  }

  const getCattles = () => {

  }

  return {
    incomes,
    getCattles,
    getExpenses,
    getIncomes,
  }
}
