//全局配置文件，所有部署时可能变动的
    // mysql数据库连接配置
    const database ={
        host:"62.234.146.119",//服务器地址
        user:"testboke",//数据库名
        password:"testboke",//用户
        database:"testboke"//密码
    };
    // token加密的key
    const secretOrPrivateKey="tianbaoping"

    module.exports ={
        database,
        secretOrPrivateKey,
    }