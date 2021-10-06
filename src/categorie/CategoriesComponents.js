import React, { useState, useEffect } from "react";
import CategorieService from "../services/categories.services";
import PopupCategorie from "./CategriePopup"
function CategorieGetDescription(props) {
    // // console.log(props);
    const [categoriesData, setCategoriesData] = useState([])
    const [showPopupCategorie, setPopUp] = useState(false)
    const [categorieDescription, setCategorieDescription] = useState("")

    useEffect(() => {

        categorieGetAll();

    }, []);

    const categorieGetAll = (e) =>{

        CategorieService.getAll()
        .then(response => {
            setCategoriesData(response.data)
        })
        .catch(e => {
            console.log(e);
        });
    }

    const togglePopupCategorie = (e) => {
        setPopUp(!showPopupCategorie)
        // actualiser le dropdown de categories apres avoir inserer une nouvelle categorie
        categorieGetAll();
    }

    const onChangeCategorie = (e) => {

        const selectedIndex = e.target.options.selectedIndex; // pour avoir l'ID de la categorie
        const idCat = e.target.options[selectedIndex].getAttribute('data-id');
        const categorieDesc =  e.target.options[selectedIndex].getAttribute('data-info'); //recupere la description

        setCategorieDescription(categorieDesc);
       // CategorieService.getID(idCat);    // get la categorie en fonction du numero idCat
        props.categorieID2(idCat, categorieDesc)   // envoyer les donnees au formulaire qui en auront besoin
    }
    return (
        <div>
            <div>
                <label htmlFor="categorie" style={{ marginTop: "-5px" }} className="labelAjouterStock">Catégorie111:</label>
                <select name="categorie" id="categorie" className="inputAjouterStock"
                    style={{ width: '50%', maxWidth: '600px', fontSize: "12px" }}
                    onChange={onChangeCategorie}>
                    <option value="Sélectionnez">Sélectionnez</option>

                    {
                        categoriesData.map(categories =>
                            <option defaultValue="defaultInputValue"
                                key={categories.id} 
                                data-id={categories.id} 
                                data-info={categories.description}>
                                {categories.categorie}
                            </option>
                        )
                    }
                </select>

                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary" onClick={togglePopupCategorie}
                    style={{ width: "40px", height: "30px", maxWidth: "500px" }} >
                    <i className="fas fa-search" aria-hidden="true"></i>
                </button>
            </div>

            <div>
                <label htmlFor="descriptionCategorie" style={{ marginTop: "2px" }} className="labelAjouterStock">Descrip. Catégorie:555</label>
                <textarea id="descriptionCategorie" name="descriptionCategorie" rows="3" cols="60"
                    readOnly value={categorieDescription}
                    style={{
                        width: '60%', maxWidth: '600px', backgroundColor: '#f2f2f2', fontSize: "12px",
                        fontWeight: "bold", marginTop: "2px"
                    }}>
                </textarea>
            </div>
        {
                showPopupCategorie ?
                    <PopupCategorie
                        text='Close Me'
                        closePopup={togglePopupCategorie}
                    />
                    : null
            }
        </div>
    )
}
export default CategorieGetDescription