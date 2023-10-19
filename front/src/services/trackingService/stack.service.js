import http from "./http-common";

class StackDataService{
    getAll(){
        return http.get("api/stacks");
    }
    get(id){
        return http.get(`api/stacks/${id}`);
    }
    create(data){
        
        return http.post("api/stacks", data);
        
    }
    update(id, data){
        return http.put(`api/stacks/${id}`, data);
    }
    delete(id){
        return http.delete(`api/stacks/${id}`);
    }
    deleteAll(){
        return http.delete(`api/stacks`);
    } 
}

export default new StackDataService();