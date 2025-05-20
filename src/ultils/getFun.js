import axios from "axios";

let getFun = () => {
  return new Promise(
    (resolve) => {
      axios.get("/api/fun").then((result) => {
        resolve(result.data);
      });
    },
    (reject) => {
      reject(alert("网络链接不稳定,请更换网络后重试"));
    }
  );
};

export { getFun };
