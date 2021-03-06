import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import API from '../../utils/API';
import './style.css';
import { useHistory} from 'react-router-dom';

const Navigation = ({ userData, setUserData }) => {
  let history = useHistory();

  function logout() {
    API.logout()
      .then(res => {
        setUserData({
          username: '',
          id: '',
        })
        history.push("/login")
      })
  }

  return (
    <div>
      <Navbar style={{ backgroundColor: '#B5838D' }}>
        <Navbar.Brand
          as={Link}
          className='aladin'
          to='/'
        >
          <span style={{ color: '#FFCDB2' }}>catlady</span>
        </Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link
            as={Link}
            to='/'
            className={
              window.location.pathname === '/'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            My Pets
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/petfoods"
            className={
              window.location.pathname === "/"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Food List
          </Nav.Link>
          {userData.username === "" ?
          <Nav.Link
            as={Link}
            to="/signup"
            className={
              window.location.pathname === '/signup'
                ? 'nav-link active'
                : 'nav-link'
            }
          > 
            Sign Up
          </Nav.Link>
          : null }
          <Nav.Link
            onClick={logout}
            className='ml-auto'>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
