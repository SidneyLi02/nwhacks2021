import React from 'react';
import Main from './Main';
import Auth from './Auth';

export default function Layout(props) {

    // setting props to const and changeState

    // transfer is when click button 
    const transferBool = props.transfer;
    const {startTransfer} = props;

    console.log(props)

    // does not need change of state, prolly del
    const loggedInBool = props.loggedIn; 

    const clickRegister = props.clickRegister;
    const {hasClicked} = props;


    if (transferBool && loggedInBool) {
        return (
            <Main />
        )
    } else if (clickRegister) {
        return (
            <Auth />
        )
    } 
    else {
        return (
            <div>
                <p>test</p>
                <button onClick = {() => hasClicked(true)}>Register</button>
                <button onClick = {() => startTransfer(true)}>Proceed</button>
            </div>
        )
    }

}
