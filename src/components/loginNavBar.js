import React from 'react'
import {Navbar, Nav,NavDropdown} from 'react-bootstrap'
import { Link, Router} from "react-router-dom";

function LoginNavBar(){
    return(<Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Signup</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link  href="/login">Login</Nav.Link>
    </Navbar.Collapse>
  </Navbar>)
}
export default LoginNavBar;
