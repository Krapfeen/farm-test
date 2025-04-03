<script setup>
import Project from '@/components/Project.vue'
import ButtonInput from '@/components/UI/ButtonInput.vue';
import { useFirestore } from '@/composables/useFirestore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const subgroup = ref(route.params.group)
const { items, fetchItemsByField } = useFirestore('projects')
let url


function createLink(project) {
  return `/projects/${project.id}`;
}

onMounted(async () => {
  await fetchItemsByField('genus', subgroup.value)
})

</script>
<template>
  <ButtonInput>Добавить затраты</ButtonInput>
  <Project v-for="item in items" :name="item.name" :url=createLink(item) :object="item" />
</template>
