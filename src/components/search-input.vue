<script setup>
import { ref } from "vue";
import { search } from "@/ultils/search";

let content = ref("");

let post = () => {
  if (content.value == "") {
    alert("请先输入你想搜索的电影、关键词");
    return;
  }
  search(content.value);
};
</script>

<template>
  <div class="bg-search">
    <div class="boder">
      <input @keyup.enter="post" v-model.lazy="content" type="text" placeholder="搜索电影、关键词" />
    </div>
    <button @click="post" class="btn">搜索</button>
  </div>
</template>

<style scoped>
.bg-search {
  width: 90vw;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  margin: auto;
  transform: translateY(20px);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  display: flex;
}
.boder {
  width: 90%;
  height: 30px;
  margin-left: 10px;
  border-radius: 10px;
  transform: translateY(4px);
  border: 2px solid rgba(255, 192, 203, 0);
  font-size: 20px;
  overflow: hidden;
}
.boder > input {
  width: 100%;
  height: 30px;
  border: none;
  margin-left: 15px;
  border-radius: 10px;
  font-size: 20px;
  overflow: hidden;
}
.boder:focus-within {
  transition: all, 0.2s;
  border: 2px solid rgba(255, 192, 203, 1);
}
.btn {
  width: 80px;
  height: 30px;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 15px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: white;
  background-color: rgb(160, 87, 227);
}
.btn:hover {
  transition: all, 0.2s;
  background-color: blueviolet;
}


@media (max-width:1280px){
  .boder{
    width: 89%;
  }
}
@media (max-width:1165px){
  .boder{
    width: 88%;
  }
}
@media (max-width:1065px){
  .boder{
    width: 87%;
  }
}
@media (max-width:975px){
  .boder{
    width: 86%;
  }
}
@media (max-width:900px){
  .boder{
    width: 85%;
  }
}
@media (max-width:845px){
  .boder{
    width: 84%;
  }
}
@media (max-width:790px){
  .boder{
    width: 83%;
  }
}
@media (max-width:735px){
  .boder{
    width: 82%;
  }
}
@media (max-width:695px){
  .boder{
    width: 81%;
  }
}
@media (max-width:650px){
  .boder{
    width: 80%;
  }
}
@media (max-width:620px){
  .boder{
    width: 79%;
  }
  .btn{
    margin-left: 10px;
  }
}
@media (max-width:570px){
  .boder{
    width: 78%;
  }
  .btn{
    margin-left: 10px;
  }
}
@media (max-width:540px){
  .boder{
    width: 77%;
  }
  .btn{
    margin-left: 10px;
  }
}
@media (max-width:510px){
  .boder{
    width: 76%;
  }
  .btn{
    margin-left: 5px;
  }
}
@media (max-width:470px){
  .boder{
    width: 75%;
  }
  .btn{
    margin-left: 5px;
  }
}
@media (max-width:451px){
  .boder{
    width: 70%;
  }
  .btn{
    margin-left: 5%;
  }
}
</style>
