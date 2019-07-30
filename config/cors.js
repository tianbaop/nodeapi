// 处理跨域问题



let cors = require('cors');
 
let corslet = cors({
    // 允许该域访问
    origin: ['http://localhost:8080','http://localhost:5001'],
    // 允许状态为200
    optionsSuccessStatus: 200,
    // 只应许GET\POST请求
    methods: ['GET', 'POST',"DELETE",'PUT'],
    // 只应许带content-type请求头访问
    // allowedHeaders: ['Content-Type']
});
 
module.exports = corslet;