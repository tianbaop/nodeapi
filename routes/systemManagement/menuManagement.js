// 菜单管理
var express = require('express');
var router = express.Router();
var db = require('../../config/mysql');//引入mysql文件
var common = require('../../config/common');//引入token类文件
const Joi = require('joi');//数据模型校验模块  https://www.cnblogs.com/zzbo/p/5906101.html
var multipart = require('connect-multiparty');// 引入解决post参数接收
var multipartMiddleware = multipart();//如果全局获取post参数设置没生效，就使用此方法放在路由后面
//  菜单管理查询 分页
 {
   /**
   * @api {post} /menuManagement/GetAll  菜单管理查询 分页
   * @apiDescription  菜单管理查询 分页
   * @apiName GetAll
   * @apiGroup menuManagement
   * @apiParam {int} moduleParentId  必填如果是一级就传0其他的填上一级的id
   * @apiParam {int} skipCount  分页跳过多少条数据
   * @apiParam {int} maxResultCount  分页最大获取多少条数据
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
            ],
            "message": "成功"
        }
   * @apiSampleRequest /menuManagement/GetAll
   * @apiVersion 1.1.0
   */
 }
router.post('/GetAll', function(req, res, next) {
    common.checkToken(req, res,()=>{//验证token
        if (req.body.moduleId) {
            var sqlCOUNT=`select COUNT(id) from cms_MenuManagement where superiorMenuId='${req.body.moduleId}' or id='${req.body.moduleId}';`
        } else if (req.body.moduleName) {
            var sqlCOUNT=`select COUNT(id) from cms_MenuManagement where moduleName='${req.body.moduleName}';`
        }else {
            var sqlCOUNT=`select COUNT(id) from cms_MenuManagement;`                
        }
        db.query(sqlCOUNT,(err,COUNT)=>{
            if(err){
                res.status(500).send(db.errorSendJson(err.sqlMessage))
            }else {
                allDataNun=COUNT[0]['COUNT(id)']
                if (req.body.moduleId) {
                    var sql=`select * from cms_MenuManagement where superiorMenuId='${req.body.moduleId}' or id='${req.body.moduleId}' limit ${req.body.skipCount},${req.body.maxResultCount};`
                } else if (req.body.moduleName) {
                    var sql=`select * from cms_MenuManagement where moduleName='${req.body.moduleName}' limit ${req.body.skipCount},${req.body.maxResultCount};`  
                } else {
                    var sql=`select * from cms_MenuManagement limit ${req.body.skipCount},${req.body.maxResultCount};`                
                }
                db.query(sql,(err,data)=>{
                    if(err){
                    res.status(500).send(db.errorSendJson(err.sqlMessage))
                    }else {
                        for (const a of data) {
                            a.superiorMenuName=""
                            if (a.status==1) {
                                a.statusName="启用"
                            }else{
                                a.statusName="停用"
                            }
                        }
                        for (const item of data) {
                            for (const x of data) {
                                if (item.superiorMenuId===x.id) {
                                    item.superiorMenuName=x.moduleName
                                }
                            }
                        }
                        let item={
                            item:data,
                            totalCount:allDataNun
                        }
                    res.send(db.sendJson(item))
                    }
                });
            }
        })
    })
    
});

//  菜单管理查询 下拉树
{
    /**
    * @api {post} /menuManagement/GetTree  菜单管理下拉树
    * @apiDescription  菜单管理下拉树
    * @apiName GetTree
    * @apiGroup menuManagement
    * @apiParam {int} moduleParentId  必填如果是一级就传0其他的填上一级的id
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
             ],
             "message": "成功"
         }
    * @apiSampleRequest /menuManagement/GetTree
    * @apiVersion 1.1.0
    */
}
 router.post('/GetTree', function(req, res, next) {
    common.checkToken(req, res,()=>{//验证token
        if (req.body.status===1||req.body.status===0) {
            var sql=`select * from cms_MenuManagement where status='${req.body.status}';`
        } else {
            var sql=`select * from cms_MenuManagement;`                
        }
        db.query(sql,(err,data)=>{
            if(err){
                res.status(500).send(db.errorSendJson(err.sqlMessage))
            }else {
                var menuDatas=[]
                for (const item of data) {
                    if(item.superiorMenuId==0){
                        item.children=[]
                        menuDatas.push(item)
                    } 
                }
                for (const item of data) {
                    if(item.superiorMenuId!==0){
                        for (const x of menuDatas) {
                                if (item.superiorMenuId==x.id) {
                                    x.children.push(item)
                                }
                        }
                    }
                }
                let item={
                    item:menuDatas,
                }
            res.send(db.sendJson(item))
            }
        });
    })
     
 });

 //  菜单管理查询 通过id查询
 {
    /**
    * @api {get} /menuManagement/Getitem  菜单管理查询 通过id查询
    * @apiDescription  菜单管理查询 通过id查询
    * @apiName Getitem
    * @apiGroup menuManagement
    * @apiParam {int} id  必填
    * @apiHeader {String} Authorization 用户授权token
    * @apiSuccessExample {json} 返回格式:
    *    {
             "status": 200,
             "success": true,
             "result": [
             ],
             "message": "成功"
         }
    * @apiSampleRequest /menuManagement/Getitem
    * @apiVersion 1.1.0
    */
  }
 router.get('/Getitem', function(req, res, next) {
     common.checkToken(req, res,()=>{//验证token
        var sql=`select * from cms_MenuManagement where id=${req.query.id};`
        db.query(sql,(err,data)=>{
            if(err){
                res.status(500).send(db.errorSendJson(err.sqlMessage))
            }else {
                let item={
                    item:data.length>0?data[0]:[]
                }
            res.send(db.sendJson(item))
            }
        });
     })
     
 });
//  菜单管理新增数据 
{
    /**
    * @api {post} /menuManagement/add  菜单管理新增数据
    * @apiDescription  菜单管理新增数据
    * @apiName add
    * @apiGroup menuManagement
    * @apiParam {String} modularCoding  模块编码
    * @apiParam {String} moduleName  模块名称
    * @apiParam {String} multilingualKey  多语言Key
    * @apiParam {int} superiorMenuId  上级菜单
    * @apiParam {String} icon  图标
    * @apiParam {String} routeAddress  地址
    * @apiParam {String} sort  排序
    * @apiParam {String} remarks  备注
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
             ],
             "message": "成功"
         }
    * @apiSampleRequest /menuManagement/add
    * @apiVersion 1.1.0
    */
}
router.post('/add', function(req, res, next) {
   common.checkToken(req, res,()=>{//验证token
    req.body.superiorMenuId=req.body.superiorMenuId===""?0:req.body.superiorMenuId
        const schema = Joi.object().keys({
            modularCoding: Joi.string().required(),
            moduleName:Joi.string().required(),
            multilingualKey:Joi.string().allow(''),
            superiorMenuId:Joi.number().required(),
            icon:Joi.string().allow(''),
            status:Joi.number().required(),
            routeAddress:Joi.string().allow(''),
            sort:Joi.string().allow(''),
            remarks:Joi.string().allow(''),
        }).with("superiorMenuId", "routeAddress")
        var output = Joi.validate(req.body, schema);
        if (output.error) {
            res.status(500).send(db.errorSendJson("请填写必填字段！",output.error))
        } else {
            db.query(`select * from cms_MenuManagement where modularCoding='${req.body.modularCoding}';`,(err,data)=>{
                if(err){
                res.status(500).send(db.errorSendJson(err.sqlMessage))
                }else {
                    if (data.length>0) {
                        res.status(500).send(db.errorSendJson("模块编码不能重复！",output.error))
                    } else {
                        db.query(`insert into cms_MenuManagement(modularCoding,moduleName,multilingualKey,superiorMenuId,icon,routeAddress,sort,remarks,status) 
                        values( '${req.body.modularCoding}','${req.body.moduleName}','${req.body.multilingualKey}',${req.body.superiorMenuId},
                        '${req.body.icon}','${req.body.routeAddress}','${req.body.sort}','${req.body.remarks}','${req.body.status}');`, (err, datas) => {
                                if (err) {
                                    res.status(500).send(db.errorSendJson(err.sqlMessage))
                                } else {
                                    res.send(db.sendJson([]))
                                }
                        });
                    }
                   
                }
            })
        }
   })
    
});

//  菜单管理删除数据
{
    /**
    * @api {post} /menuManagement/delete  菜单管理删除数据
    * @apiDescription  菜单管理删除数据
    * @apiName delete
    * @apiGroup menuManagement
    * @apiParam {Array} ids  id数组集合
    * @apiHeader {String} Authorization 用户授权token
    * @apiSuccessExample {json} 返回格式:
    *    {
             "status": 200,
             "success": true,
             "result": [
             ],
             "message": "成功"
         }
    * @apiSampleRequest /menuManagement/delete
    * @apiVersion 1.1.0
    */
}
router.post('/delete', function(req, res, next) {
    common.checkToken(req, res,()=>{//验证token
        let datas=req.body.ids.join(","); 
        db.query(`DELETE from cms_MenuManagement where id in(${datas});`,(err,data)=>{
            if(err){
            res.status(500).send(db.errorSendJson(err.sqlMessage))
            }else {
                res.send(db.sendJson()) 
            }
        })
    })
    
});
//  菜单管理修改数据启用状态
{
    /**
    * @api {post} /menuManagement/updateStatus  菜单管理修改数据启用状态
    * @apiDescription  菜单管理修改数据启用状态
    * @apiName updateStatus
    * @apiGroup menuManagement
    * @apiParam {Array} moduleList  模块修改数据的集合
    * @apiParamExample {json} 参数实例:
    *   moduleList[
    *       {
    *           id:1,//id
    *           status:1,//状态{1为启用，0为停用}
    *       }
    *   ] 
    * @apiHeader {String} Authorization 用户授权token
    * @apiSuccessExample {json} 返回格式:
    *    {
             "status": 200,
             "success": true,
             "result": [
             ],
             "message": "成功"
         }
    * @apiSampleRequest /menuManagement/updateStatus
    * @apiVersion 1.1.0
    */
}
router.post('/updateStatus', function(req, res, next) {
   common.checkToken(req, res,()=>{//验证token
        let ids=[]
        for (const item of req.body.moduleList) {
            ids.push(item.id)
        }
        ids=ids.join(",")
        if (req.body.moduleList.length>0) {
            let datas=`UPDATE cms_MenuManagement SET status =${req.body.moduleList[0].status} WHERE id IN (${ids});`
            console.log(datas)
            db.query(datas,(err,data)=>{
                if(err){
                res.status(500).send(db.errorSendJson(err.sqlMessage))
                }else {
                    res.send(db.sendJson([]))
                    
                }
            })
        }else{
             res.send(db.errorSendJson(""))
        }
        
   })
    
});
//  菜单管理单条数据修改详情数据
{
    /**
    * @api {post} /menuManagement/update  菜单管理单条数据修改详情数据
    * @apiDescription  菜单管理单条数据修改详情数据
    * @apiName update
    * @apiGroup menuManagement
    * @apiParam {Array} moduleList  模块修改数据的集合
    * @apiParamExample {json} 参数实例:
    *   moduleList[
    *       {
    *           id:1,//id
    *           status:1,//状态{1为启用，0为停用}
    *       }
    *   ] 
    * @apiHeader {String} Authorization 用户授权token
    * @apiSuccessExample {json} 返回格式:
    *    {
             "status": 200,
             "success": true,
             "result": [
             ],
             "message": "成功"
         }
    * @apiSampleRequest /menuManagement/update
    * @apiVersion 1.1.0
    */
}
router.post('/update', function(req, res, next) {
   common.checkToken(req, res,()=>{//验证token
            let datas=`UPDATE cms_MenuManagement SET modularCoding ='${req.body.modularCoding}', moduleName ='${req.body.moduleName}', 
            multilingualKey ='${req.body.multilingualKey}', superiorMenuId =${req.body.superiorMenuId?req.body.superiorMenuId:0}, icon ='${req.body.icon}',  
            routeAddress ='${req.body.routeAddress}', sort ='${req.body.sort}',  remarks ='${req.body.remarks}', status =${req.body.status}  WHERE id IN (${req.body.id});`
            console.log(datas)
            db.query(datas,(err,data)=>{
                if(err){
                res.status(500).send(db.errorSendJson(err.sqlMessage))
                }else {
                    res.send(db.sendJson([]))
                    
                }
            })
        
   })
    
});
module.exports = router;
