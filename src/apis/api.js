// 配置API接口地址
var root = 'https://cnodejs.org/api/v1/';
//var root = 'http://crmapi-test.ucaiyuan.com/api/';
// 引用superagent
//var request = require('superagent');
var axios = require('axios');
// 自定义判断元素类型JS
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
    console.log(o)
  for (var key in o) {
    if (o[key] == null) {
      delete o[key]
    }
    if (toType(o[key]) == 'string') {
      o[key] = o[key].trim()
      if (o[key].length == 0) {
        delete o[key]
      }
    }
  }
  return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
*/
// function _api_base(method, url, params, success, failure) {
//   var r = request(method, url).type('text/plain')
//   if (params) {
//     params = filterNull(params);
//     if (method === 'POST' || method === 'PUT') {
//       if (toType(params) == 'object') {
//         params = JSON.stringify(params);
//       }
//       r = r.send(params)
//     } else if (method == 'GET' || method === 'DELETE') {
//       r = r.query(params)
//     }
//   }
//   r.end(function(err, res) {
//     if (err) {
//       alert('api error, HTTP CODE: ' + res.status);
//       return;
//     };
//     if (res.body.success == true) {
//       if (success) {
//         success(res.body);
//       }
//     } else {
//       if (failure) {
//         failure(res.body);
//       } else {
//         alert('error: ' + JSON.stringify(res.body));
//       }
//     }
//   });
// };
function apiAxios(method, url, params, success, failure) {
    //debugger
    if (params) {
        params = filterNull(params);
    } else {
        params = null;
    }

    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        baseUrl: root,
        withCredentials: false
    })
    // .then(function (res) {
    //     if (res.data.type === 'success') {
    //         if (success) {
    //             success(res.data.content)
    //         }
    //     } else {
    //         if (failure) {
    //             failure(res.data)
    //         } else {
    //             alert('error: ' + JSON.stringify(res.data))
    //         }
    //     }
    // })
    .then(function (res) {
      debugger
        if (res.data.success === true) {
            if (success) {
                success(res.data)
            }
        } else {
            if (failure) {
                failure(res.data)
            } else {
                //alert('error: ' + JSON.stringify(res.data))
            }
        }
    })
    .catch(function (err) {
        let res = err.response
        if (err) {
            alert('api error, HTTP CODE: ' + res.status)
            return
        }
    })
}
// 返回在vue模板中的调用接口
export default {
  get: function(url, params, success, failure) {
    return apiAxios('GET', root + url, params, success, failure)
  },
  post: function(url, params, success, failure) {
    return apiAxios('POST', root + url, params, success, failure)
  },
  put: function(url, params, success, failure) {
    return apiAxios('PUT', root + url, params, success, failure)
  },
  delete: function(url, params, success, failure) {
    return apiAxios('DELETE', root + url, params, success, failure)
  },
}