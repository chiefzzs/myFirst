
<template>
  <div class="wrapper" id="testHttp">
   {{log}}

</div>
</template>

<script>
import dbService from "../service/dbService"


export default {
  components:{},
  props:{},
  data(){
    return {
       log:""

    }
  },
  watch:{},
  computed:{},
  methods:{
      delete( data){
        console.log("delte" , data)
      },
      gets:function(data){
        this.log += "get:\n"+JSON.stringify(data)+"\n"
        console.log(data)
        data.msg.forEach(element => {
          console.log(element)
          dbService.delete("demo","_id",element._id,this.delete)
        });
      },   
      add:function(data) {
        console.log("add",data)
        data.msg._id 
      }
  },
  created(){
    
     dbService.gets("demo",this.gets)
     let data={"a":1,"b":2}
     dbService.add("demo",data,this.add)


  },
  mounted(){}
}
</script>
<style lang="scss" scoped>
 
</style>