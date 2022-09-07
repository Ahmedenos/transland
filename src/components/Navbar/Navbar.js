import React ,{useRef} from "react"
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.css"
import "../main.css"
import loImge from "../../assets/logo.png"
function Navbare() {
  const navScroll=useRef()
  window.onscroll= ()=>{
    if((window.scrollY >100)&& (window.scrollY<600) ){
      navScroll.current.classList.add("transScroll")
    }
    else if(window.scrollY>600){
      navScroll.current.classList.add( "navScroll" ,"fixed-top")
      navScroll.current.classList.remove("transScroll")
    }
    else if(window.scrollY<100){
      navScroll.current.classList.remove("transScroll","navScroll","fixed-top")
    }

}
  return (
    <Navbar style={{background:"#fff"}} expand="lg" ref={navScroll}>
      <div className="container px-lg-5 con-trans">
        <Navbar.Brand href="#" className="pl-lg-4"><img src={loImge}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 m-lg-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <NavLink to="/">Home</NavLink> */}
            <Nav.Link href="#slider">Home</Nav.Link>
            <Nav.Link href="#about-s">About</Nav.Link>
            <Nav.Link href="#service-s">services</Nav.Link>
            <NavDropdown title="Pages" id="navbarScrollingDropdown" >
              <div data-aos="fade-up">
              <NavDropdown.Item href="#team-s">Team</NavDropdown.Item>
              <NavDropdown.Item href="#amazing-s">Amazing</NavDropdown.Item>
              <NavDropdown.Item href="#quote-s">Quote</NavDropdown.Item>
              </div>
              
            </NavDropdown>
            <Nav.Link href="#news-s" > News</Nav.Link>
            <Nav.Link href="#contact" > Contact</Nav.Link>
            {/* <NavLink to="/contact">Contact</NavLink> */}
          </Nav>
          <Form className="d-flex">
            <button className="btn  p-3 my-btn"> Get A Quote<i className="fa-solid fa-right-long"></i> </button>
            <i className="fa-solid fa-magnifying-glass d-block align-self-center icon-search"></i>
          </Form>
        </Navbar.Collapse>
        </div>
      
    </Navbar>
  );
}

export default Navbare;