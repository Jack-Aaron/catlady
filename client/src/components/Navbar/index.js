
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
import './style.css';
// import { render } from 'react-dom';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar style={{ backgroundColor: '#B5838D' }} className='lato' light expand="md">
                <NavbarBrand className='aladin' href="/">catlady</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">My Pets</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <NavLink href="/">Logout</NavLink>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}


export default Navigation;