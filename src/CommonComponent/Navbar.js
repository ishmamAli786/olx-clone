import React,{useState} from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import logo from ".././assets/lo.png";
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {filterByInput} from '.././store/actions/useAction';

export default function Navbars() {
  const [getCateg,setGetCateg]=useState('');
  const dispatch=useDispatch();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
          <img src={logo} alt="logo" width="20%" height="20%"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="input-group mb-3" style={{width:"100%",height:"100%"}}>
                <input
                style={{paddingRight:"300px"}}
                  type="text"
                  className="form-control"
                  placeholder="Find Car,Mobile..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e)=>setGetCateg(e.target.value)}
                />
                <span className="input-group-text" id="basic-addon2" style={{backgroundColor:"black",color:"white"}}>
                <i className="fas fa-search" onClick={()=>dispatch(filterByInput(getCateg))}></i>
                </span>
              </div>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#link">SELL</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
