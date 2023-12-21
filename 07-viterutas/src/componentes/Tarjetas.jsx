import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Tarjetas({ characters }) {

    const imprimirArgumento = () => {

        {
            characters.map((c, index) => {
                console.log(index, c.name);
            })
        }

        console.log('=============================================');

        {
            characters.map((c) => {
                console.log(c.id, c.name);
            })
        }

    }

    return (
        <>

            {/* Ejemplo de card que usamos para renderizar */}
            <div className='d-flex flex-wrap'>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.conmebol.com/wp-content/uploads/2023/03/40ad4eba3c22c28da02e5262d4f109fb44d41e1dw.jpg" />
                    <Card.Body>
                        <Card.Title>Ejemplo de Cards</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                {characters.map((c) => (
                    <Card style={{ width: '18rem' }} key={c.id} className='m-2' >
                        <Card.Img variant="top" src={c.image} />
                        <Card.Body>
                            <Card.Title> {c.name} </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the content.
                            </Card.Text>
                            <Button variant="primary"> {c.status}</Button>
                        </Card.Body>
                    </Card>
                ))}

            </div>

            <Button onClick={imprimirArgumento}>
                Imprimir Datos desde la Api
            </Button>
        </>
    );
}

Tarjetas.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default Tarjetas;