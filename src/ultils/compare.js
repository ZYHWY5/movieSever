import { ref } from "vue";
import { getUser } from "./getUser";
import router from '../router/index.js';
import { useUserStore } from "@/stores/user.js";

let userStore = useUserStore();

let user = ref();
// user.value = await getUser();

let compare = async (account, password) => {

  if(account == '' || password == '' || account == undefined || password == undefined){
    alert('请输入账号和密码');
    return;
  }

  user.value = await getUser();

  for (let item of user.value) {
    let count = 0;
    if (item.account == account) {
      if (item.password == password) {
        userStore.login(item.account, item.password, item.id);
        localStorage.setItem('id', item.id);
        alert("登录成功");
        router.push('/home');
      } else {
        alert("密码错误");
        return;
      }
    } else {
      count++;
    }
    if(count == user.value.length){
      count = 0;
      alert("账号不存在");
      return;
    }
  }
};

export { compare };
