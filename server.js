// require()异步加载socket.io,  然后执行回调函数构造一个IO  
  
var io = require('socket.io')(process.env.PORT || 3000);  
  
// 输出一个Log  
  
console.log('server started');  
io.on('connection',function(socket){  
  
   console.log('客户端被连接');  
  
})