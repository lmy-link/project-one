/*
 * @Author: limy
 * @Date: 2020-12-02 16:10:09
 * @LastEditors: limy
 * @LastEditTime: 2020-12-07 10:29:58
 * @Description: 
 */
export default {
    components: {},
    props: [],
    data () {
      return {
        tell:global.router
      }
    },
    mounted () {
      this.func()
    },
    methods: {
      func(){
        this.$api.CommonApi.deleteBeyondPerson()
      }
    }
  }