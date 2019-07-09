var express = require('express');
var router = express.Router();

 /**
   * @api {get} /users/users 用户信息 
   * @apiDescription  通过文章的id查询到单条详情数据
   * @apiName users
   * @apiGroup users
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
   * @apiSampleRequest /users/users
   * @apiVersion 1.1.0
   */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
