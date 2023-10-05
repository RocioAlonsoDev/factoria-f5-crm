import axios from 'axios'

const APIservice = axios.create({
    baseURL: `http://localhost:8000/api`
})

APIservice.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
    return config
})

APIservice.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401){
        localStorage.removeItem('TOKEN');
        window.location.reload();
    }
    throw error;
})

export default APIservice