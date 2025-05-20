import { ref } from 'vue';
import axios from "axios";

let changeUserMessageOne = (newName) => {
  let id = ref();
  id.value = localStorage.getItem('id');

  axios.patch(`https://365b02ce-b845-4125-b13d-c4a087c1497a.mock.pstmn.io/user/${id.value}`, newName).then((response) => {
    window.location.reload();
    alert('数据修改成功');
  }).catch(err => {
    console.log(err.message)
    alert('修改时出现错误,请稍后重试');
    return;
  })
}

export {changeUserMessageOne};