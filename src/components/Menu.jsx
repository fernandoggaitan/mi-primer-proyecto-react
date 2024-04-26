import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Menu = () => {

    const { getIsLogueado, logOut } = useAuth();

    const navigate = useNavigate();

    const logOutMenu = () => {
        //Cambiamos el estado del contexto de logueado a NO logueado
        logOut();
        //Redireccionamos a "/login"
        navigate("/login");
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/"> Inicio </Link>
                        <Link className="nav-link" to="/info"> Info </Link>
                        <Link className="nav-link" to="/posts"> Blog </Link>                    
                        {   
                            (getIsLogueado())
                            ?
                                <>
                                    <Link className="nav-link" to="/welcome"> Welcome </Link>
                                    <a href="#" className="nav-link" onClick={logOutMenu}> Logout </a>
                                </>
                            :
                                <Link className="nav-link" to="/login"> Login </Link>                            
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}