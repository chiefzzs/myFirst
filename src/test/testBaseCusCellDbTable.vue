<template>
  <div class="wrapper" id="testBaseDbTable">
  <baseCusCellDbTable :table="table" :columns="columns"></baseCusCellDbTable>
</div>
</template>

<script>
import baseCusCellDbTable from "../components/baseCusCellDbTable"
export default {
  components:{baseDBTable},
  props:{},
  data(){
    return {
        table:"test_1",
        columns: [
              {field: 'name', title:'姓名', isEdit:true,width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
              {field: 'tel', title: '手机号码',isEdit:true, width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
              {field: 'info', title: '个人介绍',  width: 150, titleAlign: 'center',columnAlign:'center',isResize:true,
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