import axios from "axios";

const http=axios.create({
    baseURL: "http://127.0.0.1:8002/",
    headers:{
        "Content-Type": "application/json",
    }
})

export default http;

