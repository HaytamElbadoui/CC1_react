import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import '../Navbar/Navbar.css';

const navBarStyle = {
  backgroundColor: 'green',
  color: '#ffffff',
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  padding: '1rem 0.5rem',
  borderRadius: '5px',
};

function NavBar() {
  return (
    <Navbar expand="lg" style={navBarStyle} variant="dark">
      <Container fluid>
        <Link to="/" className="navbar-brand" style={linkStyle}>
          Project
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" exact style={linkStyle} activeClassName="active" className="nav-link">
              ACCEUIL
            </NavLink>
            <NavLink to="/Tp1" style={linkStyle} activeClassName="active" className="nav-link">
              TP1
            </NavLink>
            <NavLink to="/Tp2" style={linkStyle} activeClassName="active" className="nav-link">
              TP2
            </NavLink>
            <NavLink to="/Tp3" style={linkStyle} activeClassName="active" className="nav-link">
              TP3
            </NavLink>
            <NavLink to="/Tp4" style={linkStyle} activeClassName="active" className="nav-link">
              TP4
            </NavLink>
            <NavLink to="/Tp5" style={linkStyle} activeClassName="active" className="nav-link">
              TP5
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
