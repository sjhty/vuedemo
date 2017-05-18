<template>
  <div>
    <h1 class="logo">cnodejs Api Test</h1>
    <ul class="list">
      <li v-for="item in lists" v-text="item.pkgName"></li>
    </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            lists:[]
        }
    },
    created() {
        let params = {
            rows: 10,
            page: 1,
            _tk: '63bd6eb7-5488-4a0e-b3d8-cdd31b83b071'
        }
        this.getPackageList(params)
    },
    methods: {
        getData:function(params) {
            var _this = this;
            if (!params) params = {}
            _this.$api.get('topics',params,function(con){
                //debugger
                console.log(con.data)
                _this.lists = con.data
            })
        },

        getPackageList:function(params) {
            var _this = this;
            if (!params) params = {}
            _this.$api.get('auth/pkgList',params,function(res){
                console.log(res.data)
                _this.lists = res.data
            })
        }
    }
}
</script>

