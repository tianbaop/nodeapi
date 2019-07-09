// 在接口文档的注释更改后 用命令行运行此命令执行编译apidoc -i routes/ -o public/apidoc/
// 为了支持post json格式传参   http://www.itdaan.com/blog/2018/05/22/9f6730218af63b9c67e460967c514eb1.html
//如果部署 package里面url 改为服务器路径 例如"url": "http://62.234.146.119:12004"


var express = require('express');
  var router = express.Router();
  const Joi = require('joi');//数据模型校验模块  https://www.cnblogs.com/zzbo/p/5906101.html
  var db = require('../config/mysql');//引入mysql文件
  var multipart = require('connect-multiparty');// 引入解决post参数接收
  var multipartMiddleware = multipart();

  /* 文章查询  分页 */
    {
      /**
         * @api {post} /article/list 文章查询 分页
         * @apiDescription 分页查询文章， 选传其他条件查询
         * @apiName list
         * @apiGroup article
         * @apiParam {string} page='1' 第几页 必填
         * @apiParam {string} pageSize='10' 请求多少条数据 必填
         * @apiParam {string} content 查询条件
         * @apiParam {string} classification 查询条件
         * @apiSuccess {String} title 标题
          * @apiSuccess {String} author   作者
        * @apiSuccessExample {json} 返回格式:
        *  {
          *      "status": 200,
          *      "success": true,
          *      "result": [{
          *          "id": 0,
          *          "title": "",
          *          "author": "",
          *          "source": "",
          *          "sourceURL": "",
          *          "describes": "",
          *          "content": "",
          *            "browse":  ""’,
          *            "classification": "",
          *            "Keyword": "",
          *            "img": "",
          *            "datetime": "",
          *            "clicks": 2
          *          },
          *    ],
          *    "message": "成功"
          *  }
          * @apiSampleRequest /article/list
      */
    }
      
    router.post('/list', function(req, res, next) {
      try {
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
              db.query("select COUNT(id) from article",function(err,data){
                if(err){
                    res.status(500).send(db.errorSendJson(err.sqlMessage))
                }else {
                  // console.log(req.query)//获取get参数
                  // console.log(req.body)//获取post参数
                  allDataNun=data[0]['COUNT(id)']
                  console.log(allDataNun)
                  var page=(req.body.page-1)*req.body.pageSize
                  var pageSize=req.body.pageSize
                  var classification=req.body.classification
                  if (classification==""||classification==null) {
                    var sql=`select * from article order by id desc  limit ${page},${pageSize}`
                  } else {
                    var sql=`select * from article where classification='${classification}' limit ${page},${pageSize}`
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
          
      } catch (error) {
        res.status(500).send(error)
      }
    });
  /* 文章查询  分页 */

/* 文章查询  推荐列表 */
      {
        /**
         * @api {post} /article/recommendedArticles 文章查询  推荐列表
         * @apiDescription  推荐的文章数据查询，默认推荐的数据为8条
         * @apiName recommendedArticles1111
         * @apiGroup article
         * @apiSuccess {json} result 返回的数据
         * @apiSuccessExample {json} 返回格式:
         *  {
            *      "status": 200,
            *      "success": true,
            *      "result": [{
            *          "id": 0,
            *          "title": "",
            *          "author": "",
            *          "source": "",
            *          "sourceURL": "",
            *          "describes": "",
            *          "content": "",
            *            "browse":  ""’,
            *            "classification": "",
            *            "Keyword": "",
            *            "img": "",
            *            "datetime": "",
            *            "clicks": 2
            *          },
            *    ],
            *    "message": "成功"
            *  }
        * @apiSampleRequest /article/recommendedArticles
        * @apiVersion 1.0.0
        */
      }
    router.post("/recommendedArticles",function (req, res, next) {
      db.query("select * from article limit 0,8",function(err,data){
        if(err){
          res.status(500).send(db.errorSendJson(err.sqlMessage))
        }else {
          res.send(db.sendJson(data))
        }
      });
    })
/* 文章查询  推荐列表 */

/* 文章查询  文章详情 */
    {
      /**
       * @api {post} /article/articleDetails 文章查询  文章详情
       * @apiDescription  通过文章的id查询到单条详情数据
       * @apiName articleDetails
       * @apiGroup article
       * @apiParam id=1 必填
       * @apiSuccess {json} result   返回的数据
       * @apiSuccessExample {json} 返回格式:
       *  {
          *      "status": 200,
          *      "success": true,
          *      "result": [{
          *          "id": 0,
          *          "title": "",
          *          "author": "",
          *          "source": "",
          *          "sourceURL": "",
          *          "describes": "",
          *          "content": "",
          *            "browse":  ""’,
          *            "classification": "",
          *            "Keyword": "",
          *            "img": "",
          *            "datetime": "",
          *            "clicks": 2
          *          },
          *    ],
          *    "message": "成功"
          *  }
      * @apiSampleRequest /article/articleDetails
      * @apiVersion 1.1.0
      */
    }
  router.post("/articleDetails",function (req, res, next) {
    var id=req.body.id
    db.query(`select * from article where id= ${id}`,function(err,data){
      if(err){
        res.status(500).send(db.errorSendJson(err.sqlMessage))
      }else {
        db.query(`update article set clicks=clicks+1 where  id='${id}' `,function(err){
          if(err){
            res.status(500).send(db.errorSendJson(err.sqlMessage))
          }else {
            res.send(db.sendJson(data))
          }
        });
      }
    });
  })
/* 文章查询  文章详情 */



  /* 添加文章 */
    {
      /**
       * @api {post} /article/addArticle 添加文章
       * @apiDescription  通过文章的id查询到单条详情数据
       * @apiName addArticle
       * @apiGroup article
      * @apiHeader {String} Authorization 用户授权token
      * @apiHeaderExample {json} Header-Example:
      *     {
      *       "Authorization": "",
      *     }
      *
      * @apiParam {string} title  必填
      * @apiParam {string} author  必填
      * @apiParam {string} source  必填
      * @apiParam {string} sourceURL  必填
      * @apiParam {string} describe  必填
      * @apiParam {string} content  必填
      * @apiParam {string} html  必填
      * @apiParam {string} keyword  必填
      * @apiParam {string} classification  必填
      * @apiParam {string} classificationTop  必填
      * @apiParam {string} img  非必填
      * 
      * 
      * @apiSuccess {json} result   返回的数据
      * @apiSuccessExample {json} 返回格式:
        *{
        *  "status": 200,
        *  "success": true,
        *  "result": [],
        *  "message": "成功"
      * }
      * @apiSampleRequest /article/addArticle
      * @apiVersion 1.1.0
      */
    }
    router.post("/addArticle",multipartMiddleware,function (req, res, next) {
      const schema = Joi.object().keys({
                    title: Joi.string().required(),
                    author:Joi.string().required(),
                    source:Joi.string().required(),
                    sourceURL: Joi.string().required(),
                    describe:Joi.string().required(),
                    content: Joi.string().required(),
                    html:Joi.string().required(),
                    keyword:Joi.string().required(),
                    classification: Joi.string().required(),
                    classificationTop: Joi.string().required(),
                    img: Joi.string()
      })
      var output = Joi.validate(req.body, schema);
        if (output.error) {
            res.status(500).send(db.errorSendJson("请填写必填字段！",output.error))
        } else {
            let sql=`insert into article (title,author,describes,content,html,keyword,img,classification,classificationTop,source,sourceURL)  values('${req.body.title}','${req.body.author}','${req.body.describe}','${req.body.content}','${req.body.html}','${req.body.keyword}','${req.body.img}','${req.body.classification}','${req.body.classificationTop}','${req.body.source}','${req.body.sourceURL}');`
            console.log(sql)
            db.query(sql,function(err,data){
              if(err){
                res.status(500).send(db.errorSendJson(err.sqlMessage))
              }else {
                res.send(db.sendJson(req.body))
              }
            });
        }
     
    })
  /* 添加文章*/
module.exports = router;
