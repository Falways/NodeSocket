let app = require('express')();
let http = require('http').Server(app);
let interfaces = require('os').networkInterfaces();
let io = require('socket.io')(http)

// socket处理
io.on('connection',(socket) => {
    console.log('连接socket')
    // 监听变化
    socket.on('login',(obj) => {
        //提交消息
        io.emit('message','first blood')
    })
})

// http服务监听
function getIPAdress(){

    for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
}
http.listen('12360',() => {
    let localip = getIPAdress();
    console.log("应用实例，访问地址为 http://%s:%s", localip, '12360')
})