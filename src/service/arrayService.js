
/**
 * 将一维的扁平数组转换为多层级对象
 * @param  {[type]} list 一维数组，数组中每一个元素需包含id和parent_id两个属性 
 * @return {[type]} tree 多层级树状结构
 */
function buildTree(list){
	let temp = {};
	let tree = {};
	for(let i in list){
		temp[list[i].id] = list[i];
	}
	for(let i in temp){
		if(temp[i].parent_id) {
			if(!temp[temp[i].parent_id].children) {
				temp[temp[i].parent_id].children = new Object();
			}
			temp[temp[i].parent_id].children[temp[i].id] = temp[i];
		} else {
			tree[temp[i].id] =  temp[i];
		}
	}
	return tree;
}
 
function setTreeData(data){
    let tree = data.filter((father)=>{              //循环所有项
        let branchArr = data.filter((child)=>{
            return father.id == child.parentId      //返回每一项的子级数组
        });
        if(branchArr.length>0){
            father.children = branchArr;    //如果存在子级，则给父级添加一个children属性，并赋值
        }
        return father.parentId==0;      //返回第一层
    });
    return tree     //返回树形数据
}


function convert_tree_data(data) {
    let ret=[]

    for (var i = 0; i < data.length; i++) {
        if (data[i].children != undefined) {
            var temp = data[i].children;
            // 删除孩子节点
            //delete data[i].children;

            // 孩子节点加入数组末尾
            for (var j = 0; j < temp.length; j++) {
                data.push(temp[j]);
            }
        }
    }

    return data;
}
 