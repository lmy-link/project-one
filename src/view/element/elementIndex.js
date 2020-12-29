/*
 * @Author: limy
 * @Date: 2020-12-02 16:10:09
 * @LastEditors: limy
 * @LastEditTime: 2020-12-29 18:04:21
 * @Description: 
 */
let id = 1000;
export default {
    components: {},
    props: [],
    data () {
      const data1 = [{
        id: 143543,
        label: '一级 1',
        priority:'普通',
        state:'进行中',
        children: [{
          id: 44534,
          priority:'紧急',
          state:'进行中',
          label: '二级 1-1',
          children: [{
            id: 45349,
            priority:'紧急',
            state:'已完成',
            label: '三级 1-1-1'
          }, {
            id: 453410,
            priority:'重要',
            state:'待分配',
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 45432,
        priority:'普通',
        state:'进行中',
        label: '一级 2',
        children: [{
          id: 54534,
          state:'已完成',
          priority:'紧急',
          label: '二级 2-1',
          children:[{
            id: 54545634,
            state:'已完成',
            priority:'紧急',
            label: '二级 2-1-1',
          }]
        }, {
          id: 454366,
          priority:'紧急',
          state:'待分配',
          label: '二级 2-2'
        }]
      }, {
        id: 5476573,
        priority:'普通',
        state:'进行中',
        label: '一级 3',
        children: [{
          id: 7658765,
          priority:'紧急',
          state:'已完成',
          label: '二级 3-1'
        }, {
          id: 865765,
          priority:'较低',
          state:'待分配',
          label: '二级 3-2'
        },{
          id: 8657465,
          priority:'较低',
          state:'已完成',
          label: '二级 3-2'
        }]
      }];
      return {
        isChange:false,
        selectNodes:[],//默认展开的节点
        currentNodekey:'',//默认选中的节点
        data: [{
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
        },],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        isSelectedList:[],
        filterText: '',
        filterText1: '',
        data1: JSON.parse(JSON.stringify(data1)),
      }
    },
    watch:{
      isSelectedList (val) {
        this.$nextTick(() => {
            if (this.isSelectedList.length >= 0) {
                var arr = [];
                for (var i = 0; i < this.isSelectedList.length; i++) {
                    arr.push(this.isSelectedList[i].id);
                }
            }
            this.$refs.tree.setCheckedKeys(arr);
        });
      },
    filterText(val) {
      this.$refs.tree.filter(this.filterText);
    },
    filterText1(val) {
      this.$refs.tree.filter(this.filterText1);
    }
    },
    mounted () {
      //缓存上一次的选中节点
      let selectId = window.sessionStorage.getItem('selectId')
      if(selectId){
        this.selectNodes.push(selectId)
        this.currentNodekey = selectId
        this.$refs.tree1.setCurrentKey(this.currentNodekey);
      } else {
        this.currentNodekey = 45349
        this.selectNodes = ['45349']
        this.$refs.tree1.setCurrentKey(this.currentNodekey);
      }
    },
    methods: {
      checkHandler(val){
        this.isSelectedList = this.$refs.tree.getCheckedNodes();
        this.isSelectedList.forEach((item, index) => {
            if (item.children) {
              item.children.forEach((item,index) => {
                if(item.children){
                  this.isSelectedList.splice(index, 1);
                }
              })
              this.isSelectedList.splice(index, 1);
            }
        });
      },
      handleClose(tag){
        this.isSelectedList.splice(this.isSelectedList.indexOf(tag), 1);
      },
      filterNode(value, data) {
        let flag = true
        if(this.filterText){
            if(data.label.indexOf(this.filterText) == -1){
              flag = false
            }
        }
        if(this.filterText1){
          if(data.id.toString().indexOf(this.filterText1) == -1){
            flag = false
          }
        }
        if(flag){
          return true
        } else {
          return false
        }
      },
      func(data){
        if(data.children){
          let num = 0;
          data.children.forEach(item => {
            if(item.state == '已完成'){
              num++
            }
          })
          return num
        } else {
          return 0
        }
      },
      treeClick(val){
        window.sessionStorage.setItem('selectId',val.id)
      }
    }
  }