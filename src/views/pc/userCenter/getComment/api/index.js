import {get,post} from '@/utils/request'

export const getListPage = param => get('index/get/my_Comment_list',param||{});