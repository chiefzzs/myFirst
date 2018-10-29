
<template>
  <div  id="testTree">
       <el-header style="text-align: left; font-size: 12px">
   <el-button type="primary" icon="el-icon-plus"   @click="guiAdd(0)">增加</el-button>
            <el-button type="success" icon="el-icon-check"    @click="guiSaveTree">保存</el-button>
       </el-header>
<el-tree
  :data="data3"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  @node-click="handleNodeClick"
  @node-contextmenu="handleNodeRightClick"
  :props="defaultProps"
  :render-content="renderContent"
  >
</el-tree>

<div class="buttons">
  <el-button @click="getCheckedNodes">通过 node 获取</el-button>
  <el-button @click="getCheckedKeys">通过 key 获取</el-button>
  <el-button @click="setCheckedNodes">通过 node 设置</el-button>
  <el-button @click="setCheckedKeys">通过 key 设置</el-button>
  <el-button @click="resetChecked">清空</el-button>
</div>
</div>

 
</template>

<script>
  export default {
    methods: {
        handleNodeRightClick(data) {
        console.log(data);
      },
         handleNodeClick(data) {
       
        this.activeId=data.id
 console.log(data,this.activeId);
      },
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
       renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <div  class="node.id!=activeId?'node-show':'node-hide'" > <span>{node.label}</span> </div>
            <div  class="node.id==activeId?'node-show:'node-hide'" > <input  v-model="node.label" /> </div>
            
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
      },
      guiAdd(index){console.log(index)},
      guiSaveTree(){
          console.log("save")
      }
    },

    data() {
      return {
        activeId:null,  
        data3:[
             {
          id: 3,
          pid:-1,
          label: '一级 3'}, {
          id: 7,
          pid:3,
          label: '一级 7'},{
          id: 8,
          pid:3,
          label: '一级 8'},
        ],
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
<style>
.node-hide {
    display:none
}

.node-show {
    display:yes
}
</style>