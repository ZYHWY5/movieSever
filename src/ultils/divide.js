import {ref, watch} from 'vue';

//全局变量 与局部的pages保持一致
let page = ref();

let divide = (movieList) => {

  //电影总数
  let total = ref();
  total.value = movieList.length;

  //每页展示数量
  let each = ref();
  each.value = 16;

  //需要的页数
  let pages = ref();
  pages.value = Math.ceil(total.value / each.value);
  //全局变量 与局部的pages保持一致
  page.value = pages.value;

  //起始和终止的索引
  let start = ref();
  let end = ref();
  start.value = 0;
  end.value = start.value + each.value;
  //索引更新函数
  let update = () => {
    start.value = start.value + each.value;
    end.value = end.value + each.value;
    //可以不做超出判断
    // if(end.value > total.value + 1){
    //   end.value = i * each.value + (total.value % each.value);
    // }
  }
  
  //返回的数组
  let list = ref([]);

  for(let i = 0; i < pages.value; i++){
    list.value.push(movieList.slice(start.value, end.value));
    update(i);
  }
  
  return list.value;

};

//返回需要的页数
//提供给points.vue组件使用
let points = () => {
  return page.value;
}

export { divide, points };
