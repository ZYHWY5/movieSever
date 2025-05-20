import {ref} from 'vue';
import router from "@/router/index.js";
import { getMovie } from "./getMovie";
import { emitter } from './mitt';

let movieList = ref();
//movieList.value = await getMovie();

let search = async (content) => {
  movieList.value = await getMovie();
  //路由跳转并传参
  //router.push
  movieList.value = movieList.value.filter((item) => {
    return item.name.includes(content);
  })

  console.log(movieList.value);

  router.push({
    path:'/searched',
    query:{
      data:JSON.stringify(movieList.value)
    }
  })
}

export {search}