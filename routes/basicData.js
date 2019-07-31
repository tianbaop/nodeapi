var express = require('express');
var router = express.Router();
var db = require('../config/mysql');//引入mysql文件
var common = require('../config/common');//引入token类文件
const Joi = require('joi');//数据模型校验模块  https://www.cnblogs.com/zzbo/p/5906101.html
var multipart = require('connect-multiparty');// 引入解决post参数接收
var multipartMiddleware = multipart();//如果全局获取post参数设置没生效，就使用此方法放在路由后面
//  一级分类查询 
 {
   /**
   * @api {get} /basicData/classifications_list  分类查询
   * @apiDescription  分类查询
   * @apiName classifications_list
   * @apiGroup basicData
   * @apiParam {int} id  必填如果是一级就传0其他的填上一级的id
   * @apiHeader {String} Authorization 用户授权token
   * @apiSuccess {int} id   id
   * @apiSuccess {string} classification   分类名
   * @apiSuccess {datetime} datetime   创建时间
   * @apiSuccess {int} parent_int   父级id
   * @apiSuccess {datetime} createTime   创建时间
   * @apiSuccess {string} createCode   创建人
   * @apiSuccessExample {json} 返回格式:
   *    {
            "status": 200,
            "success": true,
            "result": [
                {
                    "id": 16,
                    "classification": "",
                    "datetime": "2018-08-05T14:00:00.000Z",
                    "parent_int": 15,
                    "createTime": null,
                    "createCode": null
                }
            ],
            "message": "成功"
        }
   * @apiSampleRequest /basicData/classifications_list
   * @apiVersion 1.1.0
   */
 }
router.get('/classifications_list', function(req, res, next) {
    common.checkToken(req, res,()=>{//验证token
        db.query(`select * from classifications where parent_int='${req.query.id?req.query.id:0}';`,function(err,data){
            if(err){
            res.status(500).send(db.errorSendJson(err.sqlMessage))
            }else {
            res.send(db.sendJson(data))
            }
        });
    })
    
});
module.exports = router;
