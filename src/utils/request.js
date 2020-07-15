import axios from 'axios'

let baseURL= 'api1'; //
// let baseURL='api2'; 

let serve = axios.create({
    withCredentials: true,  // 携带cookie在请求头上 
    baseURL: baseURL,
    timeout: 10000,
    method: 'post'
})

serve.interceptors.request.use(function(config){
    return config;
}, function(error){
    return Promise.reject(error);
})


serve.interceptors.response.use(function(response){
    if(response.status==200){
        return response.data
    } else {
        return Promise.reject(error);
    }
}, function(error){
    return Promise.reject(error);
})
