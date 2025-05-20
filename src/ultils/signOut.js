import router from "../router/index.js";
import { useUserStore } from "@/stores/user.js";

let userStore = useUserStore();

let signOut = () => {
  localStorage.removeItem("id");
  userStore.cancel();
  router.push("/");
};

export { signOut };
