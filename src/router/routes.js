import ShopsMap from '../pages/ShopsMap/ShopsMap.vue'
import Cooperation from '../pages/Cooperation/Cooperation.vue'
import Purchase from '../pages/Purchase/Purchase.vue'
import All from '../pages/All/All.vue'
import ProductInfo from '../pages/ProductInfo/ProductInfo.vue'
import BGvideo from '../pages/BGvideo/BGvideo.vue'
import  Guanyu from '../pages/Guanyu/Guanyu.vue'
import  Shouye from '../pages/Shouye/Shouye'
import Login from '../pages/Login/Login.vue'


export default [

  // 
  {
    path:'/login',
    component:Login
  },

  // 首页路由
  {
    path:'/shouye',
    component:Shouye,
    meta: {
      isShowHeader: true
    }
  },


  // 全部产品
  {
    path:'/qbcp',
    component:All,
    meta: {
      isShowHeader: true,
      isShowFooterGuide:true,
      isShowLunBo:true
    }
  },
  // 产品详情
  {
    path:'/productinfo/:id',
    component:ProductInfo
  },
  {
    path:'/rhgm',
    component:All
  },


  // 关于支付
  {
    path:'/purchase',
    component:Purchase,
    meta: {
      isShowHeader: true,
      isShowFooterGuide:true,
      isShowLunBo:true
    }
  },


  // 合作企业
  {
    path:'/cooperation',
    component:Cooperation,
    meta: {
      isShowHeader: true,
      isShowFooterGuide:true,
      isShowLunBo:true
    }
  },


  // 关于我们
  {
    path:'/guanyu',
    component:Guanyu,
    meta: {
      isShowHeader: true,
      isShowFooterGuide:true,
      isShowLunBo:true
    }
  },


  // 分店路由
  {
    path:'/shopsmap',
    component:ShopsMap,
    meta: {
      isShowHeader: true,
      isShowFooterGuide:true,
      isShowLunBo:true
    }
  },


  // 材料展示
  {
    path:'/bgvideo',
    component:BGvideo,
    meta: {
      isShowHeader: true,
      isShowFooterGuide:true,
      isShowLunBo:true
    }
  },
  {
    path: '/',
    redirect: '/shouye'
  }
]
