import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Tarjetas( { characters } ) {

    const imprimirArgumento = () => {

        {characters.map((c) =>{
            console.log(c.name);
        })}

    }

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.conmebol.com/wp-content/uploads/2023/03/40ad4eba3c22c28da02e5262d4f109fb44d41e1dw.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Button onClick={ imprimirArgumento }>
                Imprimir Datos desde la Api
        </Button>
        </>
    );
}

export default Tarjetas;