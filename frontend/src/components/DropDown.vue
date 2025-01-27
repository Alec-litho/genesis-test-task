<template>
  <select name="select" class="dropDown" @click="(e) => store.setCurrentTask(e.target.value)">
    <option value="notChosen" selected>Не выбрано</option>
    <option value="deals">Сделка</option>
    <option value="contacts">Контакт</option>
    <option value="companies">Компания</option>
  </select>
</template>
<script setup lang="ts">
import { useStoreTask } from "@/stores/storeTask";

const store = useStoreTask();
</script>
<style lang="scss">
.dropDown {
  width: 55%;
  height: 100%;
}
</style>
