
const getters = {
    tokens:state=>state.system.tokens,
    menutList:state=>state.system.menutList,
    nickName: state=>state.system.nickName,
    userId:state=>state.system.userId,
    figure_url:state=>state.system.figure_url,
    email:state=>state.system.figure_url,
    clearState:state => state.system.clearState,
}
export default getters