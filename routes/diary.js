//全局安装 npm install -g apidoc
// 然后在接口文档的注释更改后 用命令行运行此命令执行编译 apidoc -i routes/ -o public/apidoc/


var express = require('express');
  var router = express.Router();
//引入mysql文件
  var db = require('../config/mysql');
// 引入解决post参数接收
  var multipart = require('connect-multiparty');
  var multipartMiddleware = multipart();

  
/* 心情随笔 分页 */
  /**
   * @api {post} /diary/moodEssay 心情随笔 分页
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
  router.post("/moodEssay",function (req, res, next) {
      var allDataNun
      // 查询总共有多少条数据
      db.query("select * from diary",function(err,data){
        if(err){
            res.send(err)
            res.locals.message = err.message;
            res.status(err.status || 500);
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
                res.send(err)
                res.locals.message = err.message;
                res.status(err.status || 500);
            }else {
              res.send(db.sendJson(data))
            }
          });
        }
      });
  })
/* 心情随笔 分页*/
module.exports = router;
