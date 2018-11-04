<!-- http://doc.huangsw.com/vue-easytable/app.html#/table/cellEdit -->
<template>

 <div>
     <div class="tab-opra-btn">
         <el-header style="text-align: right; font-size: 12px">
         <el-button-group>
            <el-button type="primary" icon="el-icon-plus"   @click="guiAdd(0)">增加</el-button>
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
                 default:() =>[
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                        {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                        {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                        {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                        {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
                     ]},
            columns:{

            default: () =>[
                        
                        {field: 'name', title:'姓名', isEdit:true,width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'tel', title: '手机号码',isEdit:true, width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'hobby', title: '爱好', isEdit:true,width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'address', title: '地址', isEdit:true,width: 230, titleAlign: 'center',columnAlign:'left',isResize:true},
                       
                    ]
            },
            setting:{
                default:() =>{
                    callback:{

                    }
                }
            }
        },
        data() {
            return {
               cusSetting:{},
               newRow:{},
               theColumns:[],
               isModify:false,
            }
        },
        methods:{
             // 单元格编辑回调
            update(rowIndex,field,newValue){
                this.tableData[rowIndex][field] = newValue;   
            },
            cellEditDone(newValue,oldValue,rowIndex,rowData,field){
                if(newValue==oldValue){
                    console.log("update newValue== oldValue,so ,dont do update ")
                }
                let theUpdate = this.update
                if(this.cusSetting.callback && this.cusSetting.callback.update)    {
                    
                    let row = lodash.merge({},rowData)
                    row[field]=newValue

                    this.cusSetting.callback.update( row,function(){
                         theUpdate( rowIndex,field,newValue)
                    } )
                }else{
                   theUpdate( rowIndex,field,newValue)
                }
                

                // 接下来处理你的业务逻辑，数据持久化等...
            },
            add(index,data){
                this.tableData.splice(index,0,data)             
            },
            
            guiAdd(index ,cb){                             
               
               if(this.cusSetting.callback && this.cusSetting.callback.add) {
                   
                   if(cb){
                       this.cusSetting.callback.add( index, cb)
                   }else{
                       this.cusSetting.callback.add( index, this.add)
                   }

               }else{
                    if(cb){
                        cb(index,lodash.merge({},this.newRow))   
                    }else{
                        this.add( index, lodash.merge({},this.newRow));                 
                    }                   
               }
              
            },
            guiSaveTable(){
               if(this.cusSetting.callback && this.cusSetting.callback.saveTable) {
                   this.cusSetting.callback.saveTable(this.tableData,function(row){
                       console.log("save table",data)
                   })
               }

            },
            delete(index){
                this.$delete(this.tableData,index);
            },
            swapItems : function(arr, index1, index2) {
                arr[index1] = arr.splice(index2, 1, arr[index1])[0];
                return arr;
            },

            customCompFunc(params){

                console.log(params);

                if (params.type === 'delete'){ // do delete operation
                    let theDelete = this.delete                     
                    if(this.cusSetting.callback && this.cusSetting.callback.delete) {
                            this.cusSetting.callback.delete(params.rowData ,function(data){
                                console.log("delete  table db ....",data)
                                theDelete(params.index)
                                
                            })
                    }else{
                         theDelete(params.index)
                        console.log("delete  table")
                    }
                    

                }
                if (params.type === 'edit'){ // do edit operation
                    //alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
                }

                if (params.type === 'add'){ // do edit operation
                    //alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
                    this.guiAdd(params.index)
                }

                if (params.type === 'copy'){ // do edit operation
                    //alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
                      let curRow = {}

                      for(var p in this.newRow ){
                        curRow[p] = this.tableData[params.index][p]
                      }
                      let theAdd = this.add
                      this.guiAdd(params.index,function(index,data){
                            let copyData = lodash.merge({}, data, curRow)
                            theAdd(index+1,copyData)
                      })
                }

                if (params.type === 'up'){ // do edit operation
                    //alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
                    this.isModify=true
                    //index=>index-1
                    //index-1=>index
                    let index = params.index 
                    if(index>0){                         
                        this.swapItems(this.tableData, index, index - 1);
                    }
                }

                if (params.type === 'down'){ // do edit operation
                    //alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
                    this.isModify=true
                    
                    let index = params.index 
                    if(index< (this.tableData.length-1)){                         
                        this.swapItems(this.tableData, index, index + 1);
                    }
                }

                if(params.type === 'cell-edit'){
                    if(this.cusSetting.callback && this.cusSetting.callback.celledit) {
                        this.cusSetting.callback.celledit(this.tableData, params,cellEditDone)
                     }
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
                this.cusSetting = lodash.merge(this.cusSetting,this.setting)
                this.initrow()
                this.initcol()
            }
        },
        created() {
            this.init();
            console.log("baseTable", this.$props)
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