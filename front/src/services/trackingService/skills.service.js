import http from "./http-common";

class SkillsDataService{
    getAll(){
        return http.get("api/skills");
    }
    get(id){
        return http.get(`api/skills/${id}`);
    }
    create(data){
        
        return http.post("api/skills", data);
        
    }
    update(id, data){
        return http.put(`api/skills/${id}`, data);
    }
    delete(id){
        return http.delete(`api/skills/${id}`);
    }
    deleteAll(){
        return http.delete(`api/skills`);
    } 
}

export default new SkillsDataService();