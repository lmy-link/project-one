/*
 * @Author: limy
 * @Date: 2020-12-02 16:10:09
 * @LastEditors: limy
 * @LastEditTime: 2020-12-17 17:02:24
 * @Description: 
 */
export default {
    components: {},
    props: [],
    data () {
      return {
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
      this.$refs.tree.filter(val);
    }
    },
    mounted () {
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
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    }
  }