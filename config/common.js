
// 引入模块依赖
const fs = require('fs');
const path = require('path');
var db = require('./mysql');//引入mysql文件
const jwt = require('jsonwebtoken');//token\
const configurationFile = require("./configurationFile");//配置文件



/*
生成token 
参数： userName:用户名
参数： res:路由res的值
*/
let generateToken=(data)=>{
  try {
    let created = Math.floor(Date.now() / 1000);
    let content ={username:data.username,userCode:data.userCode,permissionType:data.permissionType,}; // 要生成token的主体信息
    let secretOrPrivateKey=configurationFile.secretOrPrivateKey // 这是加密的key（密钥） 
    let tokens = jwt.sign(content, secretOrPrivateKey, {
            expiresIn: 60*60*10 , // 10小时过期
        });
        return tokens
  } catch (error) {
    console.log(error)
  }
    
}
/*
重新生成 token
req
*/
let refreshToken=(req)=> {
  let token = req.headers.authorization.split(' ')[1]; // 获取token
  let created = Math.floor(Date.now() / 1000);
  let cert = configurationFile.secretOrPrivateKey // 这是加密的key（密钥） 
  let tokens = jwt.sign({
      token,
      exp: created + 60*60*10,  // 10小时过期
  }, cert);
  return tokens;
}
/*
校验token 是否有效
参数： req:路由req的值
参数： res:路由res的值
参数： callback:回调函数
*/
let checkToken=(req,res,callback)=>{
    try {
      if (req.headers.authorization) {
          let token = req.headers.authorization.split(' ')[1]; // 获取token
          let secretOrPrivateKey=configurationFile.secretOrPrivateKey; // 这是加密的key（密钥
          jwt.verify(token, secretOrPrivateKey, function (err, decode) {
            if (err) {  //  时间失效的时候/ 伪造的token          
              res.status(401).send(db.errorSendJson("登录信息过期，或未登录"))       
            } else {
              callback()
            }
          })
      } else {
         res.status(401).send(db.errorSendJson("登录信息过期，或未登录"))   
      }
     
    } catch (error) {
      console.log(error)
    }
}
/*
解析token 取出token里面的信息
参数： req:路由req的值
*/
function analysisToken(req){
      let datas=jwt.verify(req.headers.authorization.split(' ')[1], configurationFile.secretOrPrivateKey,  (err, decoded) =>{
        if (!err){
            return {
              username:decoded.username,
              userCode:decoded.userCode,
              usergroup:decoded.usergroup
            }
         }else{
           return false
         }
      })
      return datas
}
/* 
获取时间
dates 传入时间日期 必传
*/
function GetDateStr(dates){
  let dd = new Date(dates);
  let y = dd.getFullYear(); 
  let m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
  let d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
  let  hour =(dd.getHours())<10?"0"+dd.getHours():dd.getHours()
  let  min =(dd.getMinutes())<10?"0"+dd.getMinutes():dd.getMinutes() 
  let  sec = (dd.getSeconds())<10?"0"+dd.getSeconds():dd.getSeconds()
  return y+"-"+m+"-"+d+" "+hour+":"+min+":"+sec;
}
module.exports = {
    generateToken,
    checkToken,
    analysisToken,
    refreshToken,
    GetDateStr,
};