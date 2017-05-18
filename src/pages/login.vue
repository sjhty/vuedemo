<template>
    <div>
        <input type="text" v-model="username"/>
        <input type="password" v-model="password"/>
        <input type="button" @click="signIn" value="登录">
    </div>
</template>
<script>
    let md5 = require('md5');
    export default {
        data() {
            return {
                username: 'username',
                password: 'password'
            }
        },
        created() {
            this.setSession()
        },
        methods: {
            setSession:function(params){
                var _this = this;
                if (!params) params = {}
                _this.$api.get('fetch-cookie',params,function(res){
                    console.log(res);
                    sessionStorage.setItem('_tk', JSON.stringify(res.data.content));
                })
            },

            signIn:function(){
                var _this = this;
                let params = {
                    username: _this.username,
					passwordmd5: md5(_this.password),
                    _tk: 'b173fe81-ca5d-4f7e-ac3e-f8ec2d8c5a3b'
                }

                if (!params) params = {}
                _this.$api.get('login',params,function(res){
                    debugger
                    console.log(res.data)
                    _this.lists = res.data
                })
            }
        }

    }
    

</script>