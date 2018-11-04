<template>
  <div class="wrapper" id="baseCusCellDbTable">
  <baseTable :table="tableData" :columns="columns" :setting="cusSetting">
  </baseTable>

  <component v-bind:is="curCellEditor" ></component>
</div>
</template>

<script>
//import baseDBTable from "../components/baseDbTable"
import baseTable from "../components/baseTable"
import settingService from "@/service/settingService"

const demoComp = { template: '<div>default cell edit</div>' }

export default {
  components:{baseTable,demoComp},
  props:{
      tableData:{
         default: () => [],
      },columns:{
         default:() =>
           [
              {field: 'name', title:'姓名', isEdit:true,width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
              {field: 'tel', title: '手机号码',isEdit:true, width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
              {field: 'info', title: '个人介绍',  width: 150, titleAlign: 'center',columnAlign:'center',isResize:true,
                componentName:'table-cell-operation'
               },
           ],
         
      },setting:{
        default:{
          curCellEditor:"demoComp",
          callback:{}
        }
      }
  },
  data(){
    return {
           curCellEditor:"",
           cusSetting:{
             callback:{
            }
           }
    }
  },
  watch:{},
  computed:{},
  methods:{

  },
  created(){
     this.cusSetting = settingService.init_setting(this.cusSetting,this.setting)
      this.curCellEditor =  this.cusSetting.curCellEditor
      console.log("baseCusCellDbTable",this.cusSetting,this.$props)
  },
  mounted(){
     
  }
}
</script>
<style lang="scss" scoped>
 
</style>