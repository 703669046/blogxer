import axios from 'axios';
import { getCookie } from './setcookie'
const service = axios.create({   //配置
    baseURL: 'http://lcalhost:76/',
    timeout: 6e4,
    validateStatus: x => x === 200
})
const done = function (h) {
    return this.then(h).catch(({ code, msg }) => {
        console.error('请求错误啦 =>', code, msg)
    })
}

const onsend = o => {
    if (typeof o.data === 'string') {
        o.headers[o.method]['Content-Type'] = 'application/json'
    }
    o.headers['Authorization'] = getCookie("token");
    return o;
}

const onsuccess = o => {
    // console.log('请求结果 =>', o.data)
    if (o.status !== 200) {
        throw o.status
    }
    if(o.headers['content-disposition']){
        return {
            data:o.data,
            fileName:o.headers['content-disposition'] || ''
        }
    }
    return o.data;
}

const onerror = e => {
    const info = e.toString();
    const err = {
        Code: -1,
        Message: '请求失败'
    }
    if (info.includes('Network Error')){
        err.Message = '网络错误'
    }
    else if (info.includes('timeout of')) {
        err.Message = '请求超时'
    }
    throw err
}

Promise.prototype.done = done;
window.Promise.prototype.done = done;
service.interceptors.request.use(onsend);
service.interceptors.response.use(onsuccess, onerror);

export default {
    $get: (url, params) => service.get(url, { params }),
    $pop: (url, params) => service.delete(url, { params }),
    $put: (url, o) => service.put(url, o),
    $post: (url, o) => service.post(url, o),
    $patch: (url, o) => service.patch(url, o),
    $form: (url, o) => service.post(url, o),
    $auth: (url, o) => service.post(url, o, { responseType: 'blob' }),
    $uploadPost:(url,o,fn) => service.post(url, o,{ headers: {'Content-Type': 'multipart/form-data',},onUploadProgress:fn })
}