import http from "./http-common";

class PersonBootcampDataService{
    getAll(){
        return http.get("api/personBootcamps");
    }
    // get(id){
    //     return http.get(`api/personRequirements/${id}`);
    // }

    get(id_person, id_bootcamp) {
        return http.get(`api/personBootcamps/${id_person}/${id_bootcamp}`);
      }}
      
    
    create(data){
        
        return http.post("api/personBootcamps", data);
        
    }
    update(id_person, id_bootcamp,  data){
        return http.put(`api/personBootcamps/${id_person}/${id_bootcamp}`, data);
    }

    
    delete(id){
        return http.delete(`api/personBootcamps/${id}`);
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
};

export default new PersonBootcampDataService();