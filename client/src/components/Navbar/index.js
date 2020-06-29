
import React, { useState } from 'react';
import { Link as NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
// import { render } from 'react-dom';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar style={{ backgroundColor: '#B5838D' }}>
                <Navbar.Brand className='aladin' href="/" style={{ color: '#FFCDB2' }}>catlady</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link to='/dashboard'
                        className={window.location.pathname === '/discover' ? 'nav-link active' : 'nav-link'}>
                        My Pets</Nav.Link>
                    <Nav.Link to="/"
                        className={window.location.pathname === '/discover' ? 'nav-link active' : 'nav-link'}>
                        Sign Up</Nav.Link>
                    <Nav.Link to="/"
                        className='ml-auto'>Logout</Nav.Link>
                    {/* logout will go here */}
                </Nav>
            </Navbar>
        </div>
    )
}


export default Navigation;