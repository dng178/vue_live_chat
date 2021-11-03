import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
import Load from '../pages/Load.vue'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            component: Load,
            name: 'Load',

        },
        {
            path: '/Main/:id',
            component: Main,
            name: 'Main',
        },
    ],

})


export default router