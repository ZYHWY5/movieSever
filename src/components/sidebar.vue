<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user.js";
import { getFun } from "../ultils/getFun.js";
import { jump } from "../ultils/jump.js";
import { emitter } from "@/ultils/mitt";
import { useRouter } from 'vue-router';

let router = useRouter();

let userStore = useUserStore();

let funList = ref([]);
funList.value = await getFun();

let toHome = () => {
  router.push('/home');
}

// let hide = () => {
//   emitter.emit('isshow', false);
// }
</script>

<template>
  <div class="sidebar">
    <div class="content">
      <div class="logo">
        <span @click="toHome">ERO电影网</span>
      </div>
      <div class="fun">
        <ul>
          <li @click="jump(item)" v-for="item in funList" :key="item">
            <img width="36px" height="36px" :src="item.src" alt="" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40vw;
  background-color: white;
  z-index: 20;
}
.content {
  width: 80%;
  margin: auto;
}
.logo{
  margin: 10px 0 0 0;
}
.logo > span {
  display: block;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  background-image: linear-gradient(
    -135deg,
    #3778e5,
    #e98bc0,
    #3778e5,
    #e98bc0,
    #3778e5
  );
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 200% 100%;
  animation: mbani 4s infinite linear;
}
@keyframes mbani {
  0% {
    background-position: 0 -85%;
  }
  100% {
    background-position: -85% 0;
  }
}
.fun {
  width: 100%;
  overflow-y: hidden;
  margin: 15px 0 0 0;
}
.fun > ul {
  width: 100%;
}
.fun > ul > li {
  display: flex;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}
.fun > ul > li>p {
  font-size: 16px;
  line-height: 36px;
  font-weight: 600;
  color: #000000;
  transition: all, 0.2s;
}
.fun > ul > li > p:hover {
  color: blueviolet;
}

@media (min-width:500) and (max-width:600px){
  .sidebar{
    width: 45vw;
  }
}
@media (min-width:0) and (max-width:500px){
  .sidebar{
    width: 50vw;
  }
}

</style>
