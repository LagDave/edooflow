require('./bootstrap');
import Vue from 'vue';
import VueRouter from "vue-router";
import store from './utils/store.js';

Vue.use(VueRouter);
import routes from './utils/routes.js'
const router = new VueRouter({routes});


// Base Application Vue Component
import MainComponent from "./MainComponent.vue";
Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    components: {
        MainComponent
    },
    router,
    store
});
