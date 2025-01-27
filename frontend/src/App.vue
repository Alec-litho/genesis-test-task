<script setup lang="ts">
import DropDown from "./components/DropDown.vue";
import Button from "./components/Button.vue";
import ItemList from "./components/ItemList.vue";
import { useStoreTask } from "@/stores/storeTask";

const store = useStoreTask();
</script>

<template>
  <div class="body">
    <div class="menu">
      <DropDown />
      <Button type="save" :disabled="true" />
    </div>
    <div class="errorMessage" v-if="store.getStatus === 'error'">
      <p>{{ store.getStatus }}</p>
    </div>
    <ItemList />
  </div>
</template>

<style lang="scss">
.body {
  background-color: rgb(252, 252, 252);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  align-self: center;
  .menu {
    width: 40%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    margin-top: 20px;
  }
  .errorMessage {
    width: 40%;
    background-color: rgba(255, 0, 0, 0.124);
    display: flex;
    justify-content: center;
    p {
      color: red;
    }
  }
}
</style>
