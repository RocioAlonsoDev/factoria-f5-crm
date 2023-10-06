import http from "./http-common";

class RequirementDataService{
    getAll(){
        return http.get("api/requirement");
    }
    get(id){
        return http.get(`api/requirement/${id}`);
    }
    create(data){
        
        return http.post("api/requirement", data);
        
    }
    update(id, data){
        return http.put(`api/requirement/${id}`, data);
    }
    delete(id){
        return http.delete(`api/requirement/${id}`);
    }

    deleteAll(){
        return http.delete(`api/requirement`);
    }

    findByUser(id_user){
        return http.get(`api/requirement?id_user=${id_user}`);
    }
    
}

export default new RequirementDataService();