import { Form, Row, Button } from 'react-bootstrap';
import PopupCategorie from "../categorie/CategriePopup"
import CategorieComponent from "../categorie/CategoriesComponents";
import {useState} from 'react';




const MyClient = () => {
  const [showPopupCategorie, setPopUp] = useState(false)
  const [categorieID, setCategorieID] = useState(null);
    const [categorie, setCategorie] = useState("");

  const togglePopupCategorie = (e) => {
    setPopUp(!showPopupCategorie)
    // actualiser le dropdown de categories apres avoir inserer une nouvelle categorie
   // categorieGetAll();
}


	return (
    <div>
      <div>
		<Form>
			<Row className="mb-3">

				<Form.Group controlId="formGridEmail">
					<Form.Label>Code </Form.Label>
					<Form.Control style={{ width: 150 }} />
				</Form.Group>

				<Form.Group controlId="formGridEmail">
					<Form.Label>Nom du client</Form.Label>
					<Form.Control placeholder="Entrer le nom du client" />
				</Form.Group>

				<Form.Group controlId="formGridPassword">
					<Form.Label>Adresse</Form.Label>
					<Form.Control placeholder="Entrer l'adresse du client" />
				</Form.Group>
			</Row>

			<Form.Group className="mb-3" controlId="formGridAddress1">
				<Form.Label>Ville</Form.Label>
				<Form.Control placeholder="1234 Main St" />
			</Form.Group>

			<Row className="mb-3">
        
				<Form.Group controlId="formGridCity">
					<Form.Label>City</Form.Label>
					<Form.Control />
				</Form.Group>

				<Form.Group controlId="formGridState">
					<Form.Label>Pays</Form.Label>
					<Form.Control placeholder="Pays" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGridAddress2">
					<Form.Label>Profession</Form.Label>
					<Form.Control placeholder="Profession" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGridAddress2">
					<Form.Label>Date de Naissance</Form.Label>
					<Form.Control placeholder="Date de naissance" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGridAddress2">
					<Form.Label>Pays de Naissance</Form.Label>
					<Form.Control placeholder="Pays de Naissance" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGridAddress2">
					{/* <Form.Label>Catégorie</Form.Label>
					<Form.Select>
						<option>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</Form.Select> */}
          <div>
                      <CategorieComponent categorieID2={(idCat, categorieDesc) => {
                        // this.setState({
                          setCategorieID(idCat) ;
                          setCategorie(categorieDesc) ;
                        // })

                        // this.setState(function (prevState) {
                        //   return {
                        //     data: {
                        //       ...prevState.data,
                        //       categorieID: idCat
                        //     }
                        //   }
                        // });

                      }
                      } />

                    </div>
				</Form.Group>
			</Row>

			<Button variant="primary" type="submit">
				Submit
			</Button>
     
		</Form>
    </div>


   

    </div>
     
	);
};

export default MyClient;
