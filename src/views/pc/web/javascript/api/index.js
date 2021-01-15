import {get,post} from '@/utils/request'

export const getListPage = param => post('index/postListPage',param||{});