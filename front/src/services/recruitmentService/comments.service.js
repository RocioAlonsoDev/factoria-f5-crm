import http from "./http-common";

class CommentDataService{
    getAll(){
        return http.get("api/comment");
    }
    get(id){
        return http.get(`api/comment/${id}`);
    }
    create(data){
        
        return http.post("api/comment", data);
        
    }
    update(id, data){
        return http.put(`api/comment/${id}`, data);
    }
    delete(id){
        return http.delete(`api/comment/${id}`);
    }

    deleteAll(){
        return http.delete(`api/comment`);
    }

    findByTitle(id_user){
        return http.get(`api/comment?id_user=${id_user}`);
    }

    findByPerson(id_person){
        return http.get(`api/comment?id_person=${id_person}`);
    }
}

export default new CommentDataService();