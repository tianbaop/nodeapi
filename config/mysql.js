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
let sendJson=(data=[],message="成功",status=200)=>{
    return {
        result:data,
        message:message,
        status:status,
        success:true,
    }
}
let errorSendJson=(message="操作失败",status=500)=>{
    return {
        result:null,
        message:message,
        status:status,
        success:false,
    }
}
module.exports={
    query, 
    sendJson,
    errorSendJson,
}