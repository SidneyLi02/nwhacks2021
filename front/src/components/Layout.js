import React from 'react';
import Main from './Main';
import Auth from './Auth';
import Navbar from 'react-bootstrap/Navbar';
import Smile from './img/smile.png';
import Carousel from 'react-bootstrap/Carousel'
import SlideOne from './img/kek.jpg';
import SlideTwo from './img/kek2.jpg';
import SlideThree from './img/kek3.jpg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

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
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                        
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
                        <Col></Col>
                    </Row>
                </Container>
                
                <div className = "btnDisplay">
                <button onClick = {() => hasClicked(true)}>Register</button>
                <button onClick = {() => startTransfer(true)}>Proceed</button>
                </div>



            </div>
        )
    }

}


