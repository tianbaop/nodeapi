// 处理跨域问题



let cors = require('cors');
 
let corslet = cors({
    // 应许改域访问
    origin: ['http://localhost:8080'],
    // 允许状态为200
    optionsSuccessStatus: 200,
    // 只应许GET\POST请求
    methods: ['GET', 'POST'],
    // 只应许带content-type请求头访问
    allowedHeaders: ['Content-Type']
});
 
module.exports = corslet;