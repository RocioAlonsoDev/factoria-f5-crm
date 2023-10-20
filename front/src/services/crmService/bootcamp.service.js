import http from "./http-common";

class BootcampDataService{
    getAll(){
        return http.get("api/bootcamp");
    }
    get(id){
        return http.get(`api/bootcamp/${id}`);
    }
    create(data){
        
        return http.post("api/bootcamp", data);
        
    }
    update(id, data){
        return http.put(`api/bootcamp/${id}`, data);
    }
    delete(id){
        return http.delete(`api/bootcamp/${id}`);
    }

    deleteAll(){
        return http.delete(`api/bootcamp`);
    }

    findByPerson(id_person){
        return http.get(`api/bootcamp?id_person=${id_person}`);
    }
    
    getPeopleInBootcamp(id_bootcamp){
        return http.get(`api/getPeopleInBootcamp/${id_bootcamp}`)
    }
   
}

export default new BootcampDataService();