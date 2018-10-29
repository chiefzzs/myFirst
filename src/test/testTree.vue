<template>
  <div  id="testTree">
   
        <h1>Hello Ztree(非异步)</h1>
        <div  v-if='ztreeDataSource.length>0'>
           <vue-ztree :list.sync='ztreeDataSource' :func='nodeClick' :expand='expandClick' :contextmenu='contextmenuClick' :is-open='true'></vue-ztree>
        </div>
        <div>
                {{ztreeDataSource}}
        </div>
        
</div>

 
</template>

<script>
 

export default {
  components:{ },
  props:{},
  data(){
    return {
         msg: 'Hello Vue-Ztree-2.0!',
            ztreeDataSource:[{
                        id:1,
                        name:"音乐",
                        children:[],
                        url:"http://www.baidu.com"
            },{
                id:2,
                name:"视频",
                children:[{
                    id:3,
                    name:"电影",
                    children:[{
                        id:4,
                        name:"国产电影",
                        url:""
                    },{
                        id:5,
                        name:"好莱坞电影",
                        url:""
                    },{
                        id:6,
                        name:"小语种电影",
                        url:""
                    }]
                },{
                    id:7,
                    name:"短片",
                    children:[{
                        id:9,
                        name:"电视剧",
                        url:""
                    },{
                        id:10,
                        name:"短片",
                        url:""
                    }]
                }]
            }]
    }
  },
  watch:{},
  computed:{},
  methods:{
 // 点击节点
    nodeClick:function(m){
       console.log(JSON.parse(JSON.stringify(m)));
    },
    // 右击事件
    contextmenuClick:function(m){
       console.log(m)
       console.log("触发了自定义的contextmenuClick事件");
    },
    expandClick(){

    },
    
  },
  created(){},
  mounted(){}
}
</script>
<style  >
.ztree li {
    line-height: 24px;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
    text-align: left;
    white-space: nowrap;
    display: inherit;
}
</style>