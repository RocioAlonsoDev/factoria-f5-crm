import http from "./http-common";

class StatusDataService{
    getAll(){
        return http.get("api/status");
    }
    get(id){
        return http.get(`api/status/${id}`);
    }
    create(data){
        
        return http.post("api/status", data);
        
    }
    update(id, data){
        return http.put(`api/status/${id}`, data);
    }
    delete(id){
        return http.delete(`api/status/${id}`);
    }

    deleteAll(){
        return http.delete(`api/status`);
    }

    findByPerson(id_person){
        return http.get(`api/status?id_person=${id_person}`);
    }
    
   
}

export default new StatusDataService();