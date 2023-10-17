import http from "./http-common";

class PersonRequirementsDataService{
    getAll(){
        return http.get("api/personRequirements");
    }
    get(id){
        return http.get(`api/personRequirements/${id}`);
    }
    create(data){
        
        return http.post("api/personRequirements", data);
        
    }
    update(id, data){
        return http.put(`api/personRequirements/${id}`, data);
    }
    delete(id){
        return http.delete(`api/personRequirements/${id}`);
    }

    deleteAll(){
        return http.delete(`api/personRequirements`);
    }

    findByUser(id_user){
        return http.get(`api/personRequirements?id_user=${id_user}`);
    }
    
    updateRequirementsStatus(personRequirementId, updatedStatus) {
        return http.put(`api/personRequirements/${personRequirementId}`, updatedStatus);
      }
}

export default new PersonRequirementsDataService();