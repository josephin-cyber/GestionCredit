import React from "react";
import '../categorie/popup.css'
import CategorieDataService from "../services/categories.services";
import '../categorie/indexCategories.css';



class CategriePopup extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeCategorie = this.onChangeCategorie.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveCategorie = this.saveCategorie.bind(this);
        this.nouvelleCategorie = this.nouvelleCategorie.bind(this);

        this.state = {
            id: null,
            code: "",
            categorie: "",
            description: "",
            submitted: false
        };
    }

    componentDidMount() {
        this.categoriesGetAll();
    }
    categoriesGetAll() {
        CategorieDataService.getAll()
            .then(response => {
                this.setState({
                    categories: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }


    onChangeCode(e) {
        this.setState({
            code: e.target.value
        });

    }

    onChangeCategorie(e) {
        this.setState({
            categorie: e.target.value
        });

    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    saveCategorie() {

        var data = {
            code: this.state.code,
            categorie: this.state.categorie,
            description: this.state.description
        };

        CategorieDataService.create(data).then(response => {
            this.setState({
                id: response.data.id,
                code: response.data.code,
                categorie: response.data.categorie,
                description: response.data.description,
                submitted: true

            });
           //  this.nouvelleCategorie();
        })
            .catch(e => {
                console.log(e)
            });
    }

    nouvelleCategorie() {
        this.setState({
            id: null,
            code: "",
            categorie: "",
            description: "",
            submitted: false
        });
    }
    render() {
        return (
            <div>

            


            <div className='popup'>
                <div className='popup_inner'>
                    <div className="container">
                        <div style={{backgroundColor:"lightblue", width:"550px",   
                                marginLeft:"-1.5%", textAlign:"center", fontSize:"30px"}}>
                        <div className="card-header">INSERER CATEGORIE
                        <button type="button" className="close" data-dismiss="modal" style={{width:'50px', height:'50px', marginLeft: "195px"}}
                        onClick={this.props.closePopup} >&times;
                        </button>

                        </div>
                        </div>
                        <div className="card-body">

                        {this.state.submitted ? (
                <div>
                    <h4>La catégorie engestré avec succès!</h4>
                    <button className="btn btn-success" onClick={this.nouvelleCategorie}>
                        Nouvelle catégorie
                    </button>
                </div>
            ) : (


//<form id="formOpop">
<div>

                                <div>
                                    <label htmlFor="code">Code:</label>
                                    <input type="text" name="code" id="code1" style={{ width: '30%' }}
                                        onChange={this.onChangeCode} autoComplete="off"></input>
                                </div>

                                <div>
                                    <label htmlFor="categorie">Categorie:</label>
                                    <input type="text" onChange={this.onChangeCategorie} name="categorie" id="categorie"
                                        style={{ width: '60%', maxWidth: '650px' }} autoComplete="off" ></input>
                                </div>

                                <div>
                                    <label htmlFor="description">Description:</label>
                                    <textarea id="description" name="description" rows="3" cols="60" autoComplete="off"
                                        onChange={this.onChangeDescription}
                                        style={{ width: '60%', height:"100px", maxWidth: '600px' }}>
                                    </textarea>
                                </div>

                                <div id="divButtonsCategorie">
                                    <input type="button" onClick={this.saveCategorie} 
                                    value="Enregistrer" id="buttonEnregistrerCategorie" />
                                </div>

                                </div>

                    //    </form>       
                    
                    )}
                           

                        </div>
                    </div>
                </div>
            </div>
            
            </div>

        );
    }
}

export default CategriePopup;