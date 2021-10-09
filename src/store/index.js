import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './user';
import { friends } from './friends';


Vue.use(Vuex);

const store = () => {
    return new Vuex.Store({
        modules: {
            nameNamespace: user,
            friends
        }
    });
};

export default store;