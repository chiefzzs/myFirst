<template>
  <div class="wrapper" id="compManage">
  <baseCusCellDbTable :table="table" :columns="columns"></baseCusCellDbTable>
</div>
</template>

<script>
import baseCusCellDbTable from "../components/baseCusCellDbTable"

export default {
  components:{baseCusCellDbTable},
  props:{},
  data(){
    return {
        table:"compManage",
        columns: [
              {field: 'name', title:'组件名称', isEdit:true,width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
              {field: 'path', title: '组件路径',isEdit:true, width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
              {field: 'test', title: '组件测试',  width: 150, titleAlign: 'center',columnAlign:'center',isResize:true,
                componentName:'table-cell-operation'
              },
           ]
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
 
</style>