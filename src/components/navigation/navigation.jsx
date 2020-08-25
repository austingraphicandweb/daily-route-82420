import React from 'react';
import '../navigation/navigation.css';
import { Navbar } from 'react-bootstrap';
import logo from '../navigation/logo.png';

function navigation() {
    return (
        <Navbar bg="primary">
            <img src={logo} alt="logo" className="logo"/>
        </Navbar>
    );
}

export default navigation;