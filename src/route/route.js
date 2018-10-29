
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
import DemoTablePage from "../page/demoTable.vue"
import testBaseTable from "../test/testBaseTable"
import testDbService from "../test/testDbService"
import baseDbTable from "../components/baseDbTable"
import testBaseDbTable from "../test/testBaseDbTable"
import testTree from '../test/testTree';
import testTree1 from '../test/testTree1';
import testTree2 from '../test/testTree2';

export default {
       items:[{
                name:"基础测试",      
                path:"/test"  ,
                children:[{
                    name:"基础表格测试",
                    path:"/test/baseTable",
                    component:testBaseTable
                },{
                    name:"基础数据库测试",
                    path:"/test/testDbService",
                    component:testDbService
                },{
                    name:"baseDbTable测试",
                    path:"/test/baseDbTable",
                    component:baseDbTable
                },{
                    name:"testDbTable测试",
                    path:"/test/testDbTable",
                    component:testBaseDbTable
                },{
                    name:"testtree",
                    path:"/test/testtree",
                    component:testTree
                },{
                    name:"testtree1",
                    path:"/test/testtree1",
                    component:testTree1
                },{
                    name:"testtree2",
                    path:"/test/testtree2",
                    component:testTree2
                },
            ]
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
                name:"表格测试",
                path:"/page/demotable" , 
                component: DemoTablePage
            }
        ] 
}