import http from "./http-common";

class StatusRequirementDataService{
    getAll(){
        return http.get("api/statusRequirement");
    }
    get(id){
        return http.get(`api/statusRequirement/${id}`);
    }
    create(data){
        
        return http.post("api/statusRequirement", data);
        
    }
    update(id, data){
        return http.put(`api/statusRequirement/${id}`, data);
    }
    delete(id){
        return http.delete(`api/statusRequirement/${id}`);
    }

    deleteAll(){
        return http.delete(`api/statusRequirement`);
    }

    findByUser(id_user){
        return http.get(`api/statusRequirement?id_user=${id_user}`);
    }
    
}

export default new StatusRequirementDataService();