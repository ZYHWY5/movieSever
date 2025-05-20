import axios from "axios";

let getUser = () => {
  return new Promise((resolve) => {
    axios.get('/api/user').then((result) => {
      resolve(result.data);
    })
  }, (reject) => {
    reject(alert("网络链接不稳定,请更换网络后重试"));
  })
};

export { getUser };
