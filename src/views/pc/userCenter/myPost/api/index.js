import {get,post} from '@/utils/request'

export const getListPage = param => get('index/get/my_post_list',param||{});