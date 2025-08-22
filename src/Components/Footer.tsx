import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Footer() {
  return (
    <>
 <Navbar bg="dark" variant="light" fixed="bottom" className="bg-body-dark mt-4 " expand="lg" >
      <Container>
        <Navbar.Brand href="#home" className= "text-light"  > Personal Info </Navbar.Brand>
     
        <Navbar.Collapse className="justify-content-end ">
          <Navbar.Text>
            Click Here <a href="#login" className="text-light "> Login</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Footer
