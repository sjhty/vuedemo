<template>
  <div>
    <h1 class="logo">cnodejs Api Test</h1>
    <ul class="list">
      <li v-for="item in lists" v-text="item.title"></li>
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
        this.getData()
    },
    methods: {
        getData:function(params) {
            var _this = this;
            if (!params) params = {}
            _this.$api.get('topics',params,function(con){
                debugger
                console.log(con.data)
                _this.lists = con.data
            })
        }
    }
}
</script>

