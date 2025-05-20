import axios from 'axios';
export const http = axios.create({
  timeout: 1000,
});
http.interceptors.request.use(function (config) {
  console.log('请求发出前')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
http.interceptors.response.use(function (config) {
  console.log('响应收到后')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});