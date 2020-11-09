require('./bootstrap');
import Vue from 'vue';

// Base Application Vue Component
import MainComponent from "./MainComponent.vue";



const app = new Vue({
    el: '#app',
    components: {
        MainComponent
    }
});
