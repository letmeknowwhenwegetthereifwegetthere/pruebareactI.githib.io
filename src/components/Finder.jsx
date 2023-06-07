
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


const finderpoke = ({ onChange }) => {
    return (
        <>
            <Navbar bg="dark" className="text-white justify-content-center">
                
                    
                    <Container className=" bg-dark text-white justify-content-center text-center">
                        {/* <Form onSubmit={onChange}> */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <h1>Buscador de imagenes de Rovers en Marte</h1>
                            </Form.Label>
                            <Form.Control
                                onChange={onChange}
                                type="text"
                                placeholder="Ingresa modelo de camara"
                            />
                            <Form.Text className="text-muted">
                                Elige modelo de camara para ingresar: FHAZ, RHAZ, MAST, CHEMCAM,
                                MAHLI, MARDI, NAVCAM, PANCAM, MINITES
                            </Form.Text>
                        </Form.Group>                        
                    </Container>

                    
                
            </Navbar>
        </>
    );
};

export default finderpoke;
