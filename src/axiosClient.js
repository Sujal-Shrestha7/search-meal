import axios from "axios"

const axiosClient = axios.create({

    baseURL: "https://www.themealdb.com/api/json/v1/1",
}
)

// axiosClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token')
//         if(token){
//             config.headers['Authorization'] = token
//         }
//         return config
//     }
// )


export default axiosClient;


