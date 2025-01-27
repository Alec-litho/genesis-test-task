import axios from "axios";
import { defineStore } from "pinia";

export const useStoreTask = defineStore("storeTask", {
  state: () => {
    return {
      tasks: [
        { name: "company", id: "2328u42" },
        { name: "job", id: "35522" },
        { name: "task", id: "2328u42" },
        { name: "company", id: "244254" },
      ],
      status: "fulfilled", // pending | error | fulfilled
      currentTask: "notChosen", // notChosen | contact | deal | company
    };
  },
  actions: {
    async addTask() {
      try {
        this.status = "pending";
        const taskData = await axios.post(`http://localhost:3000/api/v1/${this.currentTask}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.status = "fulfilled";
        this.tasks.push({ name: this.currentTask, id: taskData.data });
      } catch (error) {
        this.status = "error";
        console.log(error);
      }
    },
    setCurrentTask(task: string) {
      this.currentTask = task;
    },
  },
  getters: {
    getTasks: (state) => state.tasks,
    getStatus: (state) => state.status,
    getCurrentTask: (state) => state.currentTask,
  },
});
