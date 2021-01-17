import {get,post} from '@/utils/request'

export const getListPage = param => get('index/get/mycommentList',param||{});