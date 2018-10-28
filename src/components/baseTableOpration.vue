<script>
import Vue from 'vue'

// 自定义列组件
    Vue.component('table-operation',{
        template:`<span>
        <a href="" @click.stop.prevent="update(rowData,index,field)">编辑</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index,field)">删除</a>
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