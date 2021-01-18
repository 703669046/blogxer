import {get,post} from '@/utils/request'

export const getListPage = param => get('index/get/my_collect_list',param||{});

export const handleCollect = param => post('index/collect',param||{})