import {get,post} from '@/utils/request'

export const getListPage = param => post('index/postListPage',param||{});

export const getPostInfo = id => get(`index/postItem/info/${id}`)

export const handlePraise = param => post('index/praise',param||{})

export const handleCollect = param => post('index/collect',param||{})

export const addComment = param => post('index/add/comment',param||{})

export const getCommentList = param => post('index/get/commentList',param||{})