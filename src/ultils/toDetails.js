import router from '../router/index.js';

let toDetails = (item) => {
  router.push({
    path:'/details',
    query:{
      data:JSON.stringify(item)
    }
  })
}

export {toDetails};