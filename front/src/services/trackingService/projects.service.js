import http from "./http-common";

class ProjectsWorkhopsDataService{
    getAll(){
        return http.get("api/projectsWorkshops");
    }
    get(id){
        return http.get(`api/projectsWorkshops/${id}`);
    }
    createByPerson(id_person, data){
        
        return http.post(`api/projectsWorkshops?id_person=${id_person}`, data);
    }
    
    update(id, data){
        return http.put(`api/projectsWorkshops/${id}`, data);
    }
    delete(id){
        return http.delete(`api/projectsWorkshops/${id}`);
    }

    deleteAll(){
        return http.delete(`api/projectsWorkshops`);
    }

    findByPerson(id_person){
        return http.get(`api/projectsWorkshops?id_person=${id_person}`);
    }
}

export default new ProjectsWorkhopsDataService();