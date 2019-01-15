<template>
  <div>
    <button @click="toConnect">connect</button>
    <button @click="swing">rock</button>
  </div>
</template>

<script>

  import io from 'socket.io-client';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      websock: null
    }
  },
  methods:{
    toConnect(){
      const socket = io('http://192.168.68.2:12360');
      console.log(socket)
      let userid = Math.random().toString(36).substr(2);
      let username = 'socker';
      let userInfo = {userid,username}
      socket.emit('login', userInfo);
      socket.on('login',(data) => {
        console.log('服务端通知：'+data.username)
      })
      socket.on('error', (error) => {
        console.log(error)
      });
      socket.on('disconnect', (reason) => {
        console.log('断开连接。。。')
      });
      //socket.close(console.log('close...'));
    },
    swing(){

    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
