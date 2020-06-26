import React, { useState } from 'react';
import {
    Button
} from 'reactstrap';
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
import './style.css';
// import { render } from 'react-dom';

const AddBtn = (props) => {

    return (
        <div>
            <hr className="my-2" />
            <p>Click Add Pet to begin managing the nutrition for your pet!</p>
            <p className="lead">
                <Button style={{ backgroundColor: '#B5838D' }}>Add Pet</Button>
            </p>
        </div>
    )
}


export default AddBtn;