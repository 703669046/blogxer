import {getCookie} from '@/utils/setcookie'

const state = {
    userName:undefined ||sessionStorage.getItem('username'),
    email:undefined ||sessionStorage.getItem('email'),
    nickName:undefined ||sessionStorage.getItem('nickname'),
    userId:undefined ||sessionStorage.getItem('nickname'),
    figure_url:sessionStorage.getItem('figure_url'),
    tokens:getCookie('token'),
    menutList:JSON.parse(sessionStorage.getItem('menutList'))
}

const mutations = {
    SET_SCREENWIDTH(state,size){
        state.screenWidths=size;
        if(size<=980){
            state.mobileWidth= window.screen.width;
        }else{

        }
    },
    SET_USERINFO(state,user){
        state.userId=user.user_id;
        state.nickName=user.nickname;
        state.userName=user.username;
        state.email=user.email;
        state.figure_url=user.figure_url;
        state.menutList=user.menutList;
        for(let keys in user){
            if(keys=='menutList'){
                sessionStorage.setItem(keys,JSON.stringify(user[keys]));
            }else{
                sessionStorage.setItem(keys,user[keys]);
            }
        }
    },
    SET_MEUNT(state,data){
        state.meunt=data;
        sessionStorage.setItem('meunt',data)
    },
}

const actions = {
    setScreenWidth:({commit},size)=>{
        commit('SET_SCREENWIDTH',size)
    },
    setUserInfo:({commit},user)=>{
        commit('SET_USERINFO',user);
    },
    setMeunt:({commit},data)=>{
        commit('SET_MEUNT',data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}