/**
 * Description: axios配置
 */
import axios from 'axios';
import { Loading, Message } from 'element-ui';
import router from '../router';
import { RETURN_CODE, CODE_SUCCESS, SESSION_TIMEOUT, LOGIN_TIMEOUT, FINISH_PROCESS, PROCESS_ALREADY_APPROVED, BUSINESS_CODE } from './code';

axios.defaults.withCredentials = true; // 需要凭证
axios.defaults.timeout = 600000;
// axios.defaults.baseURL = 'http://localhost:8010/api/v1';

var CancelToken = axios.CancelToken;
var source = CancelToken.source();
// axios.defaults.baseURL = 'http://47.110.132.252:8081/';

// const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
// loadinginstace = Loading.service({ fullscreen: true })
// http request 拦截器
// 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let pending = [];
let cancelToken = axios.CancelToken;
let removePending = (ever) => {
    for (let p in pending) {
        if (pending[p].u === ever.url + '&' + ever.method && pending[p].u != '/api/v1/award/achievePeopleDetail/deletePeopleById&get'
        ) { // 当当前请求在数组中存在时执行函数体
            pending[p].f(); // 执行取消操作
            pending.splice(p, 1); // 把这条记录从数组中移除
        }
    }
};
axios.interceptors.request.use(
    config => {
        let token = JSON.parse(window.sessionStorage.getItem('access_token'));
        // 没有登陆且不是登陆，阻断所有请求
        if (token == null) {
            config.cancelToken = source.token;
            source.cancel('user dont login');
            router.push({ name: 'login', path: '/login' });
        }
        if (token) {
            // 让每个请求携带自定义token
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        // 在一个ajax发送前执行一下取消操作
        removePending(config);
        config.cancelToken = new cancelToken((c) => {
            // 这里的ajax标识我是用请求地址&请求方式拼接的字符串
            pending.push({ u: config.url + '&' + config.method, f: c });
        });
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);

// http response 拦截器
let tipCode = false;
axios.interceptors.response.use(
    response => {
        tipCode = false;
        if (response.headers['content-disposition']) {
            var downLoadMark = response.headers['content-disposition'].split(';');
            if (downLoadMark[0] == 'attachment') {
                return response.data;
            }
        }
        // var downLoadMark = response.headers.split(';')
        // ------------------------------------------------------------------------------------------
        // removePending(res.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
        // -------------------------------------------------------------------------------------------
        RETURN_CODE.map(function (cur, index, arr) {
            if (response.data.code != CODE_SUCCESS && response.data.code == cur.code) {
                if (response.data.code == 500) {
                    Message.error({
                        message: response.data.msg
                    });
                } else {
                    Message.warning({
                        message: response.data.msg
                    });
                }
            }
        });
        if (response.data.code == SESSION_TIMEOUT) {
            window.sessionStorage.removeItem('access_token');
            window.sessionStorage.removeItem('user');
            // router.push('/Login')
            return Promise.reject(response.data);
        }

        if (response.data.code != CODE_SUCCESS) {
            let code = BUSINESS_CODE.find(code => {
                return code.code == response.data.code;
            });
            // 如果不存在code.code == response.data.code,返回undefined
            if (code != undefined) {
                if (code.code != 105) {
                    Message.warning({
                        message: response.data.msg
                    });
                } else {

                }
                return response.data;
            } else {
                return response.data;
                // return Promise.reject(response.data);
            }
        }
        if (response.data.code == LOGIN_TIMEOUT) {
            // this.$router.push({ name: 'Login', path: '/Login' });
        }
        return response.data;
    },
    error => {
        if (error.response) {
            if (error.response.data.code == 600 && !tipCode) {
                Message.error({ message: '系统登录身份令牌失效，请重新登录' });
                tipCode = true;
                setTimeout(() => {
                    sessionStorage.removeItem('access_token');
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }// 登录成功后跳入浏览的当前页面
                    });
                }, 1000);
            }
        }
        return Promise.reject(error);
    }
);
// get
export function fetch (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
        });
    });
}

// post
export function post (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
        });
    });
}

// get
export async function fetchGet (url, params = {}) {
    return await axios.get(url, {
        params: params
    });
}

// post
export async function fetchPost (url, data = {}) {
    return await axios.post(url, data);
}

// put
export async function fetchPut (url, data = {}) {
    return await axios.put(url, data);
}

// delete
export async function fetchDel (url, data = { emulateJSON: true }) {
    return await axios.delete(url, data);
}
