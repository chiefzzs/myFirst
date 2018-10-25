<template>
  <el-row class="tac">
  <el-col :span="24">
    <el-menu  :default-active="$route.path"
      class="el-menu-vertical-demo"
      router     
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      @select="handelSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

　　　　<template  v-for="item  in menu"  >
        　　<el-submenu :index="item.path"  v-bind:key="item.name"  v-if="item.children">
                <template slot="title">{{item.name}}</template>
                    
            　　<el-menu-item v-for="itemChild  in item.children"    :index="itemChild.path" v-bind:key="itemChild.name">
              　　{{itemChild.name}}
            　　</el-menu-item>

            </el-submenu>  

　　　　　　 <el-menu-item :index="item.path" v-bind:key="item.name" v-else>
                {{item.name}}
    　　     </el-menu-item>
    
　　　　</template>

    </el-menu>
  </el-col>
</el-row>
</template>

<style scoped>
  .over-hide{
    overflow: hidden;
  }
</style>

<script>
  import menu from '../route/route'

  export default {
    data () {
      return {
        menu: menu.items
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath,this.$route,this.$router)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handelSelect(key, keyPath) {
        console.log(key, keyPath,this.$route,this.$router)
      }
    }
  }
</script>