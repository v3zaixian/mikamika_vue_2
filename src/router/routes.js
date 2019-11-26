import ShopsMap from '../pages/ShopsMap/ShopsMap.vue'



export default [
  {
    path:'/shopsmap',
    component:ShopsMap
  },
  {
    path: '/',
    redirect: '/shopsmap'
  }
]
