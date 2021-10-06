import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import CategorieDataService from "../services/categories.services";
import '../index.css';
import PopupCategorie from "./CategriePopup"


function CategorieInsert(props) {

    const [submitted, setSubmitted] = useState(false);
    const [categoriesData, setCategoriesData] = useState([]);

    const [code, setCode] = useState("");
    const [categorie, setCategorie] = useState("");
    const [description, setDescription] = useState("");

    const { register, unregister, formState: { errors }, handleSubmit, watch } = useForm();

    const [showPopupCategorie, setPopUp] = useState(false)

    const [id, setId] = useState(0);
    const [actionOK, setActionOK] = useState(0);
    const [messageVariable, setMessageVariable] = useState("");

    const [codeRequireUseForm, setCodeRequireUseForm] = useState(true);
    const [categorieRequireUseForm, setCategorieRequireUseForm] = useState(true);
    const [descriptionRequireUseForm, setDescriptionRequireUseForm] = useState(true);
    const [buttonText, setButtonText] = useState("Enregistrer");


    useEffect(() => {

        categorieGetAll();

    }, []);

    const onSubmit = (data) => {

        if (actionOK == 0) {
            saveCategorie(data);
        }

        if (actionOK == 1) {

            editCategorie(data);
        }

        if (actionOK == 2) {

            deleteCategorie(data);
        }


        setCode("");
        setCategorie("");
        setDescription("");

        unregister("code")
        unregister("categorie")
        unregister("description")
    }

    const togglePopupCategorie = (e) => {
        setPopUp(!showPopupCategorie)
        // actualiser le dropdown de categories apres avoir inserer une nouvelle categorie
        categorieGetAll();
    }

    const codeInput = (e) => {
        setCode(e.target.value);

    };


    const categorieInput = (e) => {
        setCategorie(e.target.value);

    };

    const descriptionInput = (e) => {
        setDescription(e.target.value);

    };

    const saveCategorie = (data2) => {

        CategorieDataService.create(data2).then(response => {
            setSubmitted(true);
            categorieGetAll();
            setMessageVariable("La catégorie engestrée avec succès!");
        })
            .catch(e => {
                console.log(e)
            });
    }

    const editCategorie = (data) => {

        CategorieDataService.update(id, data).then(response => {

            setSubmitted(true);
            categorieGetAll();
            setMessageVariable("La catégorie modifiée avec succès!");

            viderParametres(); // vider tous les parametres

        })
            .catch(e => {
                console.log(e)
            });
    }

    const deleteCategorie = (data) => {

        CategorieDataService.delete(id, data).then(response => {

            setSubmitted(true);
            categorieGetAll();
            setMessageVariable("La catégorie modifiée avec succès!");

            viderParametres(); // vider tous les parametres

        })
            .catch(e => {
                console.log(e)
            });
    }

    const nouvelleCategorie = () => {
        setSubmitted(false);
    }

    const categorieGetAll = (e) => {
        CategorieDataService.getAll()
            .then(response => {
                setCategoriesData(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    const getCategoriesEdit = (code, categorie, description, id, action) => {

        setButtonText("Modifier");

        let actionMessage = "";
        if (action === 1) {
            actionMessage = "Modifier"
        } else {
            actionMessage = "Supprimer"
        }

        if (code == "") {
            setCodeRequireUseForm(true);
        } else {
            setCodeRequireUseForm(false);
        }

        if (categorie == "") {
            setCategorieRequireUseForm(true);
        } else {
            setCategorieRequireUseForm(false);
        }

        if (description == "") {
            setDescriptionRequireUseForm(true);
        } else {
            setDescriptionRequireUseForm(false);
        }

        setActionOK(1);
        setId(id);
        setCode(code);
        setCategorie(categorie);
        setDescription(description);

        // this.tableConfig();

    }

    const getCategoriesDelete = (code, categorie, description, id, action) => {

        setButtonText("Supprimer");

        
        let actionMessage = "";
        if (action === 1) {
            actionMessage = "Modifier"
        } else {
            actionMessage = "Supprimer"
        }

        if (code == "") {
            setCodeRequireUseForm(true);
        } else {
            setCodeRequireUseForm(false);
        }

        if (categorie == "") {
            setCategorieRequireUseForm(true);
        } else {
            setCategorieRequireUseForm(false);
        }

        if (description == "") {
            setDescriptionRequireUseForm(true);
        } else {
            setDescriptionRequireUseForm(false);
        }

        setActionOK(2);
        setId(id);
        setCode(code);
        setCategorie(categorie);
        setDescription(description);


        

        // this.tableConfig();
    }

    const viderParametres = () => {
        setActionOK(0);
        setCode("");
        setCategorie("");
        setDescription("");

        unregister("code")
        unregister("categorie")
        unregister("description")

        setCodeRequireUseForm(true);
        setCategorieRequireUseForm(true);
        setDescriptionRequireUseForm(true);

    }
    return (
        <div className="content-wrapper">

            <section className="content-header">

                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h4>ENREGISTRER CATEGORIES</h4>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="FAKE_URL">Home</a></li>
                                <li className="breadcrumb-item active">Catégories</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}

            </section>

            {submitted ? (
                <div>
                    <h4>{messageVariable}</h4>
                    <button className="btn btn-success" onClick={nouvelleCategorie}>
                        Nouvelle catégorie
                    </button>
                </div>

            ) : (
                <div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="code">Code</label>
                        <input id="code" {...register('code', { required: codeRequireUseForm, maxLength: 300 })}
                            onChange={codeInput}
                            value={code} className="inputAjouterStock" />
                        {errors.code && errors.code.type === "required" && <span>Veuillez introduire le Code</span>}
                        {errors.code && errors.code.type === "maxLength" && <span>Le maxminum de caractères est atteint</span>}

                        <br />
                        <label htmlFor="categorie">Catégorie</label>
                        <input id="categorie" {...register('categorie', { required: categorieRequireUseForm, maxLength: 300 })}
                            onChange={categorieInput}
                            value={categorie} className="inputAjouterStock" />
                        {errors.categorie && errors.categorie.type === "required" && <span>Veuillez introduire la Catégorie</span>}
                        {errors.categorie && errors.categorie.type === "maxLength" && <span>Le maxminum de caractères est atteint</span>}

                        <br />

                        <label htmlFor="description">Description</label>

                        <textarea id="description" name="description" rows="3" cols="60"
                            {...register('description', { required: descriptionRequireUseForm, maxLength: 500 })}
                            style={{
                                width: '60%', maxWidth: '600px', backgroundColor: '#f2f2f2', fontSize: "12px",
                                fontWeight: "bold", marginTop: "2px"
                            }}
                            className="textareaAjouterStock"
                            onChange={descriptionInput}
                            value={description}>
                        </textarea>
                        {errors.description && errors.description.type === "required" && <span>Veuillez introduire une description</span>}
                        {errors.description && errors.description.type === "maxLength" && <span>Le maxminum de caractères est atteint</span>}



                        <br />

                        <div>
                            <input type="submit" value={buttonText} />

                        </div>

                        {/* </div> */}
                    </form>
               


            <div className="card" >

                {/* /.card-header */}
                <div className="card-body">
                    <table id="example1" className="table table-bordered table-striped"
                        style={{ fontSize: '10px' }}>
                        <thead style={{ backgroundColor: "lightblue" }}>
                            <tr>
                                <th>id</th>
                                <th>Code</th>
                                <th>Catégorie</th>
                                <th>Description</th>
                                <th style={{ width: "90px" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{ padding: '10px' }}>

                            {
                                categoriesData.map((categoriesData) => (
                                    <tr key={categoriesData.id}>

                                        <td>{categoriesData.id} </td>
                                        <td>{categoriesData.code}</td>
                                        <td>{categoriesData.categorie}</td>
                                        <td>{categoriesData.description}</td>
                                        <td style={{ padding: '3px' }}>

                                            <button style={{ width: '40px', maxWidth: '40px', border: 'none', backgroundColor: 'transparent' }} type="button"

                                                onClick={() => {
                                                    getCategoriesEdit(categoriesData.code, categoriesData.categorie, categoriesData.description,
                                                        categoriesData.id, 1)
                                                }
                                                }


                                            >
                                                <i className="fa fa-edit"></i>
                                            </button>

                                            <button style={{ width: '40px', maxWidth: '40px', border: 'none', backgroundColor: 'transparent' }} type="button"

                                                onClick={() => {
                                                    getCategoriesDelete(categoriesData.code, categoriesData.categorie, categoriesData.description,
                                                        categoriesData.id, 1)
                                                }

                                                }

                                            >
                                                <i className="far fa-trash-alt" style={{ fontSize: '48px;color:red' }}></i>


                                            </button>
                                        </td>
                                    </tr>
                                ))

                            }

                        </tbody>
                        <tfoot>
                            <tr style={{ backgroundColor: "lightblue" }}>
                                <th>id</th>
                                <th>Code</th>
                                <th>Catégorie</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>

            </div>
            )}

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

export default CategorieInsert;