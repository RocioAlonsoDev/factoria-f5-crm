import http from "./http-common";

class PersonDataService{
    getAll(){
        return http.get("api/person");
    }
    get(id){
        return http.get(`api/person/${id}`);
    }
    create(data){
        
        return http.post("api/person", data);
        
    }
    update(id, data){
        return http.put(`api/person/${id}`, data);
    }
    delete(id){
        return http.delete(`api/person/${id}`);
    }

    deleteAll(){
        return http.delete(`api/person`);
    }

    findByUser(id_user){
        return http.get(`api/person?id_user=${id_user}`);
    }

    showByStatus(id_status){
        return http.get(`api/person?id_status=${id_status}`);
    }

    getGenderPercentages(){
        return http.get(`api/person/gender-percentages`);
    }

    showByBootcamp(id_bootcamp){
        return http.get(`api/getPeopleInBootcamp/${id_bootcamp}`);
    }
    
}

export default new PersonDataService();