# NodeSocket
    此项目是基于node的，服务器推送demo。    
# Author
    Falways
# Version 
    0.0.1
# CreateDate 
    2019/1/12
    
# 系统环境
    前端：Vue + TypeScript
    后端：Express 
    
# 安装依赖
    yarn install
     
# 启动项目
    cd /client 
    yarn run dev
    cd /server 
    node app.js
    
# socket讲解
    WebSocket可以分为协议（ Protocol ）和 API 两部分
    WebSocket协议的建立过程
    为了实现WebSocket通信，首先需要客户端发起一次普通HTTP请求（也就是说，WebSocket的建立是依赖HTTP的）
    请求报文可能像这样：
    GET ws://websocket.example.com/ HTTP/1.1
    Host: websocket.example.com
    Upgrade: websocket
    Connection: Upgrade
    Origin: http://example.com
    Sec-WebSocket-Key:pAloKxsGSHtpIHrJdWLvzQ==
    Sec-WebSocket-Version:13
    
        
     
  
      
        
        