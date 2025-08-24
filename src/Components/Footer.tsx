import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Footer() {
  return (
    <>
 <Navbar bg="dark" variant="light" fixed="bottom" className="bg-body-dark  " expand="lg" >
      <Container>
        <Navbar.Brand href="#home" className= "text-light"  > Personal Info </Navbar.Brand>
          
        <div className="d-flex justify-content-center flex-grow-1">
            <Breadcrumb className="breadcrumb-white mb-0">
              <Breadcrumb.Item href="https://github.com/abdullahmian869">GitHub</Breadcrumb.Item>
              <Breadcrumb.Item href="https://www.linkedin.com/in/abdullah-mian-1121a9280/">LinkedIn</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Email: abdullahmian8696@gamil.com</Breadcrumb.Item>
            </Breadcrumb>
          </div>

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
