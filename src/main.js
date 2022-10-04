import Vue from 'vue'
import App from './App.vue'
import Store from '@/store/index'

import { Button, Modal, Input } from 'ant-design-vue'
// import 'ant-design-vue/lib/button/style/index.css'
// import 'ant-design-vue/lib/modal/style/index.css'
;[Button, Modal, Input].forEach((item) => {
    Vue.use(item)
})

new Vue({
    render: (h) => h(App),
    store: Store,
}).$mount('#app')
