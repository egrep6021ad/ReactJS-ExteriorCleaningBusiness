import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logoNoBack from './logoNoBack.png'
class HeaderComponent extends Component {
    render() {
        return (
<div style={{ width:'90%',backgroundColor:'#F9F1E9', borderRadius:'9px',color:"#385F9B",paddingLeft:'10%'}}>
  
 <Navbar expand="lg" >
  <Container style={{width:'100vw',backgroundColor:'#F9F1E9',paddingLeft:'0', margin:'5'}}>
    <Navbar.Brand href="/" style={{fontSize:"155%",fontWeight:"bold", fontFamily:'Lexend Deca', color:"#385F9B"}}>Advanced Exterior Services</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:'#F9F1E9',color:"#385F9B",}} >
      <Nav className="me-auto">
        <Nav.Link style={{ color:"#385F9B",fontSize:"150%",fontWeight: "bold", fontStyle: "italic",fontFamily:'Lexend Deca'}}href="/add-client">Instant Quote!&trade;</Nav.Link>
        
        <NavDropdown style={{fontSize:"150%",color:"#385F9B",backgroundColor:'#F9F1E9',fontFamily:'Lexend Deca'}} >
          <NavDropdown.Item style={{fontSize:"150%",color:"#385F9B"}}href="/contact">Contact</NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      
    </Navbar.Collapse>
   
  </Container>
  <img style={{paddingTop:'2%',paddingLeft:'15%',paddingBottom:'2%',paddingRight:'10',  width:'15rem',height:'5rem'}}src={logoNoBack} alt='premier atlanta exterior cleaning services'></img>
</Navbar>
</div>
        );
    }
}

export default HeaderComponent;