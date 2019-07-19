#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');//引入我们上面导出的app实例。
var debug = require('debug')('myexpress:server');//引入debug模块，打印调试日志
var http = require('http');//引入http模块。

/**
 * Get port from environment and store in Express.
 */
//得到环境变量中设置的PORT或者手动设置PORT，然后赋予到app实例中。
var port = normalizePort(process.env.PORT || '3000');

/**
 * Create HTTP server.
 */
//创建http server实例，
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
//并监听端口，指定发生错误时的处理方法，指定监听成功时的回调方法。
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
