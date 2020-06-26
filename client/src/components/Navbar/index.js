
import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import { Link as NavLink } from 'react-router-dom';
import './style.css';
// import { render } from 'react-dom';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar style={{ backgroundColor: '#B5838D' }} className='lato' light expand="md">
                <NavbarBrand className='aladin' href="/" style={{ color: '#FFCDB2' }}>catlady</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to='/dashboard' className={window.location.pathname === '/discover' ? 'nav-link active' : 'nav-link'}>My Pets</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/" className={window.location.pathname === '/discover' ? 'nav-link active' : 'nav-link'}>Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <NavLink href="/">Logout</NavLink>
                        {/* logout will go here */}
                    </NavbarText>
            </Navbar>
        </div>
    )
}


export default Navigation;