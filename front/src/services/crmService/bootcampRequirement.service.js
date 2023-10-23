import http from "./http-common";

class BootcampRequirementDataService{
    getAll(){
        return http.get("api/bootcampRequirement");
    }
    get(id){
        return http.get(`api/bootcampRequirement/${id}`);
    }
    create(data){
        return http.post("api/bootcampRequirement", data);
    }
    delete(id){
        return http.delete(`api/bootcampRequirement/${id}`);
    }
    deleteAll(){
        return http.delete(`api/bootcampRequirement`);
    } 
}

export default new BootcampRequirementDataService();