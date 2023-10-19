import http from "./http-common";

class BootcampDataService{
    getAll(){
        return http.get("api/bootcamp");
    }
    get(id){
        return http.get(`api/bootcamp/${id}`);
    }
    create(data){
        
        return http.post("api/bootcamp", data);
        
    }
    update(id, data){
        return http.put(`api/bootcamp/${id}`, data);
    }
    delete(id){
        return http.delete(`api/bootcamp/${id}`);
    }
    deleteAll(){
        return http.delete(`api/bootcamp`);
    } 
}

export default new BootcampDataService();