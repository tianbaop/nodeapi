var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs=require("fs")
var logger = require('morgan');
var app = express();//生成一个express实例 app。

// 跨域
const corslet = require('./config/cors');
  app.use(corslet);
// 跨域

// app.use(favicon(__dirname + '/public/favicon.ico'))//：设置/public/favicon.ico为favicon图标。

app.use(express.urlencoded({ extended: true }));//加载解析urlencoded请求体的中间件。
app.use(express.json());//加载解析json的中间件。
app.set('views', path.join(__dirname, 'views'));//设置 views 文件夹为存放视图文件的目录, 即存放模板文件的地方,__dirname 为全局变量,存储当前正在执行的脚本所在的目录。
app.set('view engine', 'ejs');//设置视图模板引擎为 ejs。
app.use(express.static(path.join(__dirname, 'public')));//设置public文件夹为存放静态文件的目录。

//路由控制器
const indexRouter = require('./routes/article');
const diaryRouter = require('./routes/diary');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
app.use('/article', indexRouter);
app.use('/users', usersRouter);
app.use('/diary', diaryRouter);
app.use('/login', loginRouter);
//路由控制器

// 日志捕获不了接口抛出的异常
  // 日志配置
    let dates=new Date()
    date1=dates.getFullYear() + '-' + (dates.getMonth() + 1) + '-' + dates.getDate();
    let cb = (tokens,req,res) => {
      return [
          tokens.method(req, res),        //请求方法
          tokens.url(req, res),           //请求链接
          (tokens["status"](req, res, undefined) ||  res.statusCode),        //请求状态
          tokens.date(req,res,"web"),     //时间有三种格式,clf、iso、web,默认是clf
          tokens['remote-addr'](req,res), //远程地址
          tokens['remote-user'](req,res), //远程用户
          tokens['http-version'](req,res),    //http版本
          tokens.res(req, res, 'content-length'), '-',    //请求长度
          tokens['response-time'](req, res), 'ms',        //响应时间
          // tokens['user-agent'](req,res),      //浏览器信息
      ].join(' ')
    }
  // 日志配置
  const accessLog = fs.createWriteStream(`./log/accesslog/${date1}.log`, {flags : 'a'}); //创建一个写入流,访问日志
  // app.use(logger('dev'));//加载日志中间件。//打印到控制台  
  app.use(logger(cb, {stream : accessLog,}));      //打印到log访问日志  
// 日志
// catch 404 and forward to error handler捕获404错误，并转发到错误处理器。
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler错误处理程序
app.use(function(err, req, res, next) {
  // set locals, only providing error in development设置局部变量，只提供开发中的错误
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page呈现错误页 
  res.status(err.status || 500);
  res.send(err);
});
module.exports = app.listen(12004);
