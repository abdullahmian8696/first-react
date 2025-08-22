import './App.css'
import Header from './Components/Header' 
import Footer from './Components/Footer'  
import { Alert, Button ,Form ,  Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './Components/ExampleCarouselImage';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Accordion } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function App()
 {
  return (
    <>
      <Header />

      <main>
        <div style={{ paddingTop: '90px' }}>
          <Container fluid="md" className="mb-5">
            <Carousel className="shadow rounded">
              <Carousel.Item>
                <ExampleCarouselImage text="First slide" imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage text="Second slide" imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage text="Third slide" imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
          <Alert variant="success">This is my Portal  </Alert>

          <Container fluid="md" className="my-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>About Me</Accordion.Header>
                <Accordion.Body>
                  Hi, I'm <strong>Abdullah Mian</strong>, a passionate Web Developer focused on 
                  building clean, responsive, and user-friendly websites. 
                  I enjoy turning ideas into reality using modern web technologies 
                  like React, Bootstrap, and JavaScript. My goal is to create 
                  digital experiences that are both functional and visually appealing.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Skills & Expertise</Accordion.Header>
                <Accordion.Body>
                  - Frontend: React, Bootstrap, HTML5, CSS3, JavaScript <br/>
                  - Backend: Node.js, Express (beginner level) <br/>
                  - Tools: Git, VS Code, Figma ,claude,Dribble <br/>
                  I am constantly learning new technologies to improve my skills 
                  and deliver modern solutions.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Projects</Accordion.Header>
                <Accordion.Body>
                  - <strong>Portfolio Website:</strong> A responsive personal portfolio built with React & Bootstrap. <br/>
                  - <strong>Leave Management System:</strong> A simple employee leave tracking dashboard. <br/>
                  - <strong>Landing Pages:</strong> Designed multiple responsive pages for practice and clients. <br/>
                  Each project helped me sharpen my design, coding, and problem-solving skills.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Contact</Accordion.Header>
                <Accordion.Body>
                  📧 Email: abdullahmian8696@gamil.com <br/>
                  🌐 LinkedIn: <a href="https://www.linkedin.com/in/abdullah-mian-1121a9280/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/abdullah-mian-1121a9280/</a><br/>
                  💻 GitHub:  <a href="https://github.com/abdullahmian8696" target="_blank" rel="noopener noreferrer">https://github.com/abdullahmian8696 </a><br/>

                  I’d love to connect and collaborate on exciting projects!
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>

          <Container fluid="md" className="my-5">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"/>
                <Card.Body>
                  <Card.Title>Portfolio Website</Card.Title>
                  <Card.Text>
                    A responsive personal portfolio built with React & Bootstrap, showcasing my skills, projects, and contact information. Designed for clean navigation and modern aesthetics.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">React • Bootstrap • Responsive Design</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80 "/>
                <Card.Body>
                  <Card.Title>Leave Management System</Card.Title>
                  <Card.Text>
                    A simple employee leave tracking dashboard. Features include leave requests, approvals, and a summary dashboard for HR and staff.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Node.js • Express • Dashboard</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" />
                <Card.Body>
                  <Card.Title>Landing Pages</Card.Title>
                  <Card.Text>
                    Designed and developed multiple responsive landing pages for practice and clients, focusing on conversion, branding, and user experience.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">HTML5 • CSS3 • UI/UX</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Container>

          <Container fluid="md" className="my-5">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
   
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Enter your address here " />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            

             <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={
                <Popover id="popover-positioned-top">
                  <Popover.Header as="h3">Form Submitted</Popover.Header>
                  <Popover.Body>
                    <strong>Success!</strong> Your form has been submitted.
                  </Popover.Body>
                </Popover>
              }
              rootClose
            >
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </OverlayTrigger>
            </Form>
          </Container>

          <div className="d-flex justify-content-center my-5 flex-wrap">
            <ButtonGroup className="mb-3 mt-4">
              <ToggleButton
                id="tbg-btn-1"
                type="radio"
                variant="secondary"
                name="radio"
                value="1"
                checked={true}
              >
                Page 1
              </ToggleButton>
              <ToggleButton
                id="tbg-btn-2"
                type="radio"
                variant="danger"
                name="radio"
                value="2"
              >
                Page 2
              </ToggleButton>

              <ToggleButton
                id="tbg-btn-3"
                type="radio"
                variant="info"
                name="radio"
                value="3"
              >
                Page 3
              </ToggleButton>
            </ButtonGroup>
          </div>
        </div>
      </main>
          <Footer />
    </>
     
  );
  
}
export default App
