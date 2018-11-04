import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex' 
Vue.use(Vuex)

 
import store from './vuex/store'

import VueResource from 'vue-resource'
Vue.use(VueResource) 


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

//region  1. table
// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
//endregion

 

// 注册到全局
import vueztree from 'vue-ztree-2.0/dist/vue-ztree-2.0.umd.min.js'
import 'vue-ztree-2.0/dist/vue-ztree-2.0.css'

Vue.use(vueztree)


//region  1. table
import   "./components/baseTableOpration"
import  "./components/baseEditCell"
//endregion

window.lodash= require('lodash');

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
/*
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: HomePage }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

*/
import menus from "./route/route"

const routes =  []


function loadComp(sub){
  if(sub.componentName && sub.path){
    sub.component= resolve => require(['.'+sub.path], resolve)
  }
}

menus.items.forEach((item) => {
  //存在下级节点则不能注册，否则找不到下级节点 
 

  if(item.children){
    item.children.forEach((sub) => {
      loadComp(sub)
      routes.push( sub)
    })
  }else{
    loadComp(item)
    routes.push(item) 
  }
 
})


const router= new VueRouter({
  routes  // (缩写) 相当于 routes: routes
})





// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
 
// 现在，应用已经启动了！
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
