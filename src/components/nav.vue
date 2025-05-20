<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import { emitter } from '@/ultils/mitt';
import more from '../assess/icon/more.svg';
import { getFun } from '@/ultils/getFun';
import { jump } from '@/ultils/jump';
import sidebar from './sidebar.vue';

let router = useRouter();

let funList = ref();
funList.value = await getFun();

let toHome = () => {
  router.push('/home');
}

// let show = () => {
//   emitter.emit('isshow', true);
// }

let isshow = ref(false);
let show = () => {
  isshow.value = !isshow.value;
}

let mqList = window.matchMedia('(min-width: 769px)');
let widthChangeCallback = (mqList) => {
  if(mqList.matches){
    isshow.value = false;
  }
}
widthChangeCallback(mqList);
mqList.addEventListener('change', widthChangeCallback)
</script>

<template>
  <div class="nav_bg">
    <div class="nav">
      <div class="logo">
        <span @click="toHome">ERO电影网</span>
      </div>
      <div class="more_little">
        <more @click="show" class="more_img"/>
      </div>
      <div class="more_big">
        <ul>
          <li @click="jump(item)" v-for="item in funList" :key="item">
            <img :src="item.src" alt="">
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar">
      <div @click="show" :class="{mask:1, mask_hidden:isshow == false}"></div>
      <transition>
        <sidebar v-if="isshow"></sidebar>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.nav_bg{
  width: 100vw;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
}
.nav {
  width: 90%;
  height: 30px;
  margin: auto;
  display: flex;
  justify-content: space-between;
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
.more_img{
  width: 26px;
  height: 26px;
  transform: translateY(2px);
  cursor: pointer;
}
.more_big{
  height: 100%;
}
.more_big>ul{
  height: 100%;
  display: flex;
}
.more_big>ul>li{
  display: flex;
  line-height: 30px;
  margin: 0 0 0 20px;
}
.more_big>ul>li>img{
  cursor: pointer;
}
.more_big>ul>li>p{
  cursor: pointer;
  transition: all, 0.2s;
}
.more_big>ul>li>p:hover{
  color: blueviolet;
}
.more_little{
  display: none;
}
.mask{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 1;
  transition: all, 0.2s;
  z-index: 10;
}
.mask_hidden{
  opacity: 0;
  display: none;
}

.v-enter-from,
.v-leave-to{
  right: -100vw;
}
.v-enter-to,
.v-leave-from{
  right: 0;
}
.v-enter-active,
.v-leave-active{
  transition: all, 0.2s;
}

@media (max-width:768px){
  .more_little{
    display: block;
  }
  .more_big{
    display: none;
  }
}
@media (min-width:769px){
  .sidebar{
    display: none;
  }
}
</style>
