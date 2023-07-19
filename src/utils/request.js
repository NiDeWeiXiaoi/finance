import axios from  "axios";
import store from '../store';


/**
 * 在不同环境下请求不同api服务器
 * 生产环境/测试环境/开发环境使用对应接口
 */

//创建axios请求实例
const request = axios.create({
    baseURL: "http://api.cpengx.cn/finance/api"
});

// 拦截请求
request.interceptors.request.use((config) => {
        const { user } = store.state;
        console.log('user', user)
        if(user && user.token) {
            config.headers.Authorization = `Bearer ${user.token}`;
        }

        return config;   
    },
    (error) => {
        return Promise.reject(error);
    }
)

// 响应拦截器
request.interceptors.response.use((response) => {
        if(response.status == 200) {
            return response.data;
        } else {
            return response;
        }
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default request;
