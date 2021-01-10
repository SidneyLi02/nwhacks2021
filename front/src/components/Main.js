import React, {useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import imgOne from './img/card1.jpg';
import imgTwo from './img/card2.jpg';
import imgThree from './img/card3.jpg';

import './Main.css';

export default function Main() {

    const [switchSearch, setSearch] = useState(false);

    {/* in future, can switch the coniditonal rendering within the bootstrap
    rather than rerendering the entire page's DOM */}
    if (switchSearch) {
        return (
            <Container fluid>
                <Row className = "fillBottom">

                    {/* side column */}
                    <Col md={2}> 
                        <Row> <h4 className = "appTitle" style = {{marginTop: '50px'}}>The Goodness Repository</h4></Row>
                        <br></br>
                        <div className = "btnDisplay">
                        <Button onClick = {() => setSearch(false)} variant="outline-primary">Home</Button>
                        </div>
                        {/* flex box didn't work here... */}
                        <br></br>
                        <div className = "btnDisplay">
                        <Button onClick = {() => setSearch(true)} variant="outline-secondary">Search</Button>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className = "appSub"> Archives</p>
                        <div className = "flexBTN">
                            <Button style = {{marginBottom: '5px'}} variant = "outline-dark">December 2020</Button>
                            <Button style = {{marginBottom: '5px'}} variant = "outline-dark">November 2020</Button>
                            <Button style = {{marginBottom: '5px'}} variant = "outline-dark">October 2020</Button>
                        </div>
                    </Col>

                    {/* empty space */}
                    <Col className = "kek" md={1} /> 
                </Row>
            </Container>
        )
    } else {

    return (
        <div>
            <Container fluid>
                <Row className = "fillBottom">

                    {/* side column */}
                    <Col md={2}> 
                        <Row> <h4 className = "appTitle" style = {{marginTop: '50px'}}>The Goodness Repository</h4></Row>
                        <br></br>
                        <div className = "btnDisplay">
                        <Button onClick = {() => setSearch(false)} variant="outline-primary">Home</Button>
                        </div>
                        {/* flex box didn't work here... */}
                        <br></br>
                        <div className = "btnDisplay">
                        <Button onClick = {() => setSearch(true)} variant="outline-secondary">Search</Button>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className = "appSub"> Archives</p>
                        <div className = "flexBTN">
                            <Button style = {{marginBottom: '5px'}} variant = "outline-dark">December 2020</Button>
                            <Button style = {{marginBottom: '5px'}} variant = "outline-dark">November 2020</Button>
                            <Button style = {{marginBottom: '5px'}} variant = "outline-dark">October 2020</Button>
                        </div>
                    </Col>

                    {/* empty space */}
                    <Col className = "kek" md={1} /> 

                    {/* first column with content */}
                    <Col md={3}> 

                    <Card className = "alignCenter" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {imgOne}/>
                    <Card.Body>
                        <Card.Title>August 2, 2019</Card.Title>
                        <Card.Text>
                        I was talking with my old high school friends at the local outdoor pool
                        BBQ event.
                        </Card.Text>
                        <Button variant="primary">Relive it.</Button>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col md={3}>

                    <Card className = "alignCenter" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {imgTwo} />
                    <Card.Body>
                        <Card.Title>December 23, 2003</Card.Title>
                        <Card.Text>
                        My daughter and I spent our time after her pre-school graduation playing
                        around at Stanley Park.
                        </Card.Text>
                        <Button variant="primary">Relive it.</Button>
                    </Card.Body>
                    </Card>

                    </Col>

                    <Col md={3}>

                    <Card className = "alignCenter" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imgThree} />
                    <Card.Body>
                        <Card.Title>April 13, 2012</Card.Title>
                        <Card.Text>
                        My grandfather laughed at my corny jokes and said that he was proud of me.
                        </Card.Text>
                        <Button variant="primary">Relive it.</Button>
                    </Card.Body>
                    </Card>
                    
                    </Col>

                </Row>
            </Container>
        </div>
    )
    }
}
