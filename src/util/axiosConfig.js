// axios
import axiosProto from "axios";
import qs from "qs";

let  axiosReq = axiosProto.create({
    // 后端接口的基本地址
    baseURL:"https://api.xichuanyikao.cn/index/index/",   //api的base_url
    timeout:5000                    //请求超时时间
});

// axios请求拦截
axiosReq.interceptors.request.use(config=>{
    // 获取数据前
    // app.$vux.loading.show({
    //     text:"数据加载中..."
    // });
    // 请求参数与请求头设置
    config.method === "post"
        ?config.data = qs.stringify({...config.data})
        :config.params = {...config.params};
    config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    return config;
},error => {
    // 请求错误
    // app.$vux.toast.show({
    //     text:error,
    //     type:"warn"
    // });
    Promise.reject(error);
});

// axios响应拦截
axiosReq.interceptors.response.use(
    response => {  //成功请求到数据
        // app.$vux.loading.hide();
        //这里根据后端提供的数据进行对应的处理
        // if (response.data.result === 'TRUE') {
        //     return response.data;
        // } else {
        //     app.$vux.toast.show({  //常规错误处理
        //         type: 'warn',
        //         text: response.data.data.msg
        //     });
        // }
        return response;
    },
    error => {  //响应错误处理
        console.log(error);
        // let text = JSON.parse(JSON.stringify(error)).response.status === 404
        //     ? '404'
        //     : '网络异常，请重试';
        // app.$vux.toast.show({
        //     type: 'warn',
        //     text: text
        // });

        return Promise.reject(error)
    });

export default axiosReq
