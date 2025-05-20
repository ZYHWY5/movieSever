<script setup>
import { ref } from "vue";
import { points } from "../ultils/divide.js";
import back from "../assess/icon/back.svg";
import forward from "../assess/icon/forward.svg";
import { useIndexStore } from "@/stores";

let indexStore = useIndexStore();

let total = ref();
total.value = points();

let control = ref([]);

for (let i = 0; i < total.value; i++) {
  control.value.push(i + 1);
}

</script>

<template>
  <div class="points">
    <div class="left">
      <back @click="indexStore.decrease" class="back" />
    </div>
    <div class="control">
      <ul>
        <li @click="indexStore.assign(index)" :class="{control_li:1, chose:index == indexStore.index}" v-for="(item, index) in control" :key="item">
          <div>
            {{ item }}
          </div>
        </li>
      </ul>
    </div>
    <div class="right">
      <forward @click="indexStore.increase" class="forward" />
    </div>
  </div>
</template>

<style scoped>
.points {
  display: flex;
  justify-content: space-around;
}
.control > ul {
  display: flex;
}
.control_li {
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  color: #717171;
  line-height: 30px;
  text-align: center;
  margin: 0 1px 0 1px;
  border: 1px solid #bbb;
  cursor: pointer;
  transition: all, 0.2s;
}
.control_li:hover {
  transition: all, 0.2s ease-in-out;
  transform: translateY(-3px);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.back {
  cursor: pointer;
}
.back:hover {
  transition: all, 0.2s ease-in-out;
  transform: translateY(-3px);
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.forward {
  cursor: pointer;
}
.forward:hover {
  transition: all, 0.2s ease-in-out;
  transform: translateY(-3px);
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.chose{
  border: 1px solid blueviolet;
  color: blueviolet;
}
</style>
