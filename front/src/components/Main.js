import React, {useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './Main.css';

export default function Main() {

    const [switchSearch, setSearch] = useState(false);

    {/* might be broken */}
    if (switchSearch) {
        return (
            <p>broken</p>
        )
    } 

    return (
        <div>
            <Container fluid>
                <Row className = "fillBottom">

                    {/* side column */}
                    <Col md={2}> 
                        <Row> <h4 className = "appTitle" style = {{marginTop: '50px'}}>The Goodness Repository</h4></Row>
                        <br></br>
                        <div className = "btnDisplay">
                        <Button variant="outline-primary">Home</Button>
                        </div>
                        {/* flex box didn't work here... */}
                        <br></br>
                        <div className = "btnDisplay">
                        <Button variant="outline-secondary">Search</Button>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className = "appSub"> Archives</p>
                        <div className = "flexBTN">
                            <Button style = {{marginBottom: '5px'}} variant = "outline-primary">December 2020</Button>
                            <Button style = {{marginBottom: '5px'}} variant = "outline-primary">November 2020</Button>
                            <Button style = {{marginBottom: '5px'}} variant = "outline-primary">October 2020</Button>
                        </div>
                    </Col>

                    {/* empty space */}
                    <Col className = "mycontentLeft"
                    md={1}>blorp</Col> 

                    {/* first column with content */}
                    <Col md={3}> 

                    <Card className = "alignCenter" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col md={3}>

                    <Card className = "alignCenter" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>

                    </Col>

                    <Col md={3}>

                    <Card className = "alignCenter" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}
