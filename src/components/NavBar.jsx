import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{ width: '100%' }}>
    <Container fluid>
        <NavLink className="nav-link" to="/">Pokeamigo</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0"></Nav>
          <Nav>
            <NavLink className={({ isActive }) => (isActive ? "nav-link text-danger active" : "nav-link")} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "nav-link text-danger active" : "nav-link")} to="/pokemones">Pokemones</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
