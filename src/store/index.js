import Vue from 'vue'
import Vuex from 'vuex'

import system from './modules/system'
import search from './modules/search'
import getters from './modules/getters'

Vue.use(Vuex);
const store=new Vuex.Store({
    modules:{
        system,
        search
    },
    getters
})
export default store