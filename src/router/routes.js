// 管理路由

import Login from '../pages/Login/Login.vue'
import ShopsMap from '../pages/ShopsMap/ShopsMap.vue'

// 专门放置路由的信息
export default [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/shopsmap',
        component:ShopsMap
    },
    {
        path:'/',
        redirect: '/login'
    }
]