import axios from 'axios';
import 'element-plus/es/components/message/style/css';

// 创建HTTP实例
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 120 * 1000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
});
// 请求拦截
request.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.token = token || '';
    }
    return config;
});

// 响应拦截
request.interceptors.response.use(
    (res) => {
        const code = res.data.code;
        if (code !== 200) {
            res.data.message && ElMessage.error(res.data.message);
            return Promise.reject(res.data);
        }
        return res.data;
    },
    (err) => {
        ElMessage.error(err.message);
    }
);

export default request;
