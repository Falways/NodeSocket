<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" arr="[1,2,3]"/>-->
    {{msg}}
    <button @click="shadehand">connect</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import VueSocketIO from 'vue-socket.io';

@Component({
  components: {
    HelloWorld,
  },
})

export default class Home extends Vue {
  public data() {
    return {
      msg : 'off',
      test : 'bb'
    }
  }
  shadehand(){
     Vue.use(VueSocketIO,socketio('http://192.168.68.2:12360'));
     this.$socket.emit('a')
  }

}

</script>
