const mysql = require("mysql");
const configurationFile = require("./configurationFile");//配置文件
var pool = mysql.createPool({
    host:configurationFile.database.host,
    user:configurationFile.database.user,
    password:configurationFile.database.password,
    database:configurationFile.database.database,
});

let query =(sql,callback)=>{//sql
    pool.getConnection(function(err,connection){
        if (err) {
            if (typeof(callback)=="function") {
                 callback(err);
            }
           
        } else {
            connection.query(sql, function (err,rows) {
               
                if (typeof(callback)=="function") {
                    callback(err,rows);
                }
                connection.release();
            });
        }
    });
}
let sendJson=(data=[],message="成功",success=true,status=200)=>{
    return {
        status:status,
        success:success,
        result:data,
        message:message,
    }
}
let errorSendJson=(message="操作失败",data=[],success=false,status=500)=>{
    return {
        status:status,
        success:success,
        result:data,
        message:message,
    }
}
module.exports={
    query, 
    sendJson,
    errorSendJson,
}