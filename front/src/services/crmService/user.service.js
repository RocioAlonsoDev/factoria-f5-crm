import http from "./http-common";

class UserDataService{
    getAll(){
        return http.get("api/user");
    }
    get(id){
        return http.get(`api/user/${id}`);
    }
    create(data){
        
        return http.post("api/user", data);
        
    }
    update(id, data){
        return http.put(`api/user/${id}`, data);
    }
    delete(id){
        return http.delete(`api/user/${id}`);
    }

    deleteAll(){
        return http.delete(`api/user`);
    }
   
   
}

export default new UserDataService();