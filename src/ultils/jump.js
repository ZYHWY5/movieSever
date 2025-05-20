import router from "../router/index.js";

let jump = (item) => {
  router.push(item.path)
}

export {jump};