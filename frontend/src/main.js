import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
    BootstrapVue
} from 'bootstrap-vue'
import Vuex from 'vuex'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')