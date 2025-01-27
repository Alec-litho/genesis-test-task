<template>
  <div class="list">
    <div class="task" v-for="item in store.getTasks" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.id }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStoreTask } from "@/stores/storeTask";
const store = useStoreTask();
</script>
<style lang="scss">
.list {
  width: 60%;
  height: auto;

  .task {
    width: 100%;
    border: 1px solid rgb(239, 239, 239);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0 20px;
    cursor: pointer;
  }

  .task:hover {
    transition: 0.2s;
    background-color: rgb(239, 239, 239);
  }
}
</style>
