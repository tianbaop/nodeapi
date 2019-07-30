
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
let generateToken=(userName)=>{
  try {
    let content ={name:userName}; // 要生成token的主体信息
    let secretOrPrivateKey=configurationFile.secretOrPrivateKey // 这是加密的key（密钥） 
    let token = jwt.sign(content, secretOrPrivateKey, {
            expiresIn: 60*60*10  // 10小时过期
        });
        return token
  } catch (error) {
    console.log(error)
  }
    
}/*
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
解析token 是否有效
参数： req:路由req的值
*/
let analysisToken=(req)=>{
    try {
      jwt.verify(req.headers.authorization, configurationFile.secretOrPrivateKey, function (err, decoded) {
        if (!err){
            return {
              userName:decoded.name
            }
         }else{
           return false
         }
      })
    } catch (error) {
      console.log(error)
    }
}
module.exports = {
    generateToken,
    checkToken,
    analysisToken,
};