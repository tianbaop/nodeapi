// 在接口文档的注释更改后 用命令行运行此命令执行编译apidoc -i routes/ -o public/apidoc/
// 为了支持post json格式传参   http://www.itdaan.com/blog/2018/05/22/9f6730218af63b9c67e460967c514eb1.html
//如果部署 package里面url 改为服务器路径 例如"url": "http://62.234.146.119:12005"


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
              "username": "",dfsddfd11111
              "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi55Sw5L-d5bmzIiwiaWF0IjoxNTY0NDU2NDc2LCJleHAiOjE1NjQ0OTI0NzZ9.vyqFuZrDeOgPftnLJ-V6RfAkIAtVRkfzo3FIaY2EtvE"
          },
          "message": "成功"
      }
   * @apiSampleRequest /login
   * @apiVersion 1.0.0
   */
router.post('/',multipartMiddleware, function(req, res, next) {
    var start = new Date();
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
      next(db.errorSendJson("请输入用户名或密码"))
    } else {
      // 检验通过
      db.query(`SELECT * FROM cms_admin_user where userCode='${req.body.userCode}' and password='${req.body.password}'`,function(err,data){
        if(err){
          next(db.errorSendJson(err.message))
        }else {
          if (data.length>0) {
            if (data[0].locked==0) {//状态正常
              let date=common.GetDateStr(new Date())
              let token=common.generateToken({username:data[0].username,userCode:data[0].userCode,permissionType:data[0].permissionType})//获取token
              let datas={
                username:data[0].username,
                usercode:data[0].usercode,
                avatar:data[0].avatar,
                phone:data[0].phone,
                email:data[0].email,
                sex:data[0].sex,
                locked:data[0].locked,
                datetime:data[0].date,
                id:data[0].id,
                permissionType:data[0].permissionType,
                token:"Bearer "+token
              }
                  // 添加登录记录及更新最新登陆时间
                    let insert=`insert into cms_admin_log(description,userCode,start_time,spend_time,base_path,url,method,user_id,ip) 
                    values( '登录系统','${data[0].usercode}','${date}','${new Date() - req._startTime+ 'ms'}','${req.baseUrl}','${req.url}','
                    ${req.method}','${data[0].id}','${req.ip}');`
                    db.query(insert)
                    db.query(`update boke_users set datetime='${date}' where id=${data[0].id}`);
                  // 添加登录记录及更新最新登陆时间
                  res.send(db.sendJson(datas))
              
            } else {
              next(db.errorSendJson("当前账号已被停用！"))
            }
          } else {
            next(db.errorSendJson("账号或者密码错误"))
          }
        }
      });
    }
});

module.exports = router;
