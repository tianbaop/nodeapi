//全局安装 npm install -g apidoc
// 然后在接口文档的注释更改后 用命令行运行此命令执行编译 apidoc -i routes/ -o public/apidoc/


var express = require('express');
  var router = express.Router();
  const Joi = require('joi');//数据模型校验模块  https://www.cnblogs.com/zzbo/p/5906101.html
  var common = require('../config/common');//引入token类文件
  var db = require('../config/mysql');//引入mysql文件
  var multipart = require('connect-multiparty');// 引入解决post参数接收
  var multipartMiddleware = multipart();

  
//心情随笔 查询分页 
  {
    /**
     * @api {post} /diary/moodEssay 心情随笔 查询分页
     * @apiDescription  通过文章的id查询到单条详情数据
     * @apiName diary
     * @apiGroup diary
    * @apiParam {string} page 第几页 必填
    * @apiParam {string} pageSize 请求多少条数据 必填
    * @apiParam {string} content 查询条件
    * @apiParam {string} classification 查询条件
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
    * @apiSampleRequest /diary/moodEssay
    * @apiVersion 1.1.0
    */
  }
  router.post("/moodEssay",function (req, res, next) {
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
        var allDataNun=0
        // 查询总共有多少条数据
        db.query("select * from diary",function(err,data){
          if(err){
            res.status(500).send(db.errorSendJson(err.sqlMessage))
          }else {
            // console.log(req.query)//获取get参数
            // console.log(req.body)//获取post参数
            allDataNun=data.length
            var page=(req.body.page-1)*req.body.pageSize
            var pageSize=req.body.pageSize
            var classification=req.body.classification
            if (classification==""||classification==null) {
              var sql=`select * from diary order by id desc  limit ${page},${pageSize}`
            } else {
              var sql=`select * from diary where classification='${classification}' limit ${page},${pageSize}`
            }
            // 查询分页后的数据
            db.query(sql,function(err,data){
              if(err){
                res.status(500).send(db.errorSendJson(err.sqlMessage))
              }else { let item={
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
//心情随笔 新增 
  {
    /**
     * @api {post} /diary/addEssay 心情随笔 新增
     * @apiDescription  新增心情随笔
     * @apiName addEssay
     * @apiGroup diary
    * @apiHeader {String} Authorization 用户授权token
    * @apiHeaderExample {json} Header-Example:
    *     {
    *       "Authorization": "",
    *     }
    *
    * @apiParam {string} author 作者
    * @apiParam {string} content 内容 必填
    * @apiParam {boolean} isEnabled 是否启用 必填
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
    * @apiSampleRequest /diary/addEssay
    * @apiVersion 1.1.0
    */
  }
  router.post("/addEssay",function (req, res, next) {
    common.checkToken(req, res,()=>{//验证token
        const schema = Joi.object().keys({
            author: Joi.string().allow(''),
            content:Joi.string().required(),
            isEnabled:Joi.boolean().required(),
        })
        var output = Joi.validate(req.body, schema);
        if (output.error) {
            res.status(500).send(db.errorSendJson("请填写必填字段！",output.error))
        } else {
          // 查询总共有多少条数据
          let analysisToken=common.analysisToken(req)
          db.query(`insert into diary(author,content,isEnabled,createCode,datetime) values( '${analysisToken.username}','${req.body.content}','${req.body.isEnabled}','${analysisToken.createCode}','${common.GetDateStr(new Date())}');`,function(err,data){
            if(err){
              res.status(500).send(db.errorSendJson(err.sqlMessage))
            }else {
              req.body.author=analysisToken.username
                res.send(db.sendJson(req.body))
            }
          });
        }
    })
  })
  
  //删除心情随笔 
  {
    /**
     * @api {delete} /diary/deletediary 心情随笔删除
     * @apiDescription  删除心情随笔
     * @apiName deletediary
     * @apiGroup diary
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
    * @apiSampleRequest /diary/deletediary
    * @apiVersion 1.1.0
    */
  }
  router.delete("/deletediary",function (req, res, next) {
    common.checkToken(req, res,()=>{//验证token
      db.query(`delete from diary where id in(${req.query.id});`,function(err,data){
        if(err){
          res.status(500).send(db.errorSendJson(err.sqlMessage))
        }else {
          res.send(db.sendJson({}))
        }
      });
    })
  })
module.exports = router;
