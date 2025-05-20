import axios from "axios";

let getMovie = () => {
  return new Promise((resolve) => {
    axios.get('/api/movie').then((result) => {
      resolve(result.data);
    })
  }, (reject) => {
    reject(alert("网络链接不稳定,请更换网络后重试"));
  })
};

export { getMovie };