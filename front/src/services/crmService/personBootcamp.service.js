import http from "./http-common";

class PersonBootcampDataService{
    getAll(){
        return http.get("api/personBootcamps");
    }
    // get(id){
    //     return http.get(`api/personRequirements/${id}`);
    // }

    get( id_bootcamp) {
        return http.get(`api/personBootcamps/${id_bootcamp}`);
      }
      
}

export default new PersonBootcampDataService();