<template>
  <div class="wrapper" id="testBaseDbTable">
  <baseDBTable :table="table" :columns="columns"></baseDBTable>
</div>
</template>

<script>
import baseDBTable from "../components/baseDbTable"
export default {
  components:{baseDBTable},
  props:{},
  data(){
    return {
        table:"test_1",
        columns: [
              {field: 'name', title:'姓名', isEdit:true,width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
              {field: 'tel', title: '手机号码',isEdit:true, width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
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