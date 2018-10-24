<template>
  <div id="app">
     <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <!--
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-link to="/">home</router-link>
    !-->
    <div  >
      <router-link  v-for="route in routes"  v-bind:to="route.path" > {{route.label}}</router-link>
    </div>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  </div>
</template>

<script>
import routes from "./route/route"
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      routes:routes.items
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
