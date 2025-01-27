<template>
  <button
    :class="store.getCurrentTask !== 'notChosen' ? 'save' : 'save disabled'"
    @click="store.addTask"
  >
    <span v-if="store.getStatus == 'pending'"><div class="loader"></div></span>
    <span v-else>Сохранить</span>
  </button>
</template>
<script setup lang="ts">
import vue from "vue";
import { useStoreTask } from "@/stores/storeTask";
const store = useStoreTask();
console.log(store.getStatus);

const props = defineProps({
  type: String,
  disabled: Boolean,
});
</script>

<style lang="scss">
.save {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 100%;
  border: none;
  border-radius: 4px;
  background-color: rgb(51, 128, 229);
  color: white;
  cursor: pointer;
  .loader {
    width: 20px;
    height: 20px;
    border: 3px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
.disabled {
  width: 35%;
  height: 100%;
  background-color: rgb(228, 228, 228);
  cursor: default;
  pointer-events: none;
}
</style>
