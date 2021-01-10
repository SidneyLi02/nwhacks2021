import React from 'react';
import './Auth.css';
import Main from './Main';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


export default function Auth(props) {

    const loggedIn = props.loggedInBool;
    const {hasLoggedIn} = props;

    return (
        <div className = "outer, fixOuter">
            <div className = "inner">
        <form>

            <h3>Log in</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="email" className="form-control" placeholder="Enter username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button onClick = {() => hasLoggedIn(true)} type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        </form>
        </div>
        </div>
    );




}

