import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="light" fixed="top" expand="lg">
        <Container>
        <Navbar.Brand href="#home"className="text-light">Dashboard</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav"/>
          <Nav className="me-auto ">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#features" className="text-light">Features</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
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
