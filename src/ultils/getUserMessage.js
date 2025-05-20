import { ref } from "vue";
import { getUser } from "./getUser";

let getUserMessage = async () => {
  let userList = ref();
  userList.value = await getUser();

  let userMessage = ref();

  for(let item of userList.value){
    if(item.id == localStorage.getItem("id")){
      userMessage.value = item;
      return userMessage.value;
    }
  }

};

export {getUserMessage};
