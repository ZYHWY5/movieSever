<script setup>
import { ref } from "vue";
import Nav from "@/components/nav.vue";
import verticalLine from "../assess/icon/verticalLine.svg";
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";

let router = useRouter();
//默认跳转个人信息
router.push("/message");

let funList = ref();
funList.value = [
  {
    name: "个人信息",
    path: "/message",
  },
  {
    name: "修改密码",
    path: "/password",
  },
];

let title = ref();
title.value = "个人信息";

let jump = (item) => {
  router.push(item.path);
  title.value = item.name;
};
</script>

<template>
  <div class="bg">
    <div class="nav">
      <Nav></Nav>
    </div>
    <div class="content">
      <div class="content_left">
        <ul>
          <li
            :class="{ active: title == item.name }"
            @click="jump(item)"
            v-for="item in funList"
            :key="item"
          >
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <div class="content_right">
        <div class="title">
          <div class="title_content">
            <verticalLine class="title_svg" />
            <p>{{ title }}</p>
          </div>
        </div>
        <div class="compoment">
          <div class="compoment_content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 90%;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: space-between;
}
.content_left {
  width: 200px;
  height: 650px;
  background-color: white;
  margin: 20px 0 0 0;
  border-radius: 10px;
}
.content_left > ul {
  width: 100%;
  height: 100%;
  padding: 20px 0 20px 0;
}
.content_left > ul > li {
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  transition: all, 0.2s;
  cursor: pointer;
}
.content_left > ul > li:hover {
  color: blueviolet;
}
.active {
  color: blueviolet;
}

.content_right {
  width: 1120px;
}
.title {
  width: 100%;
  height: 36px;
  background-color: white;
  margin: 20px 0 0 0;
  border-radius: 10px;
}
.title_content {
  width: 98%;
  margin: auto;
  display: flex;
}
.title_content > p {
  font-size: 16px;
  line-height: 36px;
  font-weight: 600;
}
.title_svg {
  margin: 2px 0 0 0;
}
.compoment {
  width: 100%;
  height: 595px;
  background-color: white;
  border-radius: 10px;
  margin: 20px 0 0 0;
}
.compoment_content {
  width: 95%;
  height: 95%;
  margin: 0 auto 0 auto;
  padding: 15px 0 0 0;
}

@media (min-width: 1480px) and (max-width: 1490px) {
  .content_right {
    width: 1110px;
  }
}
@media (min-width: 1470px) and (max-width: 1480px) {
  .content_right {
    width: 1100px;
  }
}
@media (min-width: 1460px) and (max-width: 1470px) {
  .content_right {
    width: 1090px;
  }
}
@media (min-width: 1450px) and (max-width: 1460px) {
  .content_right {
    width: 1080px;
  }
}
@media (min-width: 1440px) and (max-width: 1450px) {
  .content_right {
    width: 1070px;
  }
}
@media (min-width: 1430px) and (max-width: 1440px) {
  .content_right {
    width: 1060px;
  }
}
@media (min-width: 1420px) and (max-width: 1430px) {
  .content_right {
    width: 1050px;
  }
}
@media (min-width: 1410px) and (max-width: 1420px) {
  .content_right {
    width: 1040px;
  }
}
@media (min-width: 1400px) and (max-width: 1410px) {
  .content_right {
    width: 1030px;
  }
}
@media (min-width: 1390px) and (max-width: 1400px) {
  .content_right {
    width: 1020px;
  }
}
@media (min-width: 1380px) and (max-width: 1390px) {
  .content_right {
    width: 1010px;
  }
}
@media (min-width: 1370px) and (max-width: 1380px) {
  .content_right {
    width: 1000px;
  }
}
@media (min-width: 1360px) and (max-width: 1370px) {
  .content_right {
    width: 990px;
  }
}
@media (min-width: 1350px) and (max-width: 1360px) {
  .content_right {
    width: 980px;
  }
}
@media (min-width: 1340px) and (max-width: 1350px) {
  .content_right {
    width: 970px;
  }
}
@media (min-width: 1330px) and (max-width: 1340px) {
  .content_right {
    width: 960px;
  }
}
@media (min-width: 1320px) and (max-width: 1330px) {
  .content_right {
    width: 950px;
  }
}
@media (min-width: 1310px) and (max-width: 1320px) {
  .content_right {
    width: 940px;
  }
}
@media (min-width: 1300px) and (max-width: 1310px) {
  .content_right {
    width: 930px;
  }
}
@media (min-width: 1290px) and (max-width: 1300px) {
  .content_right {
    width: 920px;
  }
}
@media (min-width: 1280px) and (max-width: 1290px) {
  .content_right {
    width: 910px;
  }
}
@media (min-width: 1270px) and (max-width: 1280px) {
  .content_right {
    width: 900px;
  }
}
@media (min-width: 1260px) and (max-width: 1270px) {
  .content_right {
    width: 890px;
  }
}
@media (min-width: 1250px) and (max-width: 1260px) {
  .content_right {
    width: 880px;
  }
}
@media (min-width: 1240px) and (max-width: 1250px) {
  .content_right {
    width: 870px;
  }
}
@media (min-width: 1230px) and (max-width: 1240px) {
  .content_right {
    width: 860px;
  }
}
@media (min-width: 1220px) and (max-width: 1230px) {
  .content_right {
    width: 850px;
  }
}
@media (min-width: 1210px) and (max-width: 1220px) {
  .content_right {
    width: 840px;
  }
}
@media (min-width: 1200px) and (max-width: 1210px) {
  .content_right {
    width: 830px;
  }
}
@media (min-width: 1190px) and (max-width: 1200px) {
  .content_right {
    width: 820px;
  }
}
@media (min-width: 1180px) and (max-width: 1190px) {
  .content_right {
    width: 810px;
  }
}
@media (min-width: 1170px) and (max-width: 1180px) {
  .content_right {
    width: 800px;
  }
}
@media (min-width: 1160px) and (max-width: 1170px) {
  .content_right {
    width: 800px;
  }
}
@media (min-width: 1150px) and (max-width: 1160px) {
  .content_right {
    width: 790px;
  }
}
@media (min-width: 1140px) and (max-width: 1150px) {
  .content_right {
    width: 780px;
  }
}
@media (min-width: 1130px) and (max-width: 1140px) {
  .content_right {
    width: 780px;
  }
}
@media (min-width: 1110px) and (max-width: 1130px) {
  .content_right {
    width: 770px;
  }
}
@media (min-width: 1090px) and (max-width: 1110px) {
  .content_right {
    width: 760px;
  }
}
@media (min-width: 1070px) and (max-width: 1090px) {
  .content_right {
    width: 750px;
  }
}
@media (min-width: 1060px) and (max-width: 1070px) {
  .content_right {
    width: 740px;
  }
}
@media (min-width: 1050px) and (max-width: 1060px) {
  .content_right {
    width: 730px;
  }
}
@media (min-width: 1040px) and (max-width: 1050px) {
  .content_right {
    width: 720px;
  }
}
@media (min-width: 1030px) and (max-width: 1040px) {
  .content_right {
    width: 710px;
  }
}
@media (min-width: 1020px) and (max-width: 1030px) {
  .content_right {
    width: 700px;
  }
}
@media (min-width: 1010px) and (max-width: 1020px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 750px;
  }
}
@media (min-width: 1000px) and (max-width: 1010px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 740px;
  }
}
@media (min-width: 990px) and (max-width: 1000px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 730px;
  }
}
@media (min-width: 980px) and (max-width: 990px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 720px;
  }
}
@media (min-width: 970px) and (max-width: 980px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 710px;
  }
}
@media (min-width: 960px) and (max-width: 970px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 700px;
  }
}
@media (min-width: 950px) and (max-width: 960px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 690px;
  }
}
@media (min-width: 940px) and (max-width: 950px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 680px;
  }
}
@media (min-width: 930px) and (max-width: 940px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 670px;
  }
}
@media (min-width: 920px) and (max-width: 930px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 660px;
  }
}
@media (min-width: 910px) and (max-width: 920px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 650px;
  }
}
@media (min-width: 900px) and (max-width: 910px) {
  .content{
    width: 95%;
  }
  .content_right {
    width: 640px;
  }
}
@media (min-width: 890px) and (max-width: 900px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 680px;
  }
}
@media (min-width: 880px) and (max-width: 890px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 670px;
  }
}
@media (min-width: 870px) and (max-width: 880px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 660px;
  }
}
@media (min-width: 860px) and (max-width: 870px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 650px;
  }
}
@media (min-width: 850px) and (max-width: 860px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 640px;
  }
}
@media (min-width: 840px) and (max-width: 850px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 630px;
  }
}
@media (min-width: 830px) and (max-width: 840px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 620px;
  }
}
@media (min-width: 820px) and (max-width: 830px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 610px;
  }
}
@media (min-width: 810px) and (max-width: 820px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 600px;
  }
}
@media (min-width: 800px) and (max-width: 810px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 150px;
  }
  .content_right {
    width: 590px;
  }
}
@media (min-width: 790px) and (max-width: 800px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 630px;
  }
}
@media (min-width: 780px) and (max-width: 790px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 620px;
  }
}
@media (min-width: 770px) and (max-width: 780px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 610px;
  }
}
@media (min-width: 760px) and (max-width: 770px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 600px;
  }
}
@media (min-width: 750px) and (max-width: 760px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 590px;
  }
}
@media (min-width: 740px) and (max-width: 750px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 580px;
  }
}
@media (min-width: 730px) and (max-width: 740px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 570px;
  }
}
@media (min-width: 720px) and (max-width: 730px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 560px;
  }
}
@media (min-width: 710px) and (max-width: 720px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 550px;
  }
}
@media (min-width: 700px) and (max-width: 710px) {
  .content{
    width: 95%;
  }
  .content_left{
    width: 100px;
  }
  .content_right {
    width: 540px;
  }
}
@media (min-width: 0) and (max-width: 700px) {
  .content{
    width: 95%;
    display: block;
  }
  .content_left{
    width: 100%;
    height: 36px;
  }
  .content_left > ul{
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .content_right {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
