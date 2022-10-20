import '../../style/header.css'
import Logo from "../../image/logo1.png"
import {Navbar, Nav, Container } from 'react-bootstrap';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';


function Header4() {

  let navigate=useNavigate();

  return(
    <>
      <Navbar expand="lg" style={{background:'#fff'}}>
          <Container className='header'>
          <Navbar.Brand><img className='logo1' src={Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/signup') }}>회원가입</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/') }}>로그인</Nav.Link>       
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  )
}

export default Header4;