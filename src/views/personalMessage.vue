<script setup>
import { ref } from 'vue';
import { getUserMessage } from '@/ultils/getUserMessage.js';
import { signOut } from '../ultils/signOut.js';
import { changeUserMessageOne } from '../ultils/changeUserMessageOne.js';

let userMessage = ref();
userMessage.value = await getUserMessage();

let isshow = ref(false);
let show = () => {
  isshow.value = !isshow.value;
}

let newName = ref();

let changeName = () => {
  if(newName.value == undefined || newName.value == ''){
    alert('新昵称不能为空');
    return;
  }
  changeUserMessageOne({name:newName.value});
}
</script>

<template>
  <div class="bg">
    <div class="userImg">
      <p>用户头像</p>
      <div class="userImg_img">
        <img :src="userMessage.src = 'https://img-bsy.txrpic.com/Element/00/88/63/12/549f4792_E886312_4b2c4691XZ.png?imageMogr2/quality/90/thumbnail/320x%3E'" alt="">
      </div>
    </div>
    <div class="userImg userName">
      <p>用户昵称</p>
      <div class="userName_content">
        <span>{{ userMessage.name }}</span>
        <button :class="{userName_content_button:isshow}" @click="show">修改昵称</button>
      </div>
      <div :class="{change:1, change_active:isshow}">
        <input v-model="newName" :class="{change_input:1, iuput_active:isshow}" type="text" placeholder="请输入新的昵称">
        <button @click="changeName()" :class="{change_button:1, button_active:isshow}">确定</button>
      </div>
    </div>
    <div class="userImg changeUser">
      <p>切换用户</p>
      <button @click="signOut" class="changeUser_button">退出登录</button>
    </div>
  </div>
</template>

<style scoped>
.bg{
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
.userImg{
  width: 100%;
}
.userImg>p{
  height: 36px;
  line-height: 36px;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.userImg_img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid black;
  overflow: hidden;
  margin: 5px 0 0 0;
}
.userImg_img>img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.userName_content{
  display: flex;
}
.userName_content>span{
  display: block;
  font-size: 18px;
  font-weight: 600;
  height: 36px;
  line-height: 36px;
}
.userName_content>button{
  width: 80px;
  height: 30px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  margin: 6px 0 0 10px;
  transition: all, 0.2s;
}
.userName_content_button{
  background-color: blueviolet;
  color: white;
}
.userName_content>button:hover{
  background-color: blueviolet;
  color: white;
}
.change{
  width: 0;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0);
  margin: 5px 0 0 0;
  border-radius: 8px;
  transition: all, 0.2s;
  display: flex;
  opacity: 0;
}
.change_active{
  width: 190px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 1;
}
.change_input{
  width: 0;
  height: 24px;
  font-size: 16px;
  font-weight: 600;
  vertical-align: top;
  border: none;
  border-radius: 8px;
  margin: 6px 0 0 8px;
  padding: 0 0 0 5px;
  transition: all, 0.2s;
  opacity: 0;
}
.iuput_active{
  width: 120px;
  opacity: 1;
}
.change_button{
  width: 40px;
  height: 24px;
  margin: 6px 0 0 5px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  transition: all, 0.2s;
  display: none;
}
.button_active{
  display: block;
}
.change_button:hover{
  background-color: blueviolet;
  color: white;
}
.changeUser_button{
  width: 80px;
  height: 32px;
  margin: 5px 0 0 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
  border: none;
  border-radius: 8px;
  background-color: rgb(246, 87, 87);
  color: white;
  transition: all, 0.2s;
}
.changeUser_button:hover{
  background-color: red;
}
</style>
