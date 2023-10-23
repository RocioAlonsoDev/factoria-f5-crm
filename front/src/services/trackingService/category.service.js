import http from "./http-common";

class CategoryDataService{
    getAll(){
        return http.get("api/categories");
    }
    get(id){
        return http.get(`api/categories/${id}`);
    }
    create(data){
        
        return http.post("api/categories", data);
        
    }
    update(id, data){
        return http.put(`api/categories/${id}`, data);
    }
    delete(id){
        return http.delete(`api/categories/${id}`);
    }
    deleteAll(){
        return http.delete(`api/categories`);
    } 
}

export default new CategoryDataService();