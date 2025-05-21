import {ref} from 'vue';
import axios from "axios";
import { getUser } from "./getUser";
import router from '../router/index.js';

let user = ref();
user.value = await getUser();

let post = (account, password) => {
  let userInfo = {
    account:account,
    password:password
  }
  let isallow = true;
  for(let item of user.value){
    if(item.account == account){
      alert('账号已存在');
      isallow == false;
      return;
    }
  }
  if(isallow){
    axios.post('/api/user', {
      account:account,
      password:password,
      name:'系统名称'
    });
    alert('注册成功');
    router.push({
      path:'/',
      query:userInfo
    })
  }
}

export {post};