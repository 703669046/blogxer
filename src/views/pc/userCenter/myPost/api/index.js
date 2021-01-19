import {get,post} from '@/utils/request'

export const getListPage = param => post('index/get/my_post_list',param||{});