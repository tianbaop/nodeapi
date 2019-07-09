var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs=require("fs")
var logger = require('morgan');
const jwt = require('./config/token');//token验证身份
var indexRouter = require('./routes/article');
var diaryRouter = require('./routes/diary');
var usersRouter = require('./routes/users');
var app = express();//生成一个express实例 app。

// 跨域
  var cors = require('cors');     //安装cors模块
  app.use(cors());//不区分路劲所有接口都可以跨域
// 跨域

// app.use(favicon(__dirname + '/public/favicon.ico'))//：设置/public/favicon.ico为favicon图标。
app.use(logger('dev'));//加载日志中间件。
app.use(express.urlencoded({ extended: true }));//加载解析urlencoded请求体的中间件。
app.use(express.json());//加载解析json的中间件。
app.set('views', path.join(__dirname, 'views'));//设置 views 文件夹为存放视图文件的目录, 即存放模板文件的地方,__dirname 为全局变量,存储当前正在执行的脚本所在的目录。
app.set('view engine', 'ejs');//设置视图模板引擎为 ejs。
app.use(express.static(path.join(__dirname, 'public')));//设置public文件夹为存放静态文件的目录。

//路由控制器
app.use('/article', indexRouter);
app.use('/users', usersRouter);
app.use('/diary', diaryRouter);
//路由控制器


// catch 404 and forward to error handler捕获404错误，并转发到错误处理器。
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app.listen(12004);
