/*
 * @Author: limy
 * @Date: 2020-12-02 16:10:09
 * @LastEditors: limy
 * @LastEditTime: 2020-12-29 14:45:42
 * @Description: 
 */
export default {
    components: {
    },
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
        currentNodekey:'',//默认选中的节点
        selectNodes:[],//默认展开的节点
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        data1: JSON.parse(JSON.stringify(data1)),
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
      treeClick(val){
        window.sessionStorage.setItem('selectId',val.id)
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
    }
  }