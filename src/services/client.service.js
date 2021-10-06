import http from '../http-common';


class ClientDataService {

    getAll(){
        return http.get("/client");
    }

    create(data){
        return  http.post("/client", data);
    }

    // recherche Categorie ID

    getID(id){
        return http.get(`/client/${id}`)
    }

    update(id, data){
        return http.put(`/client/${id}`, data)
    }

    // supprimer categorie

    delete(id){
        return http.delete(`/client/${id}`)
    }

}

export default new ClientDataService();