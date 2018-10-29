
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
                    path:"/test/testBaseTable",
                    componentName:"testBaseTable",                    
                    //component:testBaseTable
                },{
                    name:"基础数据库测试",
                    path:"/test/testDbService",
                    componentName:"testDbService"
                },{
                    name:"baseDbTable测试",
                    path:"/components/baseDbTable",
                    componentName:"baseDbTable"
                },{
                    name:"testDbTable测试",
                    path:"/test/testBaseDbTable",
                    componentName:"testBaseDbTable"
                },{
                    name:"testtree",
                    path:"/test/testTree",
                    componentName:"testTree"
                },{
                    name:"testtree1",
                    path:"/test/testTree1",
                    componentName:"testTree1"
                },{
                    name:"testtree2",
                    path:"/test/testTree2",
                    componentName:"testTree2"                    
                },
            ]
              } ,{
                name:"表格测试",
                path:"/page/demoTable" , 
                componentName: "DemoTablePage"
            }
        ] 
}