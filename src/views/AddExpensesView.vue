<script setup>
</script>

<template>
  <h1>Расходы Куры</h1>
  <form class="row mb-3">
    <select class="form-select">
      <option selected value="all">Все</option>
      <option value="1">Федя</option>
      <option value="2">Рокки</option>
      <option value="3">Пердулин</option>
    </select>
    <label>Вид расходов</label>
    <select class="form-select">
      <option selected value="all">Корм</option>
      <option value="1">Сено</option>
      <option value="2">Мелкие затраты</option>
      <option value="3">Лекарства</option>
      <option value="4">Стройматериаллы</option>
    </select>
    <label class="col-sm-2 col-form-label">Сумма</label>
    <div class="col-sm-10">
      <input type="number" class="form-control">
    </div>
    <input type="submit" value="Зафиксировать" class="btn btn-primary mt-4">
  </form>
</template>
