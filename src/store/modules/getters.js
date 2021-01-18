
const getters = {
    tokens:state=>state.system.tokens,
    menutList:state=>state.system.menutList,
    cascaderList: state => state.system.cascaderList,
    nickName: state=>state.system.nickName,
    userId:state=>state.system.userId,
    figure_url:state=>state.system.figure_url,
    email:state=>state.system.figure_url,
    clearState:state => state.system.clearState,
    searchList : state =>state.search.searchList,
    userMenut : state => state.system.userMenut,
}
export default getters