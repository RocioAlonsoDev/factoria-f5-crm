import http from "./http-common";

class BootcampStackDataService{
    getAll(){
        return http.get("api/bootcampStacks");
    }
    get(id){
        return http.get(`api/bootcampStacks/${id}`);
    }
    create(data){
        
        return http.post("api/bootcampStacks", data);
        
    }
    update(id, data){
        return http.put(`api/bootcampStacks/${id}`, data);
    }
    delete(id){
        return http.delete(`api/bootcampStacks/${id}`);
    }
    deleteAll(){
        return http.delete(`api/bootcampStacks`);
    } 
}

export default new BootcampStackDataService();