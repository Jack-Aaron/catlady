import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import './App.css';
import Mypets from './components/Mypets';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar className='lato' color="light" light expand="md">
          <NavbarBrand className='aladin' href="/">catlady</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to='/Mypets'>My Pets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Signup">Sign Up</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                </DropdownItem>
                  <DropdownItem>
                    Option 2
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>
              <NavLink tag={Link} to='/Logout'>Logout</NavLink>
            </NavbarText>
          </Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;