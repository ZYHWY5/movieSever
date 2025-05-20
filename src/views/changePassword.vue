<script setup>
import { ref } from 'vue';
import { getUserMessage } from '@/ultils/getUserMessage';
import { changeUserMessageOne } from '@/ultils/changeUserMessageOne';

let userMessage = ref();
userMessage.value = await getUserMessage();

let oldPassword = ref();
let newPassword = ref();
let newPasswordConfirm = ref();

let confirm = () => {
  if(oldPassword.value == undefined || oldPassword.value == '' || newPassword.value == undefined || newPassword.value == '' || newPasswordConfirm.value == undefined || newPasswordConfirm.value == ''){
    alert('有输入框为空');
    return;
  }
  if(oldPassword.value != userMessage.value.password){
    alert('旧密码错误');
    return;
  }
  if(newPassword.value != newPasswordConfirm.value){
    alert('两次输入的新密码不同');
    return;
  }
  changeUserMessageOne({password:newPassword.value});
}
</script>

<template>
  <div class="bg">
    <div class="oldPassword">
      <input v-model="oldPassword" type="password" name="" id="" placeholder="请输入旧密码">
    </div>
    <div class="oldPassword newPassword">
      <input v-model="newPassword" type="password" name="" id="" placeholder="请输入新密码">
    </div>
    <div class="oldPassword newPasswordConfirm">
      <input v-model="newPasswordConfirm" type="password" name="" id="" placeholder="请再次输入新密码">
    </div>
    <div class="confirm_button">
      <button @click="confirm">确认修改</button>
    </div>
  </div>
</template>

<style scoped>
.bg{
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
.oldPassword{
  width: 240px;
  height: 36px;
  border: 1px solid #b1b1b1;
  border-radius: 8px;
  margin: 0 0 10px 0;
}
.oldPassword>input{
  width: 95%;
  height: 24px;
  vertical-align: top;
  margin: 6.5px 0 0 0;
  font-size: 16px;
  padding: 0 0 0 10px;
  border: none;
}
.confirm_button>button{
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
.confirm_button>button:hover{
  background-color: red;
}
</style>
