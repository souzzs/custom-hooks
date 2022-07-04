import axios from "axios";

const api = axios.create({
    // Sua url aqui
    baseURL: 'https://ranekapi.origamid.dev/json/api',

    // Restante das configurações
});

// Interceptador para envio de token

// api.interceptors.request.use((config) => {
//     const hasToken = localStorage.getItem('token');

//     if(hasToken){
//         config.headers = {
//             Authorization: 'Bearer ' + hasToken,
//         }
//     }

//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });


export default api;
