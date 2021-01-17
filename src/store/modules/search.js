const state = {
    searchList:[],
}

const mutations = {
    SET_SEARCH_LIST(state,data){
        state.searchList=data;
    }
}

const actions = {
    setSearchList({commit},data){
        commit('SET_SEARCH_LIST',data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}