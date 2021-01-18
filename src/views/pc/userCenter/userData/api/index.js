import {get,post,del} from '@/utils/request'

export function getUserinfo (data) {
    return post('index/userinfo',data)
}

export function userInfoEdit(data){
    return post('index/userinfo/update',data)
}