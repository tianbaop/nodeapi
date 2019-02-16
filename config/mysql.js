var mysql = require("mysql");
var pool = mysql.createPool({
    host:"132.232.110.253",
    user:"tianbaoping",
    password:"tianbaoping",
    database:"sqltianbaoping"
});

let query =(sql,callback)=>{//sql
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
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
module.exports={
    query, 
    sendJson,
}