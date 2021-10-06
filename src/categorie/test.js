import  { Form} from 'react-bootstrap';


const MyCategory = ()=>{

return(
  <Form.Control>
  <Form.Group className="mb-3" >
    <Form.Label>Code</Form.Label>
    <Form.Control placeholder="Entrer le code"/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Catégorie</Form.Label>
    <Form.Control placeholder="Entrer la catégorie"/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Déscription</Form.Label>
    <Form.Control placeholder="Entrer la catégorie"/>
  </Form.Group>
  
  <div>
                                    <Form.Label htmlFor="description">Description:</Form.Label>
                                    <textarea id="description" name="description" rows="3" cols="20" autoComplete="off"
                                      
                                        style={{ width: '60%', maxWidth: '600px', height:"60px" }}>
                                    </textarea>
                                </div>
  
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Enregistrer</button>
    </div>
  </div>
 
  </Form.Control>

);

}

export default MyCategory;

