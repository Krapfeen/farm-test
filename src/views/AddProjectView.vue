<script setup>
import { ref } from 'vue';
import NumberInput from '@/components/UI/NumberInput.vue';
import DateInput from '@/components/UI/DateInput.vue';
import StringInput from '@/components/UI/StringInput.vue';
import SelectInput from '@/components/UI/SelectInput.vue';
import animals from '@/constants/animals';
import { useFirestore } from '@/composables/useFirestore';
import { useRouter } from 'vue-router';

const selectedGroup = ref(null);
const formData = ref({})
const router = useRouter()

function updateField(field, value) {
  formData.value[field] = value;
}

function updateGroup(event) {
  formData.value.group = event.target.value;
}

const { addItem } = useFirestore('projects')
async function submitForm() {
  try {
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
    <label class="col-sm-2 col-form-label">Тип скотины</label>
    <select v-model="selectedGroup" @change="updateGroup" class="form-select mx-2" required title="Что-то">
      <option selected disabled>Выберите тип скотины</option>
      <option v-for="(group, key) in animals" :key="key" :value="key">{{ group.name }}</option>
    </select>
    <!-- <SelectInput label="Тип скотины" :array=animals :required="true" v-model="selectedGroup" @change="updateGroup" /> -->
    <SelectInput label="Вид закупа" :array=animals[selectedGroup].subgroup :required="true" v-if="selectedGroup" v-model="formData.subgroup" />
    <SelectInput label="Тип закупа" :array=animals[selectedGroup].type :required="true" v-if="selectedGroup === 'birds'" />
    <DateInput label="Дата приобритения" v-model="formData.startDate" :required="true" />
    <NumberInput label="Затраты" @update:value="updateField('expenses', $event)" :required="true" />
    <input type="submit" value="Создать проект" class="btn btn-primary mt-4">
  </form>
</template>
