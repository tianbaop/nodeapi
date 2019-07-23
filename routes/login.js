var express = require('express');
var router = express.Router();
var db = require('../config/mysql');//引入mysql文件
var Jwt = require('../config/common');//引入token类文件
const Joi = require('joi');//数据模型校验模块  https://www.cnblogs.com/zzbo/p/5906101.html

 /**
   * @api {post} /login 登录 
   * @apiDescription  登录
   * @apiName login
   * @apiGroup login
  * @apiParam {string} userName 用户账号
  * @apiParam {string} password 用户密码
   * @apiSuccess {json} result   返回的数据
      * @apiHeader {String} Authorization 用户授权token
   * @apiSuccessExample {json} 返回格式:
   *  {
      *      "status": 200,
      *      "success": true,
      *      "result": [ 
      *       {
                "name": "未知",
                "datetime": "2018-11-27T02:53:17.000Z",
                "token": "别为不属于自己的观众，演绎不擅长的人生",
      *       },
      *    ],
      *    "message": "成功"
      *  }
   * @apiSampleRequest /login
   * @apiVersion 1.0.0
   */
router.post('/', function(req, res, next) {
    const schema = Joi.object().keys({
      userName: Joi.string().required(),
      password:Joi.string().required(),
    })
    var output = Joi.validate(req.body, schema);
    if (output.error) {
      res.status(500).send(db.errorSendJson("请填写必填字段！",output.error))
    } else {
      db.query(`SELECT * FROM boke_users where userCode='${req.body.userName}' and password='${req.body.password}'`,function(err,data){
        if(err){
          res.status(500).send(db.errorSendJson(err))
        }else {
          if (data.length>0) {
            let token=Jwt.generateToken(req.body.userName)//获取token
            let data={
              name:req.body.userName,
              token:token
            }
            res.send(db.sendJson(data))
          } else {
            res.status(500).send(db.errorSendJson("账号或者密码错误"))
          }
        }
      });
    }
});

module.exports = router;
