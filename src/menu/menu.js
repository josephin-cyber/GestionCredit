import { Nav } from 'react-bootstrap';
import CategorieInsert from '../categorie/EnregistrerCategorie';
import MyCredit from '../credit/EnregistrerCredit';
import MyClient from '../gestionClient/EnregistrerClient';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../index.css';

const MenuNav = () => {
	return (
		<Router>
			<div style = {{marginTop : 20}}>
				<Nav 
					variant="pills"
					defaultActiveKey="/EnregistrerCategorie"
					className="justify-content-end"
				>
                   
					<Nav.Item>
						<Link className="nav-link" to={'/EnregistrerCategorie'}>
						Enregistrer catégories de clients
						</Link>
					</Nav.Item>
                    <Nav.Item>
						<Link className="nav-link" to={'/EnregistrerClient'}>
                        Enregistrer clients 
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="nav-link" to={'/EnregistrerCredit'}>
                        Enregistrer demandes de crédits
						</Link>
					</Nav.Item>
                    <Nav.Item>
						<Link className="nav-link" to={'/EnregistrerCredit'}>
                        Traitement crédits 
						</Link>
					</Nav.Item>
                    <Nav.Item>
						<Link className="nav-link" to={'/EnregistrerCredit'}>
                        Consultations
						</Link>
					</Nav.Item>
					
					
				</Nav>

				<Switch>
					<Route exact path="/EnregistrerCategorie" component={CategorieInsert} />
                    <Route path="/EnregistrerCredit" component={MyCredit} />
                    <Route path="/EnregistrerClient" component={MyClient} />
				</Switch>
			</div>
		</Router>
	);
};

export default MenuNav;
