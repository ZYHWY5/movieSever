<script setup>
import {ref} from 'vue';
import Nav from "@/components/nav.vue";
import { useRoute } from "vue-router";
import {wordSplit} from '../ultils/wordSplit.js';
import verticalLine from '../assess/icon/verticalLine.svg';
import toTop from "../assess/icon/toTop.svg";

let route = useRoute();

let item = ref();
item.value = JSON.parse(route.query.data);

let newItem = ref();
newItem.value = wordSplit(item.value);

let top = () => {
  document.documentElement.scrollTop = 0;
  window.pageYOffset = 0; // 兼容iOS
  document.body.scrollTop = 0; // 兼容低版本IE
  scrollTop.value = 0;
};
//初始化
document.documentElement.scrollTop = 0;

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
    <div class="nav">
      <Nav></Nav>
    </div>
    <div class="content">
      <div class="content_flex">
        <div class="content_flex_left">
          <div class="content_flex_left_img">
            <img :src="newItem.src" alt="">
          </div>
          <div class="content_flex_left_about">
            <ul>
              <li class="type" v-for="(about, key) of newItem.about" :key="about">
                <span>{{ key }}</span>
                <p>{{ about }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="content_flex_right">
          <div class="name">
            <verticalLine class="line"/>
            <p>{{ item.name }}</p>
          </div>
          <div class="details">
            <ul class="details_ul">
              <li class="details_ul_li" v-for="(details, key) of newItem.details" :key="details">
                <div class="element">
                  <div class="title">
                    <verticalLine class="line"/>
                    <p>{{ key }}</p>
                  </div>
                  <ul class="inner">
                    <li class="inner_li" v-for="words in details" :key="words">
                      <span>{{ words }}</span>
                    </li>
                    <!-- <span>{{ details }}</span> -->
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div :class="{toTop:1, isshow:scrollTop >= 100}">
      <toTop @click="top" class="toTop_svg" />
    </div>
  </div>
</template>

<style scoped>
.bg {
  width: 100vw;
}
.content {
  width: 90%;
  margin: 20px auto 0 auto;
}
.content_flex{
  display: flex;
  justify-content: space-between;
}
.content_flex_left{
  width: 195px;
  height: 560px;
  display: flex;
  flex-wrap: wrap;
}
.content_flex_left_img{
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 10px;
}
.content_flex_left_img>img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content_flex_left_about{
  width: 100%;
  height: 240px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
}
.type{
  width: 80%;
  height: 20%;
  margin: 12px auto 12px auto;
  overflow: hidden;
}
.type>span{
  display: block;
  font-size: 12px;
  color: #7B8690;
}
.type>p{
  font-size: 16px;
  padding-top: 5px;
}
.content_flex_right{
  width: 1100px;
}
.name{
  width: 100%;
  background-color: white;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
}
.line{
  margin: 5px 0 0 10px;
}
.name>p{
  padding: 10px 0 10px 0;
}
.details{
  width: 100%;
}
.details_ul{
  width: 100%;
}
.details_ul_li{
  width: 100%;
}
.element{
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin: 20px auto 20px auto;
}
.inner{
  font-size: 13px;
  width: 95%;
  border-top: 1px solid #ccc;
  margin: auto;
}
.inner_li>span{
  display: block;
  width: 100%;
  color: #546173;
  padding: 5px 0 5px 0;
}
.title{
  display: flex;
}
.title>p{
  font-size: 16px;
  font-weight: 600;
  padding: 10px 0 10px 0;
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

@media (min-width:1480px) and (max-width:1490px){
  .content_flex_right{
    width: 1090px;
  }
}
@media (min-width:1470px) and (max-width:1480px){
  .content_flex_right{
    width: 1080px;
  }
}
@media (min-width:1460px) and (max-width:1470px){
  .content_flex_right{
    width: 1070px;
  }
}
@media (min-width:1450px) and (max-width:1460px){
  .content_flex_right{
    width: 1060px;
  }
}
@media (min-width:1440px) and (max-width:1450px){
  .content_flex_right{
    width: 1050px;
  }
}
@media (min-width:1430px) and (max-width:1440px){
  .content_flex_right{
    width: 1040px;
  }
}
@media (min-width:1420px) and (max-width:1430px){
  .content_flex_right{
    width: 1030px;
  }
}
@media (min-width:1410px) and (max-width:1420px){
  .content_flex_right{
    width: 1020px;
  }
}
@media (min-width:1400px) and (max-width:1410px){
  .content_flex_right{
    width: 1010px;
  }
}
@media (min-width:1390px) and (max-width:1400px){
  .content_flex_right{
    width: 1000px;
  }
}
@media (min-width:1380px) and (max-width:1390px){
  .content_flex_right{
    width: 990px;
  }
}
@media (min-width:1370px) and (max-width:1380px){
  .content_flex_right{
    width: 980px;
  }
}
@media (min-width:1360px) and (max-width:1370px){
  .content_flex_right{
    width: 970px;
  }
}
@media (min-width:1350px) and (max-width:1360px){
  .content_flex_right{
    width: 960px;
  }
}
@media (min-width:1340px) and (max-width:1350px){
  .content_flex_right{
    width: 950px;
  }
}
@media (min-width:1330px) and (max-width:1340px){
  .content_flex_right{
    width: 940px;
  }
}
@media (min-width:1320px) and (max-width:1330px){
  .content_flex_right{
    width: 930px;
  }
}
@media (min-width:1310px) and (max-width:1320px){
  .content_flex_right{
    width: 920px;
  }
}
@media (min-width:1300px) and (max-width:1310px){
  .content_flex_right{
    width: 910px;
  }
}
@media (min-width:1290px) and (max-width:1300px){
  .content_flex_right{
    width: 900px;
  }
}
@media (min-width:1280px) and (max-width:1290px){
  .content_flex_right{
    width: 890px;
  }
}
@media (min-width:1270px) and (max-width:1280px){
  .content_flex_right{
    width: 880px;
  }
}
@media (min-width:1260px) and (max-width:1270px){
  .content_flex_right{
    width: 870px;
  }
}
@media (min-width:1250px) and (max-width:1260px){
  .content_flex_right{
    width: 860px;
  }
}
@media (min-width:1240px) and (max-width:1250px){
  .content_flex_right{
    width: 850px;
  }
}
@media (min-width:1230px) and (max-width:1240px){
  .content_flex_right{
    width: 840px;
  }
}
@media (min-width:1220px) and (max-width:1230px){
  .content_flex_right{
    width: 930px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1210px) and (max-width:1220px){
  .content_flex_right{
    width: 920px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1200px) and (max-width:1210px){
  .content_flex_right{
    width: 910px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1190px) and (max-width:1200px){
  .content_flex_right{
    width: 900px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1180px) and (max-width:1190px){
  .content_flex_right{
    width: 890px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1170px) and (max-width:1180px){
  .content_flex_right{
    width: 880px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1160px) and (max-width:1170px){
  .content_flex_right{
    width: 870px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1150px) and (max-width:1160px){
  .content_flex_right{
    width: 860px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1140px) and (max-width:1150px){
  .content_flex_right{
    width: 850px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1130px) and (max-width:1140px){
  .content_flex_right{
    width: 840px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1120px) and (max-width:1130px){
  .content_flex_right{
    width: 830px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1110px) and (max-width:1120px){
  .content_flex_right{
    width: 820px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1100px) and (max-width:1110px){
  .content_flex_right{
    width: 810px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1090px) and (max-width:1100px){
  .content_flex_right{
    width: 800px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1080px) and (max-width:1090px){
  .content_flex_right{
    width: 790px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1070px) and (max-width:1080px){
  .content_flex_right{
    width: 780px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1060px) and (max-width:1070px){
  .content_flex_right{
    width: 770px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1050px) and (max-width:1060px){
  .content_flex_right{
    width: 760px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1040px) and (max-width:1050px){
  .content_flex_right{
    width: 750px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1030px) and (max-width:1040px){
  .content_flex_right{
    width: 740px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1020px) and (max-width:1030px){
  .content_flex_right{
    width: 730px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1010px) and (max-width:1020px){
  .content_flex_right{
    width: 720px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:1000px) and (max-width:1010px){
  .content_flex_right{
    width: 710px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:990px) and (max-width:1000px){
  .content_flex_right{
    width: 700px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:980px) and (max-width:990px){
  .content_flex_right{
    width: 690px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:970px) and (max-width:980px){
  .content_flex_right{
    width: 685px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:960px) and (max-width:970px){
  .content_flex_right{
    width: 675px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:950px) and (max-width:960px){
  .content_flex_right{
    width: 665px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:940px) and (max-width:950px){
  .content_flex_right{
    width: 655px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:930px) and (max-width:940px){
  .content_flex_right{
    width: 645px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:920px) and (max-width:930px){
  .content_flex_right{
    width: 635px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:910px) and (max-width:920px){
  .content_flex_right{
    width: 625px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:900px) and (max-width:910px){
  .content_flex_right{
    width: 615px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:890px) and (max-width:900px){
  .content_flex_right{
    width: 605px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:880px) and (max-width:890px){
  .content_flex_right{
    width: 595px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:870px) and (max-width:880px){
  .content_flex_right{
    width: 585px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:860px) and (max-width:870px){
  .content_flex_right{
    width: 580px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:850px) and (max-width:860px){
  .content_flex_right{
    width: 570px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:840px) and (max-width:850px){
  .content_flex_right{
    width: 560px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:830px) and (max-width:840px){
  .content_flex_right{
    width: 550px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:820px) and (max-width:830px){
  .content_flex_right{
    width: 540px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:810px) and (max-width:820px){
  .content_flex_right{
    width: 530px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:800px) and (max-width:810px){
  .content_flex_right{
    width: 520px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:790px) and (max-width:800px){
  .content_flex_right{
    width: 520px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:780px) and (max-width:790px){
  .content_flex_right{
    width: 510px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:770px) and (max-width:780px){
  .content_flex_right{
    width: 500px;
  }
  .content {
  width: 95%;
  }
}
@media (min-width:730px) and (max-width:770px){
  .content_flex{
    display: block;
  }
  .content_flex_left{
    width: 100%;
    height: 100%;
    margin: 0 0 20px 0;
    flex-wrap: nowrap;
  }
  .content_flex_right{
    width: 100%;
  }
  .content {
    width: 95%;
  }
  .content_flex_left_img{
    width: 230px;
    height: 320px;
  }
  .content_flex_left_about{
    width: 500px;
    height: 260px;
    margin: 0 0 0 20px;
  }
  .type{
    width: 90%;
    margin: 15px auto 15px auto;
  }
}
@media (min-width:690px) and (max-width:730px){
  .content_flex{
    display: block;
  }
  .content_flex_left{
    width: 100%;
    height: 100%;
    margin: 0 0 20px 0;
    flex-wrap: nowrap;
  }
  .content_flex_right{
    width: 100%;
  }
  .content {
    width: 95%;
  }
  .content_flex_left_img{
    width: 230px;
    height: 320px;
  }
  .content_flex_left_about{
    width: 460px;
    height: 260px;
    margin: 0 0 0 20px;
  }
  .type{
    width: 90%;
    margin: 15px auto 15px auto;
  }
}
@media (min-width:650px) and (max-width:690px){
  .content_flex{
    display: block;
  }
  .content_flex_left{
    width: 100%;
    height: 100%;
    margin: 0 0 20px 0;
    flex-wrap: nowrap;
  }
  .content_flex_right{
    width: 100%;
  }
  .content {
    width: 95%;
  }
  .content_flex_left_img{
    width: 230px;
    height: 320px;
  }
  .content_flex_left_about{
    width: 420px;
    height: 260px;
    margin: 0 0 0 20px;
  }
  .type{
    width: 90%;
    margin: 15px auto 15px auto;
  }
}
@media (min-width:610px) and (max-width:650px){
  .content_flex{
    display: block;
  }
  .content_flex_left{
    width: 100%;
    height: 100%;
    margin: 0 0 20px 0;
    flex-wrap: nowrap;
  }
  .content_flex_right{
    width: 100%;
  }
  .content {
    width: 95%;
  }
  .content_flex_left_img{
    width: 230px;
    height: 320px;
  }
  .content_flex_left_about{
    width: 380px;
    height: 260px;
    margin: 0 0 0 20px;
  }
  .type{
    width: 90%;
    margin: 15px auto 15px auto;
  }
}
@media (min-width:570px) and (max-width:610px){
  .content_flex{
    display: block;
  }
  .content_flex_left{
    width: 100%;
    height: 100%;
    margin: 0 0 20px 0;
    flex-wrap: nowrap;
  }
  .content_flex_right{
    width: 100%;
  }
  .content {
    width: 95%;
  }
  .content_flex_left_img{
    width: 230px;
    height: 320px;
  }
  .content_flex_left_about{
    width: 340px;
    height: 260px;
    margin: 0 0 0 20px;
  }
  .type{
    width: 90%;
    margin: 15px auto 15px auto;
  }
}
@media (min-width:530px) and (max-width:570px){
  .content_flex{
    display: block;
  }
  .content_flex_left{
    width: 100%;
    height: 100%;
    margin: 0 0 20px 0;
    flex-wrap: nowrap;
  }
  .content_flex_right{
    width: 100%;
  }
  .content {
    width: 95%;
  }
  .content_flex_left_img{
    width: 230px;
    height: 320px;
  }
  .content_flex_left_about{
    width: 300px;
    height: 260px;
    margin: 0 0 0 20px;
  }
  .type{
    width: 90%;
    margin: 15px auto 15px auto;
  }
}
@media (min-width:490px) and (max-width:530px){
  .content_flex{
    display: block;
  }
  .content_flex_left{
    width: 100%;
    height: 100%;
    margin: 0 0 20px 0;
    flex-wrap: nowrap;
  }
  .content_flex_right{
    width: 100%;
  }
  .content {
    width: 95%;
  }
  .content_flex_left_img{
    width: 210px;
    height: 300px;
  }
  .content_flex_left_about{
    width: 260px;
    height: 260px;
    margin: 0 0 0 20px;
  }
  .type{
    width: 90%;
    margin: 15px auto 15px auto;
  }
}
@media (min-width:0px) and (max-width:490px){
  .content_flex{
    display: block;
  }
  .content_flex_left{
    width: 100%;
    height: 100%;
    margin: 0 0 20px 0;
    flex-wrap: nowrap;
  }
  .content_flex_right{
    width: 100%;
  }
  .content {
    width: 95%;
  }
  .content_flex_left_img{
    width: 200px;
    height: 270px;
  }
  .content_flex_left_about{
    width: 250px;
    height: 260px;
    margin: 0 0 0 20px;
  }
  .type{
    width: 90%;
    margin: 15px auto 15px auto;
  }
}
</style>
