import {get,post} from '@/utils/request'

export function getLoginCaptcha(){
    return get('index/captcha');
}

export function goLoginUser(data){
    return post('index/login',data)
}

export function addUser(data){
    return post('index/register',data)
}

export function clearLogin(){
    return get('index/logout')
}

export function getMeunList(){
    return get('index/meunslist')
}

export function addPostData(data){
    return post('index/addPosts',data)
}

export const searchResult = param => post('index/searche',param||{});