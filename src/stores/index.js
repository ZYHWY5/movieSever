import { ref } from "vue";
import { defineStore } from "pinia";
import { points } from "@/ultils/divide";

let useIndexStore = defineStore('index', () => {
  let index = ref();
  index.value = 0;

  let total = ref();
  total.value = 2;

  let increase = () => {
    if(index.value >= total.value - 1){
      index.value = total.value - 1;
      return;
    }
    index.value ++;
  }

  let decrease = () => {
    if(index.value <= 0){
      index.value = 0;
      return;
    }
    index.value --;
  }

  let assign = (pointIndex) => {
    index.value = pointIndex;
  }

  return {index, increase, decrease, assign}
})

export {useIndexStore};