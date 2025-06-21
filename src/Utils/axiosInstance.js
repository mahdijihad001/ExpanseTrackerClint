import axios from 'axios';
import { Base_Url } from './ApiPath';


const axiosInstance = axios.create({
    baseURL: Base_Url,
    timeout: 10000,
    withCredentials : true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});


// axiosInstance.interceptors.request.use(
//     (config) => {
//         const accessToken = localStorage.getItem("token");
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         };
//         return config;
//     },
//     (error) =>{
//         return Promise.reject(error);
//     }
// );


axiosInstance.interceptors.response.use(
    (response) =>{
        return response;
    },
    (error) =>{
        if(error.response){
            if(error.response.status === 401){
                window.location.href = "/login"
            }else if(error.response.status === 500){
                console.error("server error please try another time!")
            }else if(error.code === "ECONNABORTED"){
                console.error("Request timeout. Please try again");
            }
        }
        return Promise.reject(error);
    }
)

// const res = await axios.get("/me", { withCredentials: true });
// if (res.data.isAdmin) {
//   showAdminPanel();
// };


export default axiosInstance