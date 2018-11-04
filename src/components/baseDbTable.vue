<template>
  <div class="wrapper" id="baseDbTable">
    <baseTable :tableData="tableData" :columns="columns" :setting="cusSetting"></baseTable>
</div>
</template>

<script>
//import baseTable from "../components/baseTable"
import baseTable from "../components/baseCusCellDbTable"
import dbService from "../service/dbService"

export default {
  components:{baseTable},
  props:{
      table:{
         default:() => "demo"
      },columns:{
         default:() =>
          [
                        
                        {field: 'name', title:'姓名', isEdit:true,width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'tel', title: '手机号码',isEdit:true, width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'hobby', title: '爱好', isEdit:true,width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'address', title: '地址', isEdit:true,width: 230, titleAlign: 'center',columnAlign:'left',isResize:true},
                       
                    ]
         
      },setting:{
        default:() =>{
          callback:{}
        }
      }
  },
  data(){
    return {       
             tableData:[],
             newRow:{},
             cusSetting:{callback:{
                add:this.add,
                update:this.update,
                delete:this.delete,

        }}
    }
  },
  watch:{},
  computed:{},
  methods:{
      err(data){
        console.log("dbtable default err",data)
      },
      add(index,cb,err){
          if(!err){
            err = this.err
          }
          let therow = this.newRow

          dbService.add(this.table,{},function(data){            
            let row  = lodash.merge({},therow,data.msg)
            cb(index,row)
          },err)
      },
      update(row,cb,err){
          if(!err){
            err = this.err
          }
          dbService.update(this.table,"_id",row["_id"],row,cb,err)
      },
      delete(row,cb,err){
          dbService.delete(this.table,"_id",row["_id"],cb,err)
      },
      gets(data){
            this.tableData=data
      },
      inittablesetting(){
          this.cusSetting = lodash.merge({},this.cusSetting,this.setting)
      },
      initrow(){
                this.newRow={}                
                this.columns.forEach((ele)=>{                    
                     this.newRow[ele.field]=""                                         
                })
            },
      init(){
          dbService.gets(this.table,this.gets)
          this.inittablesetting()
          this.initrow()

      }
  },
  created(){
    this.init();
  },
  mounted(){      
  }
}
</script>
<style lang="scss" scoped>
 
</style>