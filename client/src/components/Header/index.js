import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css';

const Header = (props) => {

    return (
        <div>
            <Jumbotron style={{
                backgroundColor: '#E5989B',
                textAlign: 'center'
            }}>
                <h1 className="display-3">My Pets</h1>
                <p className="lead">Choose one of your Pets by clicking one below to check out or modify their diet.</p>
            </Jumbotron>
        </div>
    )
}

export default Header;
