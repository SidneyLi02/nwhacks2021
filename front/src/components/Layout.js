import React from 'react';
import Main from './Main';
import Auth from './Auth';
import Carousel from 'react-bootstrap/Carousel'
import SlideOne from './img/kek.jpg';
import SlideTwo from './img/kek2.jpg';
import SlideThree from './img/kek3.jpg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

import './Layout.css';

export default function Layout(props) {

    // setting props to const and changeState

    // transfer is when click button 
    const transferBool = props.transfer;
    const {startTransfer} = props;

    // does not need change of state, prolly del
    const loggedInBool = props.loggedIn; 
    const {hasLoggedIn} = props;

    const clickRegister = props.clickRegister;
    const {hasClicked} = props;


    if (transferBool && loggedInBool) {
        return (
            <Main />
        )
    } else if (clickRegister) {

        return (
            <Auth loggedInBool = {loggedInBool} hasLoggedIn = {hasLoggedIn} />
        )
    } 
    else {
        return (
            <div>
                <h1 className = "appTitle">The Goodness Repository</h1>
                <div className = "btnDisplay">
                <Button onClick = {() => hasClicked(true)} variant="outline-primary">Register</Button>
                <Button onClick = {() => startTransfer(true)} variant="outline-secondary">Continue</Button>
                </div>
                <p className = "appSub">Connect with your emotions through reflections.</p>
                <Container className = "fixBottom">
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                        
                        <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= { SlideOne }
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= { SlideTwo }
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= { SlideThree }
                        alt="Third slide"
                        />
                    </Carousel.Item>
            </Carousel>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            
            </div>
        )
    }

}


