<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import {post} from '../ultils/post.js';

let router = useRouter();
let tologin = () => {
  router.push('/');
}

let account = ref("");
let password = ref("");

let register = () => {
  if (account.value == "" || password.value == "") {
    alert("账号或密码为空");
    return;
  }
  post(account.value, password.value);
}
</script>

<template>
  <div class="bg">
    <div class="form">
      <div class="login-words">
        <p>注册</p>
      </div>
      <div class="account">
        <div class="account-box">
          <input v-model.lazy="account" type="text" placeholder="请输入账号">
        </div>
      </div>
      <div class="account password">
        <div class="account-box">
          <input v-model.lazy="password" type="password" placeholder="请输入密码">
        </div>
      </div>
      <div class="buttom">
        <button @click="register">注册</button>
      </div>
      <div class="jump">
        <p>已有账号?<span @click="tologin" class="register">前往登录</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(
    -135deg,
    #3778e5,
    #e98bc0,
    #3778e5,
    #e98bc0,
    #3778e5
  );
  background-size: 200% 100%;
  animation: hueRotate 5s infinite ease-in-out;
}
@keyframes hueRotate {
  100% {
    /*旋转颜色*/
    filter: hue-rotate(360deg);
  }
}
.form{
  display: block;
  width: 300px;
  height: 300px;
  /*半透明背景*/
  background-color: rgba(255, 255, 255, 0.4);
  /*背景模糊 使用backdrop会使容器背后的背景模糊 不会使容器内模糊*/
  backdrop-filter: blur(50px) saturate(180%);
  -webkit-backdrop-filter: blur(50px) saturate(180%);
  /*添加阴影*/
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(200px);
  overflow: hidden;
}
.login-words{
  width: 90%;
  height: 45px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: #eee 1px solid;
}
.login-words>p{
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0 0 0px;
}
.account{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.account-box{
  width: 100%;
  height: 36px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  margin-top: 5px;
}
.account-box>input{
  border: none;
  width: 95%;
  height: 36px;
  vertical-align: top;
  margin-left: 5%;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0);
  color: #6b6b6b;
}
.buttom{
  width: 90%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-bottom: #eee 1px solid;
}
.buttom>button{
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: #6d6d6d;
  background-color: rgba(255, 255, 255, 0.5);
}
.buttom>button:hover{
  transition: all, 0.2s;
  background-color: rgba(255, 255, 255, 1);
}
.jump{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  color: #5c5c5c;
}
.register{
  cursor: pointer;
  color: white;
}
</style>
