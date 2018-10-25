
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar1</div>' }
const SubBar = { template: '<div>bar2</div>' }
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
import HomePage from "../page/home.vue"

export default {
       items:[{
                name:"foo",
                path:"/foo" , 
                component: Foo 
              },{
                name:"bar",
                path:"/bar" , 
                children:[
                    {
                        name:"bar1",
                        path:"/bar/a" , 
                        component: Bar 
                    },
                    {
                        name:"bar2",
                        path:"/bar/b" , 
                        component: SubBar 
                    }
                ],        
            },{
                name:"home",
                path:"/home" , 
                component: HomePage
            }
        ] 
}