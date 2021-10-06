import http from '../http-common';


class CategorieDataService {

    getAll(){
        return http.get("/categories");
    }

    create(data){
        return  http.post("/categories", data);
    }

    // recherche Categorie ID

    getID(id){
        return http.get(`/categories/${id}`)
    }

    

    update(id, data){
        console.log("********************************************************");
        console.log(id);
        console.log(data);
        return http.put(`/categories/${id}`, data)
    }

    // supprimer categorie

    delete(id){
        return http.delete(`/categories/${id}`)
    }

}

export default new CategorieDataService();