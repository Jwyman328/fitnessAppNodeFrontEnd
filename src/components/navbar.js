import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

function MainNavBar(){
    return(
    <Container>
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/inputPoints">Input Points</Nav.Link>
    </Navbar.Collapse>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/GoalPage">Goals</Nav.Link>
    </Navbar.Collapse> 
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/Challenges">challenges</Nav.Link>
    </Navbar.Collapse> 
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/ViewResults">View Results</Nav.Link>
    </Navbar.Collapse> 
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/rules">Rules</Nav.Link>
    </Navbar.Collapse> 
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/HowTo">How To</Nav.Link>
    </Navbar.Collapse> 
    <NavDropdown title="Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="logOut">Log Out</NavDropdown.Item>
      </NavDropdown>
  </Navbar>
  </Container>
  )
}
export default MainNavBar;
