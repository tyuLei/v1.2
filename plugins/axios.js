import Element from 'element-ui'

export default function ({ $axios, redirect, $cookies }) {
    $axios.defaults.baseURL = global.SERVIEC_URL_PATH
    // $axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    // 添加请求拦截器
    $axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        const AUTH_TOKEN = $cookies.get('user') && $cookies.get('user').Authorization
        if (AUTH_TOKEN) {
            config.headers.common['Authorization'] = AUTH_TOKEN
        }
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    $axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        switch (response.data.code) {
            case 1002:
                Element.Message({
                    message: '登陆已过期，请重新登录！',
                    type: 'warning'
                });
                redirect('/login')
                break;
            case 3000:
                Element.Message({
                    message: res.data.msg,
                    type: 'warning'
                });
                redirect('/login')
                break;
            default:
                break;
        }
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
}