import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const { logIn } = useAuth();
    const navigate = useNavigate();

    const logInForm = () => {
        //Cambiamos el estado del contexto de NO logueado a logueado
        logIn();
        //Redireccionamos a "/welcome"
        navigate("/welcome");
    };

    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <Button variant="primary" onClick={logInForm}> Login </Button>
        </Form>
    );
}