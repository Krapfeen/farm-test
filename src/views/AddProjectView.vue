<script setup>
import { ref, computed } from 'vue';
import NumberInput from '@/components/UI/NumberInput.vue';
import DateInput from '@/components/UI/DateInput.vue';
import StringInput from '@/components/UI/StringInput.vue';
import SelectInput from '@/components/UI/SelectInput.vue';
import { useFirestore } from '@/composables/useFirestore';
import { useRouter } from 'vue-router';
import cattles from '@/constants/cattles';

const router = useRouter();
const { addItem } = useFirestore('projects');

const formData = ref({});

const selectedGroup = ref(null);
const selectedSubgroup = ref(null);

// Получаем список всех групп животных
const animalGroups = computed(() => {
  return cattles.cattles.map(item => ({
    value: item.name,
    label: item.name
  }));
});

// Получаем подгруппы для выбранной группы
const subgroups = computed(() => {
  if (!selectedGroup.value) return [];
  const group = cattles.cattles.find(g => g.name === selectedGroup.value);
  return group.subgroup.map(item => ({
    value: item,
    label: item
  }));
});

// Получаем типы только для птиц (куры, перепела)
const birdTypes = computed(() => {
  if (!selectedGroup.value || !['куры', 'перепела'].includes(selectedGroup.value)) return [];
  const group = cattles.cattles.find(g => g.name === selectedGroup.value);
  return group.type.map(item => ({
    value: item,
    label: item
  }));
});

function updateField(field, value) {
  formData.value[field] = value;
}

function updateGroup(value) {
  selectedGroup.value = value;
  formData.value.group = value;
  // Сбрасываем подгруппу и тип при изменении группы
  selectedSubgroup.value = null;
  formData.value.subgroup = null;
  formData.value.type = null;
}

function updateSubgroup(value) {
  selectedSubgroup.value = value;
  formData.value.subgroup = value;
}

async function submitForm() {
  try {
    const docRef = await addItem(formData.value);
    router.push(`/projects/${docRef.id}`);
  } catch (error) {
    console.error('Ошибка при создании проекта:', error);
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" method="post" class="row mb-3">
    <StringInput label="Название проекта" v-model="formData.name" :required="true" />

    <SelectInput label="Тип скотины" :options="animalGroups" :required="true" v-model="selectedGroup"
      @update:modelValue="updateGroup" />

    <SelectInput v-if="selectedGroup" label="Вид закупа" :options="subgroups" :required="true"
      v-model="selectedSubgroup" @update:modelValue="updateSubgroup" />

    <SelectInput v-if="birdTypes.length > 0" label="Тип закупа" :options="birdTypes" v-model="formData.type" />

    <DateInput label="Дата приобретения" v-model="formData.startDate" :required="true" />

    <NumberInput label="Затраты" @update:value="updateField('expenses', $event)" :required="true" />

    <input type="submit" value="Создать проект" class="btn btn-primary mt-4">
  </form>
</template>
