var express = require('express');
var router = express.Router();
var db = require('../config/mysql');//引入mysql文件
var common = require('../config/common');//引入token类文件
const Joi = require('joi');//数据模型校验模块  https://www.cnblogs.com/zzbo/p/5906101.html
var multipart = require('connect-multiparty');// 引入解决post参数接收
var multipartMiddleware = multipart();//如果全局获取post参数设置没生效，就使用此方法放在路由后面
//  用户信息 分页 
 {
   /**
   * @api {post} /users/list 用户信息 分页 
   * @apiDescription  通过文章的id查询到单条详情数据
   * @apiName list
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
   * @apiSampleRequest /users/list
   * @apiVersion 1.1.0
   */
 }
router.post('/list', multipartMiddleware,function(req, res, next) {
  common.checkToken(req, res,()=>{//验证token
    const schema = Joi.object().keys({
      pageSize: Joi.number().required(),
      page:Joi.number().required(),
      classification:Joi.string().allow(''),
      content:Joi.string().allow(''),
    })
    var output = Joi.validate(req.body, schema);
    if (output.error) {
      res.status(500).send(db.errorSendJson("请填写必填字段！",output.error))
      } else {
      var allDataNun
      // 查询总共有多少条数据
      db.query("select COUNT(id) from boke_users",function(err,data){
        if(err){
          res.status(500).send(db.errorSendJson(err.sqlMessage))
        }else {
          // console.log(req.query)//获取get参数
          // console.log(req.body)//获取post参数
          allDataNun=data[0]['COUNT(id)']
          var page=(req.body.page-1)*req.body.pageSize
          var pageSize=req.body.pageSize
          var classification=req.body.classification
          if (classification==""||classification==null) {
          var sql=`select * from boke_users order by id desc  limit ${page},${pageSize}`
          } else {
          var sql=`select * from boke_users where classification='${classification}' limit ${page},${pageSize}`
          }
          // 查询分页后的数据
          db.query(sql,function(err,data){
            if(err){
              res.status(500).send(db.errorSendJson(err.sqlMessage))
            }else {
              let item={
                    item:data,
                    totalCount:allDataNun
                  } 
              res.send(db.sendJson(item))
            }
          });
        }
      });
    }
  })
});
//用户 新增 
{
  /**
   * @api {post} /users/addusers 用户 新增
   * @apiDescription  用户 新增
   * @apiName addusers
   * @apiGroup users
  * @apiHeader {String} Authorization 用户授权token
  * @apiHeaderExample {json} Header-Example:
  *     {
  *       "Authorization": "",
  *     }
  *
  * @apiParam {string} img 头像
  * @apiParam {string} password 密码 必填
  * @apiParam {string} userCode 账号 必填
  * @apiParam {string} usergroup 用户级别 必填
  * @apiParam {string} username 用户名 必填
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
  * @apiSampleRequest /users/addusers
  * @apiVersion 1.1.0
  */
}
router.post("/addusers",function (req, res, next) {
  common.checkToken(req, res,()=>{//验证token
      const schema = Joi.object().keys({
        img: Joi.string().required(),
        password:Joi.string().required(),
        userCode:Joi.string().required(),
        usergroup:Joi.string().required(),
        username:Joi.string().required(),
      })
      var output = Joi.validate(req.body, schema);
      if (output.error) {
          res.status(500).send(db.errorSendJson("请填写必填字段！",output.error))
      } else {
        // 查询总共有多少条数据
        let analysisToken=common.analysisToken(req)
        db.query(`insert into boke_users(img,password,userCode,usergroup,username,createCode,crateTime) values( '${req.body.img}','${req.body.password}','${req.body.userCode}','${req.body.usergroup}','${req.body.username}','${analysisToken.userCode}','${common.GetDateStr(new Date())}');`,function(err,data){
          if(err){
            res.status(500).send(db.errorSendJson(err.sqlMessage))
          }else {
              res.send(db.sendJson(req.body))
          }
        });
      }
  })
})
  //删除用户
  {
    /**
     * @api {delete} /users/deleteusers 删除用户
     * @apiDescription  删除用户
     * @apiName deleteusers
     * @apiGroup users
    * @apiHeader {String} Authorization 用户授权token
    * @apiHeaderExample {json} Header-Example:
    *     {
    *       "Authorization": "",
    *     }
    * @apiParam {int} id  id 必填
    * @apiSuccess {json} result   返回的数据
    * @apiSuccessExample {json} 返回格式:
      *{
      *  "status": 200,
      *  "success": true,
      *  "result": [],
      *  "message": "成功"
    * }
    * @apiSampleRequest /users/deleteusers
    * @apiVersion 1.1.0
    */
  }
  router.delete("/deleteusers",function (req, res, next) {
    common.checkToken(req, res,()=>{//验证token
      db.query(`delete from boke_users where id in(${req.query.id});`,function(err,data){
        if(err){
          res.status(500).send(db.errorSendJson(err.sqlMessage))  
        }else {
          res.send(db.sendJson({}))
        }
      });
    })
  })
// 查询用户账号是否已注册，是否可注册
{
 /**
   * @api {post} /users/user_code 查询账号是否可注册 
   * @apiDescription  查询账号是否可注册
   * @apiName user_code
   * @apiGroup users
   * @apiParam {string} userCode 账号
    * @apiSuccess {Boolean} isregister   true为可注册false不可注册
   * @apiSuccessExample {json} 返回格式:
   *  {
          "status": 200,
          "success": true,
          "result": {
              "count": 2
          },
          "message": "成功"
      }
   * @apiSampleRequest /users/user_code
   * @apiVersion 1.1.0
   */ 
}
router.post('/user_code', function(req, res, next) {
    db.query(`select * from boke_users where userCode='${req.body.userCode}';`,function(err,data){
      console.log(data)
      if(err){
        res.status(500).send(db.errorSendJson(err.sqlMessage))
      }else {
        if (data.length>0) {
          res.send(db.sendJson({isregister:false}))
        } else {
          res.send(db.sendJson({isregister:true}))
        }
        
      }
    });
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
