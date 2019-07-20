var mysql = require("mysql");
var pool = mysql.createPool({
    host:"62.234.146.119",
    user:"testboke",
    password:"testboke",
    database:"testboke"
});

let query =(sql,callback)=>{//sql
    pool.getConnection(function(err,connection){
        if (err) {
             callback(err);
        }else{
            connection.query(sql, function (err,rows) {
                try {
                    callback(err,rows);
                    connection.release();
                } catch (error) {
                    console.log(error)
                }
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