import { getCookie, removeCookie } from '@/utils/setcookie'
import { clearLogin } from '@/components/page/api/index'

const state = {
    userName: undefined || sessionStorage.getItem('username'),
    email: undefined || sessionStorage.getItem('email'),
    nickName: undefined || sessionStorage.getItem('nickname'),
    userId: undefined || sessionStorage.getItem('nickname'),
    figure_url: sessionStorage.getItem('figure_url'),
    tokens: getCookie('token'),
    menutList: JSON.parse(sessionStorage.getItem('menutList')),
    clearState: 0,
    cascaderList:JSON.parse(sessionStorage.getItem('menutList')),
    userMenut: [
        {
            id: 1,
            auth_name: '个人信息',
            path: '/user/userData',
            children:[]
        },
        {
            id: 2,
            auth_name: '我的评论',
            path: '/user/comment',
            children:[]
        },
        {
            id: 3,
            auth_name: '收到的评论',
            path: '/user/getComment',
            children:[]
        },
        {
            id: 4,
            auth_name: '我的收藏',
            path: '/user/collect',
            children:[]
        },
        {
            id: 5,
            auth_name: '我的点赞',
            path: '/user/praise',
            children:[]
        },
        {
            id: 5,
            auth_name: '我的发布',
            path: '/user/myPost',
            children:[]
        },
        
    ]
}

const mutations = {
    SET_USER_MENUT(state,data){
        console.log(data,666)
        state.menutList=data
    },
    SET_USERINFO(state, user) {
        // state.userId = user.user_id;
        // state.nickName = user.nickname;
        // state.userName = user.username;
        // state.email = user.email;
        // state.figure_url = user.figure_url;
        // state.menutList = user.menutList;
        for (let keys in user) {
            if (keys == 'menutList') {
                sessionStorage.setItem(keys, JSON.stringify(user[keys]));
            } else {
                sessionStorage.setItem(keys, user[keys]);
            }
        }
    },
    SET_MEUNT(state, data) {
        state.meunt = data;
        sessionStorage.setItem('meunt', data)
    },
    async CLEAR_LOGIN(state) {
        let res = await clearLogin();
        if (res.success) {
            sessionStorage.clear();
            state.userName = undefined,
                state.email = undefined,
                state.nickName = undefined,
                state.userId = undefined,
                state.figure_url = undefined,
                state.tokens = undefined,
                removeCookie('token')
        }
    }
}

const actions = {
    setUserInfo: ({ commit }, user) => {
        commit('SET_USERINFO', user);
    },
    setMeunt: ({ commit }, data) => {
        commit('SET_MEUNT', data);
    },
    clearLogin({ commit }) {
        commit('CLEAR_LOGIN');
    },
    setUserMenut({commit},data){
        commit('SET_USER_MENUT',data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}