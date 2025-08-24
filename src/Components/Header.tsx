import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Toast from 'react-bootstrap/Toast';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="light" fixed="top" expand="lg">
        <Container>
        <Navbar.Brand href="#home"className="text-light">
          <img
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/96/external-programming-computer-science-flaticons-lineal-color-flat-icons.png" // Replace with your logo URL or local path
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          Abdullah Mian Portfolio</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav"/>
          <Nav className="me-auto ">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#features" className="text-light">Features</Nav.Link>
            <NavDropdown title="More " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1 ">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2 ">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3 ">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Container>
          </Navbar>
    </>
  )
}
export default Header
