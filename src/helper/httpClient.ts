import axios, { AxiosInstance } from "axios"

const httpClient: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_URL}`,
    //withCredentials: true,
    timeout: 5000,
});

httpClient.interceptors.request.use(res => {
    console.log("DEBUG success request === ", res);
    return res;
}, err => {
    console.log("DEBUG error request === ", err)
    return
})

httpClient.interceptors.response.use(res => {
    console.log("DEBUG success response === ", res);
    return res;
}, err => {
    console.log("DEBUG error response === ", err)
    return
})

export { httpClient };
