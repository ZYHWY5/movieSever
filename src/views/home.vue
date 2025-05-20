<script setup>
import { ref, watch } from "vue";
import searchInput from "@/components/search-input.vue";
import points from "@/components/points.vue";
import Nav from "@/components/nav.vue";
import sidebar from "@/components/sidebar.vue";
import { getMovie } from "@/ultils/getMovie";
import { divide } from "../ultils/divide.js";
import { emitter } from "@/ultils/mitt";
import toTop from "../assess/icon/toTop.svg";
import { toDetails } from "@/ultils/toDetails";
import { useIndexStore } from "@/stores";

let indexStore = useIndexStore();

let movieList = ref();
movieList.value = await getMovie();
console.log(movieList.value);

let list = ref([]);
list.value = divide(movieList.value);

let isshow = ref();
isshow.value = false;

emitter.on("isshow", (e) => {
  isshow.value = e;
});

let top = () => {
  document.documentElement.scrollTop = 0;
  window.pageYOffset = 0; // 兼容iOS
  document.body.scrollTop = 0; // 兼容低版本IE
  scrollTop.value = 0;
};

let scrollTop = ref();
window.addEventListener('mousewheel', () => {
  scrollTop.value = document.documentElement.scrollTop;
})
//手机端滑动事件
window.addEventListener('touchmove', () => {
  scrollTop.value = document.documentElement.scrollTop;
})

</script>

<template>
  <div class="bg">
    <!-- <transition>
      <sidebar class="sidebar" v-show="isshow"></sidebar>
    </transition> -->
    <div class="nav">
      <Nav></Nav>
    </div>
    <div class="searchInput">
      <searchInput></searchInput>
    </div>
    <div class="suggest">
      <p>为您推荐</p>
      <div>
        <ul class="suggest_ul">
          <li
            @click="toDetails(item)"
            class="element"
            v-for="item in list[indexStore.index]"
            :key="item"
          >
            <div class="element_img">
              <img :src="item.src" alt="" />
            </div>
            <div class="name">
              <p>{{ item.name }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="points">
      <points></points>
    </div>
    <div :class="{toTop:1, isshow:scrollTop >= 100}">
      <toTop @click="top" class="toTop_svg" />
    </div>
  </div>
</template>

<style scoped>
.bg {
  width: 100vw;
  height: auto;
  background-color: #eff3f7;
  position: relative;
}
.sidebar {
  width: 100vw;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.nav {
  position: fixed;
  top: 0;
  z-index: 9;
}
.searchInput {
  transform: translateY(30px);
}
.suggest {
  width: 90vw;
  height: auto;
  margin: 60px auto 0 auto;
}
.suggest > p {
  font-size: 24px;
  font-weight: 600;
  border-bottom: 2px #ccc solid;
  color: #6e6e6e;
}
.suggest_ul {
  display: flex;
  flex-wrap: wrap;
}
.element {
  width: 150px;
  height: 240px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px 8.5px 0 8.5px;
  transition: all, 0.2s ease-in-out;
}
.element_img {
  width: 100%;
  height: 85%;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  background-color: #6e6e6e;
}
.element_img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.element:hover {
  transition: all, 0.2s ease-in-out;
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
.name {
  width: 100%;
  height: 15%;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  line-height: 36px;
  font-weight: 600;
}
.points {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
}
.toTop {
  position: fixed;
  right: 1%;
  top: 70%;
  opacity: 0;
  z-index: -1;
  transition: all, 0.2s;
}
.isshow{
  opacity: 1;
  z-index: 5;
}
.toTop_svg {
  cursor: pointer;
}

.v-enter-from,
.v-leave-to {
  /* transform: translateX(100vw); */
  position: absolute;
  left: 100vw;
}
.v-enter-to,
.v-leave-from {
  /* transform: translateX(0); */
  position: absolute;
  left: 0vw;
}
.v-enter-active,
.v-leave-active {
  transition: all, 0.3s ease-in-out;
}

@media (min-width: 1487px) {
  .bg {
    height: 100vh;
  }
  .suggest {
    height: 580px;
  }
  .points {
    margin-top: 0;
  }
}
@media (min-width: 1484px) and (max-width: 1487px) {
  .element {
    margin: 20px 20px 0 20px;
  }
}
@media (min-width: 1470px) and (max-width: 1484px) {
  .element {
    margin: 20px 19px 0 19px;
  }
}
@media (min-width: 1456px) and (max-width: 1470px) {
  .element {
    margin: 20px 18px 0 18px;
  }
}
@media (min-width: 1442px) and (max-width: 1456px) {
  .element {
    margin: 20px 17px 0 17px;
  }
}
@media (min-width: 1428px) and (max-width: 1442px) {
  .element {
    margin: 20px 16px 0 16px;
  }
}
@media (min-width: 1414px) and (max-width: 1428px) {
  .element {
    margin: 20px 15px 0 15px;
  }
}
@media (min-width: 1400px) and (max-width: 1414px) {
  .element {
    margin: 20px 14px 0 14px;
  }
}
@media (min-width: 1386px) and (max-width: 1400px) {
  .element {
    margin: 20px 13px 0 13px;
  }
}
@media (min-width: 1372px) and (max-width: 1386px) {
  .element {
    margin: 20px 12px 0 12px;
  }
}
@media (min-width: 1358px) and (max-width: 1372px) {
  .element {
    margin: 20px 11px 0 11px;
  }
}
@media (min-width: 1344px) and (max-width: 1358px) {
  .element {
    margin: 20px 10px 0 10px;
  }
}
@media (min-width: 1330px) and (max-width: 1344px) {
  .element {
    margin: 20px 9px 0 9px;
  }
}
@media (min-width: 1288px) and (max-width: 1300px) {
  .element {
    margin: 20px 21px 0 21px;
  }
}
@media (min-width: 1276px) and (max-width: 1288px) {
  .element {
    margin: 20px 20px 0 20px;
  }
}
@media (min-width: 1264px) and (max-width: 1276px) {
  .element {
    margin: 20px 19px 0 19px;
  }
}
@media (min-width: 1252px) and (max-width: 1264px) {
  .element {
    margin: 20px 18px 0 18px;
  }
}
@media (min-width: 1240px) and (max-width: 1252px) {
  .element {
    margin: 20px 17px 0 17px;
  }
}
@media (min-width: 1228px) and (max-width: 1240px) {
  .element {
    margin: 20px 16px 0 16px;
  }
}
@media (min-width: 1216px) and (max-width: 1228px) {
  .element {
    margin: 20px 15px 0 15px;
  }
}
@media (min-width: 1204px) and (max-width: 1216px) {
  .element {
    margin: 20px 14px 0 14px;
  }
}
@media (min-width: 1192px) and (max-width: 1204px) {
  .element {
    margin: 20px 13px 0 13px;
  }
}
@media (min-width: 1180px) and (max-width: 1192px) {
  .element {
    margin: 20px 12px 0 12px;
  }
}
@media (min-width: 1168px) and (max-width: 1180px) {
  .element {
    margin: 20px 11px 0 11px;
  }
}
@media (min-width: 1156px) and (max-width: 1168px) {
  .element {
    margin: 20px 10px 0 10px;
  }
}
@media (min-width: 1144px) and (max-width: 1156px) {
  .element {
    margin: 20px 9px 0 9px;
  }
}
@media (min-width: 1102px) and (max-width: 1112px) {
  .element {
    margin: 20px 24px 0 24px;
  }
}
@media (min-width: 1092px) and (max-width: 1102px) {
  .element {
    margin: 20px 23px 0 23px;
  }
}
@media (min-width: 1082px) and (max-width: 1092px) {
  .element {
    margin: 20px 22px 0 22px;
  }
}
@media (min-width: 1072px) and (max-width: 1082px) {
  .element {
    margin: 20px 21px 0 21px;
  }
}
@media (min-width: 1062px) and (max-width: 1072px) {
  .element {
    margin: 20px 20px 0 20px;
  }
}
@media (min-width: 1052px) and (max-width: 1062px) {
  .element {
    margin: 20px 19px 0 19px;
  }
}
@media (min-width: 1042px) and (max-width: 1052px) {
  .element {
    margin: 20px 18px 0 18px;
  }
}
@media (min-width: 1032px) and (max-width: 1042px) {
  .element {
    margin: 20px 17px 0 17px;
  }
}
@media (min-width: 1022px) and (max-width: 1032px) {
  .element {
    margin: 20px 16px 0 16px;
  }
}
@media (min-width: 1012px) and (max-width: 1022px) {
  .element {
    margin: 20px 15px 0 15px;
  }
}
@media (min-width: 1002px) and (max-width: 1012px) {
  .element {
    margin: 20px 14px 0 14px;
  }
}
@media (min-width: 992px) and (max-width: 1002px) {
  .element {
    margin: 20px 13px 0 13px;
  }
}
@media (min-width: 982px) and (max-width: 992px) {
  .element {
    margin: 20px 12px 0 12px;
  }
}
@media (min-width: 972px) and (max-width: 982px) {
  .element {
    margin: 20px 11px 0 11px;
  }
}
@media (min-width: 962px) and (max-width: 972px) {
  .element {
    margin: 20px 10px 0 10px;
  }
}
@media (min-width: 952px) and (max-width: 962px) {
  .element {
    margin: 20px 9px 0 9px;
  }
}
@media (min-width: 920px) and (max-width: 928px) {
  .element {
    margin: 20px 28px 0 28px;
  }
}
@media (min-width: 912px) and (max-width: 920px) {
  .element {
    margin: 20px 27px 0 27px;
  }
}
@media (min-width: 904px) and (max-width: 912px) {
  .element {
    margin: 20px 26px 0 26px;
  }
}
@media (min-width: 896px) and (max-width: 904px) {
  .element {
    margin: 20px 25px 0 25px;
  }
}
@media (min-width: 888px) and (max-width: 896px) {
  .element {
    margin: 20px 24px 0 24px;
  }
}
@media (min-width: 880px) and (max-width: 888px) {
  .element {
    margin: 20px 23px 0 23px;
  }
}
@media (min-width: 872px) and (max-width: 880px) {
  .element {
    margin: 20px 22px 0 22px;
  }
}
@media (min-width: 864px) and (max-width: 872px) {
  .element {
    margin: 20px 21px 0 21px;
  }
}
@media (min-width: 856px) and (max-width: 864px) {
  .element {
    margin: 20px 20px 0 20px;
  }
}
@media (min-width: 848px) and (max-width: 856px) {
  .element {
    margin: 20px 19px 0 19px;
  }
}
@media (min-width: 840px) and (max-width: 848px) {
  .element {
    margin: 20px 18px 0 18px;
  }
}
@media (min-width: 832px) and (max-width: 840px) {
  .element {
    margin: 20px 17px 0 17px;
  }
}
@media (min-width: 824px) and (max-width: 832px) {
  .element {
    margin: 20px 16px 0 16px;
  }
}
@media (min-width: 816px) and (max-width: 824px) {
  .element {
    margin: 20px 15px 0 15px;
  }
}
@media (min-width: 808px) and (max-width: 816px) {
  .element {
    margin: 20px 14px 0 14px;
  }
}
@media (min-width: 800px) and (max-width: 808px) {
  .element {
    margin: 20px 13px 0 13px;
  }
}
@media (min-width: 792px) and (max-width: 800px) {
  .element {
    margin: 20px 12px 0 12px;
  }
}
@media (min-width: 784px) and (max-width: 792px) {
  .element {
    margin: 20px 11px 0 11px;
  }
}
@media (min-width: 776px) and (max-width: 784px) {
  .element {
    margin: 20px 10px 0 10px;
  }
}
@media (min-width: 768px) and (max-width: 776px) {
  .element {
    margin: 20px 9px 0 9px;
  }
}
@media (min-width: 736px) and (max-width: 742px) {
  .element {
    margin: 20px 34px 0 34px;
  }
}
@media (min-width: 730px) and (max-width: 736px) {
  .element {
    margin: 20px 33px 0 33px;
  }
}
@media (min-width: 724px) and (max-width: 730px) {
  .element {
    margin: 20px 32px 0 32px;
  }
}
@media (min-width: 718px) and (max-width: 724px) {
  .element {
    margin: 20px 31px 0 31px;
  }
}
@media (min-width: 712px) and (max-width: 718px) {
  .element {
    margin: 20px 30px 0 30px;
  }
}
@media (min-width: 706px) and (max-width: 712px) {
  .element {
    margin: 20px 29px 0 29px;
  }
}
@media (min-width: 700px) and (max-width: 706px) {
  .element {
    margin: 20px 28px 0 28px;
  }
}
@media (min-width: 694px) and (max-width: 700px) {
  .element {
    margin: 20px 27px 0 27px;
  }
}
@media (min-width: 688px) and (max-width: 694px) {
  .element {
    margin: 20px 26px 0 26px;
  }
}
@media (min-width: 682px) and (max-width: 688px) {
  .element {
    margin: 20px 25px 0 25px;
  }
}
@media (min-width: 676px) and (max-width: 682px) {
  .element {
    margin: 20px 24px 0 24px;
  }
}
@media (min-width: 670px) and (max-width: 676px) {
  .element {
    margin: 20px 23px 0 23px;
  }
}
@media (min-width: 664px) and (max-width: 670px) {
  .element {
    margin: 20px 22px 0 22px;
  }
}
@media (min-width: 658px) and (max-width: 664px) {
  .element {
    margin: 20px 21px 0 21px;
  }
}
@media (min-width: 652px) and (max-width: 658px) {
  .element {
    margin: 20px 20px 0 20px;
  }
}
@media (min-width: 646px) and (max-width: 652px) {
  .element {
    margin: 20px 19px 0 19px;
  }
}
@media (min-width: 640px) and (max-width: 646px) {
  .element {
    margin: 20px 18px 0 18px;
  }
}
@media (min-width: 634px) and (max-width: 640px) {
  .element {
    margin: 20px 17px 0 17px;
  }
}
@media (min-width: 628px) and (max-width: 634px) {
  .element {
    margin: 20px 16px 0 16px;
  }
}
@media (min-width: 622px) and (max-width: 628px) {
  .element {
    margin: 20px 15px 0 15px;
  }
}
@media (min-width: 616px) and (max-width: 622px) {
  .element {
    margin: 20px 14px 0 14px;
  }
}
@media (min-width: 610px) and (max-width: 616px) {
  .element {
    margin: 20px 14px 0 14px;
  }
}
@media (min-width: 604px) and (max-width: 610px) {
  .element {
    margin: 20px 13px 0 13px;
  }
}
@media (min-width: 598px) and (max-width: 604px) {
  .element {
    margin: 20px 12px 0 12px;
  }
}
@media (min-width: 592px) and (max-width: 598px) {
  .element {
    margin: 20px 11px 0 11px;
  }
}
@media (min-width: 586px) and (max-width: 592px) {
  .element {
    margin: 20px 10px 0 10px;
  }
}
@media (min-width: 580px) and (max-width: 586px) {
  .element {
    margin: 20px 9px 0 9px;
  }
}
@media (min-width: 552px) and (max-width: 556px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 17px 0 17px;
  }
}
@media (min-width: 546px) and (max-width: 552px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 16px 0 16px;
  }
}
@media (min-width: 540px) and (max-width: 546px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 15px 0 15px;
  }
}
@media (min-width: 534px) and (max-width: 540px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 14px 0 14px;
  }
}
@media (min-width: 528px) and (max-width: 534px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 13px 0 13px;
  }
}
@media (min-width: 522px) and (max-width: 528px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 12px 0 12px;
  }
}
@media (min-width: 516px) and (max-width: 522px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 11px 0 11px;
  }
}
@media (min-width: 510px) and (max-width: 516px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 10px 0 10px;
  }
}
@media (min-width: 504px) and (max-width: 510px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 9px 0 9px;
  }
}
@media (min-width: 498px) and (max-width: 504px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 8px 0 8px;
  }
}
@media (min-width: 492px) and (max-width: 498px) {
  .element {
    width: 130px;
    height: 220px;
    margin: 20px 7px 0 7px;
  }
}
@media (min-width: 486px) and (max-width: 492px) {
  .element {
    width: 120px;
    height: 200px;
    margin: 20px 12px 0 12px;
  }
  .name {
    line-height: 200%;
  }
}
@media (min-width: 480px) and (max-width: 486px) {
  .element {
    width: 120px;
    height: 200px;
    margin: 20px 11px 0 11px;
  }
  .name {
    line-height: 200%;
  }
}
@media (min-width: 474px) and (max-width: 480px) {
  .element {
    width: 120px;
    height: 200px;
    margin: 20px 10px 0 10px;
  }
  .name {
    line-height: 200%;
  }
}
@media (min-width: 468px) and (max-width: 474px) {
  .element {
    width: 120px;
    height: 200px;
    margin: 20px 9px 0 9px;
  }
  .name {
    line-height: 200%;
  }
}
@media (min-width: 462px) and (max-width: 468px) {
  .element {
    width: 120px;
    height: 200px;
    margin: 20px 8px 0 8px;
  }
  .name {
    line-height: 200%;
  }
}
@media (min-width: 456px) and (max-width: 462px) {
  .element {
    width: 120px;
    height: 200px;
    margin: 20px 7px 0 7px;
  }
  .name {
    line-height: 200%;
  }
}
@media (min-width: 452px) and (max-width: 456px) {
  .element {
    width: 110px;
    height: 180px;
    margin: 20px 12px 0 12px;
  }
  .name {
    line-height: 200%;
  }
}
@media (max-width: 451px) {
  .element {
    width: 90px;
    height: 150px;
    margin: 20px 9px 0 9px;
  }
  .name {
    line-height: 200%;
  }
}
</style>
