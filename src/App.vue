<template>
  <div id="app">
     <h1>Hello App!</h1>
  <br>
    <div  >      
     <NavMenu></NavMenu>
    </div>
  <br>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  </div>
</template>

<script>
//import routes from "./route/route"
import NavMenu from "./components/NavMenu"

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app',
  components:{
    NavMenu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
 
    }
  },methods:{
     ...mapMutations(['get','post','delete','put']), //引入方法
      init:function(){
      let _this = this;
      _this.get({
        url:"/api/demo/cgi/db/db.py?op=query&filter={%22table%22:%22demo%22}",
        success(success) {
          console.log("成功",success)
        },
        error(error) {
          console.log("错误",error)
        }
      });
    },
    test:function(){
       var url="/apis/demo/cgi/db/db.py"

       this.$http.get(url,{
         params:{
            op:"query",
            filter:"{\"table\":\"demo\"}"

         }
       })
        .then((success)=>{
          console.log("成功",success)
        })
        .catch((error)=>{
          console.log("失败",error)
        })
    }
  },  created:function(){
      this.test()
    }
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
