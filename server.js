const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.static(__dirname+'/public'))

// 使用cors, 允许跨域
app.use(cors())
// 能解析urlencode格式的post请求体参数
app.use(express.urlencoded())
// 能解析json格式的请求体参数
app.use(express.json())

const users = {}

app.post('/shopsmap', (req, res) => {
  setTimeout(() => {
    const data = require('./datas/cities.json')
    res.send(
      {code: 0, data}
    )
    console.log(data)
  }, 300 + Math.random()*1000);
})


// 发送省份信息
app.post('/getprovince',(req,res)=>{
  try{
    let result = []
    const data = require('./datas/cities.json')
    data.forEach(element => {
      if (element.level === 1) {
        result.push(element)
      }
    });
    res.send({code:0,provinceData:result})
  }
  catch(err){
    console.log(err)
    res.send({code:1,err:'查询时出现错误'})
  }
 })


// 发送城市信息
 app.post('/getcity',(req,res)=>{
  try{
    let {province} = req.body
    let result = []
    const data = require('./datas/cities.json')
    data.forEach(element => {
      if (element.level === 2 &&  element.province ===province) {
        result.push(element)
      }
    });
    res.send({code:0,cityData:result})
  }
  catch(err){
    console.log(err)
    res.send({code:1,err:'查询时出现错误'})
  }
 })

 // 发送城市信息
 app.post('/getcounty',(req,res)=>{
  try{
    let {city,province} = req.body
    let result = []
    const data = require('./datas/cities.json')
    data.forEach(element => {
      if (element.level === 3 && element.province === province && element.city === city) {
        result.push(element)
      }
    });
    res.send({code:0,countyData:result})
  }
  catch(err){
    console.log(err)
    res.send({code:1,err:'查询时出现错误'})
  }
 })

//用户密码登录
app.post('/login',(request,response) => {
  //console.log(request)
  const username = request.body.name 
  //console.log(username)
  const pwd = request.body.pwd
  if(username === '222@222.com' && pwd === '123123'){
    response.send({
        code: 0,
        data: {
            username, 
            pwd
        } 
    })
  }
})

let data = require('./datas/allData.json')
app.get('/allproduct',(request,response) => {
    response.send({code: 0, data})
})


app.listen(3000, () => {
  console.log('服务器启动0')
  console.log('服务器地址为：http://localhost:3000')
})