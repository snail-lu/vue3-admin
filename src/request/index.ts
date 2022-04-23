import axios from 'axios';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';

// 创建HTTP实例
const http = axios.create({
    baseURL: 'https://www.fastmock.site/mock/810bb3cba8677f9f01afe7855db87edb/vue3-ts-admin/api',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
});

// 请求拦截
http.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.token = token || '';
    }
    return config;
});

// 响应拦截
http.interceptors.response.use(
    (res) => {
        const code: number = res.data.code;
        if (code !== 200) {
            ElMessage.error(res.data.msg);
            return Promise.reject(res.data);
        }
        return res.data;
    },
    (err) => {
        ElMessage.error(err.message);
    }
);

export default http;
