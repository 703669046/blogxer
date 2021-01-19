import axios from 'axios';
import { getCookie } from './setcookie'

//公共的地址
export const GLOBAL_URL = {
  url: "http://www.blogserver.com:76/"
}
//公共的方法
function request(method, url, data, headers) {
  method = method.toUpperCase();  //转为大写  目的更严谨
  // if (method === 'GET') {
  //   body = undefined;
  // };
  return axios({
    method: method,
    url: `${GLOBAL_URL.url + url}`,
    data,
    headers: headers || {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  }).then(function (res) {
    if (res.data.code == 200) {
      return res.data
    } else {
      this.$message.error(res.data.msg);
      return res.data;
    }
  }).catch(function (error) {
    return error
  })
}
export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);
