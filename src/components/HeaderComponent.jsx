import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

class HeaderComponent extends Component {
    render() {
        return (
<div style={{ width:'90%',backgroundColor:'#F9F1E9', borderRadius:'9px',color:"#385F9B",paddingLeft:'7%'}}>
 <Navbar expand="lg" >
  <Container style={{width:'100%',backgroundColor:'#F9F1E9',paddingLeft:'4%', margin:'0'}}>
    <Navbar.Brand href="/" style={{fontSize:"140%", fontFamily:'Zilla Slab Highlight', color:"#385F9B"}}>Advanced Exterior Services</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:'#F9F1E9',color:"#385F9B",}} >
      <Nav className="me-auto">
        <Nav.Link style={{ color:"#385F9B",fontSize:"90%",fontWeight: "bold", fontStyle: "italic",fontFamily:'Lexend Deca'}}href="/add-client">Instant Quote!&trade;</Nav.Link>
        
        <NavDropdown style={{fontSize:"90%",color:"#385F9B",backgroundColor:'#F9F1E9',fontFamily:'Lexend Deca'}} >
          <NavDropdown.Item style={{fontSize:"90%",color:"#385F9B"}}href="/contact">Contact</NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      
    </Navbar.Collapse>
   
  </Container>
  
</Navbar>
</div>
        );
    }
}

export default HeaderComponent;