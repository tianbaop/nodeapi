var express = require('express');
var router = express.Router();
var db = require('../config/mysql');//引入mysql文件
var common = require('../config/common');//引入token类文件
const Joi = require('joi');//数据模型校验模块  https://www.cnblogs.com/zzbo/p/5906101.html
var multipart = require('connect-multiparty');// 引入解决post参数接收
var multipartMiddleware = multipart();

 /**
   * @api {post} /login 登录 
   * @apiDescription  登录
   * @apiName login
   * @apiGroup login
  * @apiParam {string} userCode 用户账号
  * @apiParam {string} password 用户密码
   * @apiSuccess {datetime} datetime   创建时间
   * @apiSuccess {int} id   id
   * @apiSuccess {string} img   头像图片路径
   * @apiSuccess {string} usergroup   账号级别
   * @apiSuccess {string} username   用户名
   * @apiSuccess {string} token   登录验证token
   * @apiSuccessExample {json} 返回格式:
   * {
          "status": 200,
          "success": true,
          "result": {
              "datetime": "2019-05-16T07:29:59.000Z",
              "id": 1,
              "img": "/uploadImg/user_img/154563224052635.jpg",
              "usergroup": "超级管理员",
              "username": "田保平",
              "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi55Sw5L-d5bmzIiwiaWF0IjoxNTY0NDU2NDc2LCJleHAiOjE1NjQ0OTI0NzZ9.vyqFuZrDeOgPftnLJ-V6RfAkIAtVRkfzo3FIaY2EtvE"
          },
          "message": "成功"
      }
   * @apiSampleRequest /login
   * @apiVersion 1.0.0
   */
router.post('/',multipartMiddleware, function(req, res, next) {
  console.log(req.body)
    // 必填校验模型
      const schema = Joi.object().keys({
        userCode: Joi.string().required(),
        password:Joi.string().required(),
      })
    // 必填校验模型
    // 必填校验
    var output = Joi.validate(req.body, schema);
    // 必填校验
    if (output.error) {
      // 校验不通过
      res.status(500).send(db.errorSendJson("请输入用户名或密码",output.error))
    } else {
      // 检验通过
      db.query(`SELECT * FROM boke_users where userCode='${req.body.userCode}' and password='${req.body.password}'`,function(err,data){
        if(err){
          res.status(500).send(db.errorSendJson(err))
        }else {
            console.log(data)
          if (data.length>0) {
            let token=common.generateToken({username:data[0].username,userCode:data[0].userCode,usergroup:data[0].usergroup})//获取token
            let datas={
              datetime:data[0].datetime,
              id:data[0].id,
              img:data[0].img,
              usergroup:data[0].usergroup,
              username:data[0].username,
              token:"Bearer "+token
            }
            db.query(`update boke_users set datetime='${common.GetDateStr(new Date())}' where id=${data[0].id}`);
            res.send(db.sendJson(datas))
          } else {
            res.status(500).send(db.errorSendJson("账号或者密码错误"))
          }
        }
      });
    }
});

module.exports = router;
