import axios from 'axios'

const APIservice = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    // headers: {
    //     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    // },
})


export default APIservice