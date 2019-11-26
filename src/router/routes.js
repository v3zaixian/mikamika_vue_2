import All from '../pages/All/All.vue'
import ProductInfo from '../pages/ProductInfo/ProductInfo.vue'
export default [
  {
    path:'/qbcp',
    component:All
  },
  {
    path:'/productinfo/:id',
    component:ProductInfo
  },
  {
    path:'/rhgm',
    component:All
  },
  {
    path: '/',
    redirect: '/qbcp'
  }
]