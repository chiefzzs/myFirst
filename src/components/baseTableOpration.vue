<script>
import Vue from 'vue'

//<a href="" @click.stop.prevent="update(rowData,index,field)">编辑</a>&nbsp;
//        <a href="" @click.stop.prevent="deleteRow(rowData,index,field)">删除</a>
// <el-button type="primary" icon="el-icon-edit"      @click="update(rowData,index,field)"></el-button>

//  自定义列组件
    Vue.component('table-operation',{
        template:`<span>        
         <el-button-group>
             <el-button type="primary" icon="el-icon-plus"           @click="add(rowData,index,field)"></el-button>
             <el-button type="primary" icon="el-icon-document"       @click="copy(rowData,index,field)"></el-button>
             <el-button type="primary" icon="el-icon-arrow-up"       @click="up(rowData,index,field)"></el-button>
             <el-button type="primary" icon="el-icon-arrow-down"     @click="down(rowData,index,field)"></el-button>
             </el-button-group>
             <el-button-group>
             <el-button type="success" icon="el-icon-delete"    @click="deleteRow(rowData,index,field)"></el-button>
         </el-button-group>
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
            copy(){
               // 参数根据业务场景随意构造
               let params = {type:'copy',index:this.index,};
               this.$emit('on-custom-comp',params);
            },
            add(){
               // 参数根据业务场景随意构造
               let params = {type:'add',index:this.index,};
               this.$emit('on-custom-comp',params);
            },
            up(){
               // 参数根据业务场景随意构造
               let params = {type:'up',index:this.index,};
               this.$emit('on-custom-comp',params);
            },
            down(){
               // 参数根据业务场景随意构造
               let params = {type:'down',index:this.index,};
               this.$emit('on-custom-comp',params);
            },
            update(){

               // 参数根据业务场景随意构造
               let params = {type:'edit',index:this.index,rowData:this.rowData,field:this.field};
               this.$emit('on-custom-comp',params);
            },

            deleteRow(){

                // 参数根据业务场景随意构造
                let params = {type:'delete',index:this.index,rowData:this.rowData,field:this.field};
                this.$emit('on-custom-comp',params);

            }
        }
    })
</script>