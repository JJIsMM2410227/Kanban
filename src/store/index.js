import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import columns from '@/store/modules/columns'

export default new Vuex.Store({
    modules: {
        columns,
    },
})
