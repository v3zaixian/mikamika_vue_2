import ajax from './ajax'

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
 export const getShop = () => ajax({
       url:'/test'
 })