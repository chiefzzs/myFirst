<!-- http://doc.huangsw.com/vue-easytable/app.html#/table/cellEdit -->
<template>

 <div>
     <div class="tab-opra-btn">
         <el-header style="text-align: right; font-size: 12px">
         <el-button-group>
            <el-button type="primary" icon="el-icon-plus"   @click="guiAdd">增加</el-button>
            <el-button type="success" icon="el-icon-check"    @click="guiSaveTable">保存</el-button>
           </el-button-group> 
            </el-header>  
     </div>
    <div>
        <v-table
                is-horizontal-resize
                style="width:100%"
                :columns="theColumns"
                :table-data="tableData"
                row-hover-color="#eee"
                row-click-color="#edf7ff"
                @on-custom-comp="customCompFunc"
                :cell-edit-done="cellEditDone"
        ></v-table>
    </div>
</div>
</template>

<script>

    export default{
        props:{
             tableData: {
                 default:[
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                        {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                        {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                        {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                        {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
                     ]},
            columns:{

            default: [
                        
                        {field: 'name', title:'姓名', isEdit:true,width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'tel', title: '手机号码',isEdit:true, width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'hobby', title: '爱好', isEdit:true,width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'address', title: '地址', isEdit:true,width: 230, titleAlign: 'center',columnAlign:'left',isResize:true},
                       
                    ]
            },
            setting:{
                default:{
                    callback:{

                    }
                }
            }
        },
        data() {
            return {
               tableSetting:{},
               newRow:{},
               theColumns:[]
            }
        },
        methods:{
             // 单元格编辑回调
            update(rowIndex,field,newValue){
                this.tableData[rowIndex][field] = newValue;   
            },
            cellEditDone(newValue,oldValue,rowIndex,rowData,field){
                let theUpdate = this.update
                if(this.tableSetting.callback && this.tableSetting.callback.update)    {
                    
                    let row = lodash.merge({},rowData)
                    row[field]=newValue

                    this.tableSetting.callback.update( row,function(){
                         theUpdate( rowIndex,field,newValue)
                    } )
                }else{
                   theUpdate( rowIndex,field,newValue)
                }
                

                // 接下来处理你的业务逻辑，数据持久化等...
            },
            add(data){
               this.tableData.unshift(data) ;
            },
            guiAdd(){
               if(this.tableSetting.callback && this.tableSetting.callback.add) {
                   this.tableSetting.callback.add( this.add)
               }else{
                       this.tableData.unshift(lodash.merge({},this.newRow));
               }
            },
            guiSaveTable(){
               if(this.tableSetting.callback && this.tableSetting.callback.saveTable) {
                   this.tableSetting.callback.saveTable(this.tableData,function(row){
                       console.log("save table",data)
                   })
               }

            },
            delete(index){
                this.$delete(this.tableData,index);
            },
            customCompFunc(params){

                console.log(params);

                if (params.type === 'delete'){ // do delete operation
                    let theDelete = this.delete                     
                    if(this.tableSetting.callback && this.tableSetting.callback.delete) {
                            this.tableSetting.callback.delete(params.rowData ,function(data){
                                console.log("delete  table db ....",data)
                                theDelete(params.index)
                                
                            })
                    }else{
                         theDelete(params.index)
                        console.log("delete  table")
                    }
                    

                }else if (params.type === 'edit'){ // do edit operation

                    alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
                }

            },
            initcol(){
                 let head = {
                            field: 'custome', title:'序号', width: 50, titleAlign: 'center', columnAlign: 'center',
                            formatter: function (rowData,rowIndex,pagingIndex,field) {
                                return rowIndex < 3 ? '<span style="color:red;font-weight: bold;">' + (rowIndex + 1) + '</span>' : rowIndex + 1
                            }, isFrozen: true,isResize:true
                        }

                let tail =  {field: 'custome-adv', title: '操作',width: 200, titleAlign: 'center',columnAlign:'center',componentName:'table-operation',isResize:true}
                this.theColumns = lodash.merge([],this.columns)
                this.theColumns.unshift(head)
                this.theColumns.push(tail)

            },
            initrow(){
                this.newRow={}                
                this.columns.forEach((ele)=>{                    
                     this.newRow[ele.field]=""                                         
                })
            },
            init(){
                this.tableSetting = lodash.merge(this.tableSetting,this.setting)
                this.initrow()
                this.initcol()
            }
        },
        created() {
            this.init();
        },
    }

    
</script>
<style>
.tab-opra-btn{
        margin-right: 8px;
    transition: transform .3s;
    float: right;
    line-height: 48px;
    font-weight: 300;
}
</style>