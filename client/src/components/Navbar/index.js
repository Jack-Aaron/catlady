import React from 'react';
import Link from 'react-router-dom/Link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

const Navigation = (props) => {

    return (
        <div>
            <Navbar style={{ backgroundColor: '#B5838D' }}>
                <Navbar.Brand as={Link} className='aladin' href="/" style={{ color: '#FFCDB2' }}>catlady</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to='/'
                        className={window.location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'} />
                    <Nav.Link as={Link} to='/dashboard'
                        className={window.location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}>
                        My Pets</Nav.Link>
                    <Nav.Link as={Link} to="/signup"
                        className={window.location.pathname === '/signup' ? 'nav-link active' : 'nav-link'}>
                        Sign Up</Nav.Link>
                    <Nav.Link as={Link} to="/"
                        className='ml-auto'>Logout</Nav.Link>
                    {/* logout will go here */}
                </Nav>
            </Navbar>
        </div>
    )
}


export default Navigation;