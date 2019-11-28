import ajax from './ajax'


// 获取省份信息
export const getProvince = () => ajax({
  url:'/getprovince',
  method:'POST'
})

// 获取市级信息
export const getCity = (province) => ajax({
  url:'/getcity',
  data:{
    province
  },
  method:'POST'
})

// 获取县级信息
export const getCounty = (province,city) => ajax({
  url:'/getcounty',
  data:{
    province,
    city
  },
  method:'POST'
})

//用户密码登录验证
export const getLogin = (name,pwd) => ajax({
  url: '/login',
  method: 'POST',
  data: {
   name,
   pwd
  }
})

//全部商品
export const getAllProduct = () => ajax({
  url:'/allproduct'
})
