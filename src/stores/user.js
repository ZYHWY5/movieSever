import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  let user = ref({
    account:'',
    password:'',
    id:''
  })
  //const doubleCount = computed(() => count.value * 2)
  let login = (account, password, id) => {
    user.value.account = account;
    user.value.password = password;
    user.value.id = id;
  }

  let cancel = () => {
    user.value.account = '';
    user.value.password = '';
    user.value.id = '';
  }

  return { user, login, cancel }
})
