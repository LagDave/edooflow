import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        apiURL: 'http://localhost:8000',
        isLoading: false
    },
    mutations:{
        FLIP_IS_LOADING(state){
            state.isLoading = !state.isLoading;
        }
    },
    actions:{
        toggleLoading(context){
            context.commit("FLIP_IS_LOADING");
        }
    }
});