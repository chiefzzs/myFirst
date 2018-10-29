
<template>
  <div  id="testTree">
      <el-button type="primary" icon="el-icon-plus"   @click="guiAdd(0)">增加</el-button>
            <el-button type="success" icon="el-icon-check"    @click="guiSaveTree">保存</el-button>
<el-tree
  :data="data2"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  :expand-on-click-node="false"
  @node-click="handleNodeClick"
  @node-contextmenu="handleNodeRightClick"
  :props="defaultProps"  
  >
  <span class="custom-tree-node" slot-scope="{ node, data }">
        <span  v-if="data.id!=activeId"  >{{ node.label }}</span>
        <template v-if="data.id==activeId" >
              <input     v-model="data.label" /> 
        </template>     
        <span>
                      <el-button
            type="text"
            size="mini"
            @click="() => test(node,data)">
            test
          </el-button>

          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
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
 let id = 1000;
  export default {
    methods: {
        test(node,data){
             console.log(node,data);
        },
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
        append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
    },

    data() {
      return {
          activeId:null,
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