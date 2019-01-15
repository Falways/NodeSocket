let app = require('express')();
let http = require('http').Server(app);
let interfaces = require('os').networkInterfaces();
let io = require('socket.io')(http)
let underscore = require('underscore')

let onlineSockets = {};
let onlineCount = 0;

// socket处理
io.on('connection',(socket) => {
    console.log(':新socket连接中=>=>=>')
    // 监听变化
    socket.on('login',(obj) => {
		socket.name = obj.userid;
		if(onlineSockets.hasOwnProperty(obj.userid)){
			onlineSockets[obj.userid] = obj.username;
			//连接总数+1
			onlineCount++;
			//广播消息
			io.emit('login',{username:obj.username});
			console.log(obj.username+'连接成功！')
			console.log(JSON.stringify(onlineSockets),onlineCount)
		}else{
			onlineSockets[obj.userid] = obj.username;
			//连接总数+1
			onlineCount++;
			//广播消息
			io.emit('login',{username:obj.username});
			console.log(obj.username+'连接成功！')
			console.log(JSON.stringify(onlineSockets),onlineCount)
		}
       
    })
	
	socket.on('handshake',(obj) => {
		let username = obj.username;
		if(username == 'socker'){
			let tosocket = underscore.findwhere(io.sockets.sockets,{id:obj.userid});
			tosocket.emit('fromServer','welcome to visit us');
			console.log('给特定连接回复消息成功！')
		}
	})
	
	socket.on('disconnect',() => {
		if(onlineSockets.hasOwnProperty(socket.name)){
			delete onlineSockets[socket.name];
			console.log(socket.name+'断开连接');
			onlineCount--;
			io.emit('logout',{message:socket.name+'用户，断开了连接'}),
			console.log(onlineSockets.toString(),onlineCount)
		}
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