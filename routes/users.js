var express = require('express');
var router = express.Router();
var db = require('../config/mysql');//引入mysql文件
var common = require('../config/common');//引入token类文件
const Joi = require('joi');//数据模型校验模块  https://www.cnblogs.com/zzbo/p/5906101.html
var multipart = require('connect-multiparty');// 引入解决post参数接收
var multipartMiddleware = multipart();//如果全局获取post参数设置没生效，就使用此方法放在路由后面
//  用户信息 
 {
   /**
   * @api {get} /users/users 用户信息 
   * @apiDescription  通过文章的id查询到单条详情数据
   * @apiName users
   * @apiGroup users
   * @apiParam {string} page 第几页 必填
   * @apiParam {string} pageSize 请求多少条数据 必填
   * @apiParam {string} content 查询条件
   * @apiParam {string} classification 查询条件
   * @apiHeader {String} Authorization 用户授权token
   * @apiSuccess {json} result   返回的数据
   * @apiSuccessExample {json} 返回格式:
   *  {
      *      "status": 200,
      *      "success": true,
      *      "result": [ 
      *       {
                "author": "未知",
                "datetime": "2018-11-27T02:53:17.000Z",
                "content": "别为不属于自己的观众，演绎不擅长的人生",
      *       },
      *    ],
      *    "message": "成功"
      *  }
   * @apiSampleRequest /users/users
   * @apiVersion 1.1.0
   */
 }
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

// 用户总数量
{
 /**
   * @api {get} /users/user_pearson_all 用户总数量 
   * @apiDescription  11111
   * @apiName user_pearson_all
   * @apiGroup users
   * @apiHeader {String} Authorization 用户授权token
   * @apiSuccess {number} count   返回的用户数量
   * @apiSuccessExample {json} 返回格式:
   *  {
          "status": 200,
          "success": true,
          "result": {
              "count": 2
          },
          "message": "成功"
      }
   * @apiSampleRequest /users/user_pearson_all
   * @apiVersion 1.1.0
   */ 
}
router.get('/user_pearson_all', function(req, res, next) {
  common.checkToken(req, res,()=>{//验证token
    db.query("select count(*) from boke_users;",function(err,data){
      console.log(data)
      if(err){
        res.status(500).send(db.errorSendJson(err.sqlMessage))
      }else {
        res.send(db.sendJson({count:data[0]['count(*)']}))
      }
    });
  })
 
});
module.exports = router;
