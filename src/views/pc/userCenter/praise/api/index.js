import {get,post} from '@/utils/request'

export const getListPage = param => get('index/get/my_praise_list',param||{});

export const handlePraise = param => post('index/praise',param||{})