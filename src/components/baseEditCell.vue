<script>
import Vue from 'vue'

//<a href="" @click.stop.prevent="update(rowData,index,field)">编辑</a>&nbsp;
//        <a href="" @click.stop.prevent="deleteRow(rowData,index,field)">删除</a>
// <el-button type="primary" icon="el-icon-edit"      @click="update(rowData,index,field)"></el-button>

//  自定义列组件
    Vue.component('table-operation',{
        template:`<span>        
         <a href="" @click.stop.prevent="update(rowData,index,field)">编辑</a>&nbsp;
        </span>`,
        props:{
            rowData:{
                type:Object
            },
            field:{
                type:String
            },
            index:{
                type:Number
            }
        },
        methods:{
            update(){

               // 参数根据业务场景随意构造
               let params = {type:'cell-edit',index:this.index,rowData:this.rowData,field:this.field};
               this.$emit('on-custom-comp',params);
            },
        }
    })

</script>