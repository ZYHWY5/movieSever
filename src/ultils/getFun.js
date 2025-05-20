import axios from "axios";

let getFun = () => {
  return new Promise(
    (resolve) => {
      axios.get("https://365b02ce-b845-4125-b13d-c4a087c1497a.mock.pstmn.io/fun").then((result) => {
        resolve(result.data);
      });
    },
    (reject) => {
      reject(alert("网络链接不稳定,请更换网络后重试"));
    }
  );
};

export { getFun };
