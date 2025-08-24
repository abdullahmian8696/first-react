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
import { Accordion } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';


function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const toggleOffcanvas = () => setShowOffcanvas((s) => !s);

  // Smooth scroll function for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowOffcanvas(false); // Close offcanvas after navigation
    }
  };

  return (
    <>
      <Header />
      
      {/* Enhanced Modal with better styling */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-gradient-primary text-white">
          <Modal.Title>🎉 Form Submitted Successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <div className="mb-3">
            <span className="display-1">✅</span>
          </div>
          <h5 className="text-success mb-2">Success!</h5>
          <p className="mb-0">Your form has been submitted successfully. Thank you for reaching out!</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button 
            variant="primary" 
            onClick={() => setShowModal(false)}
            className="px-4 rounded-pill"
          >
            Perfect! 👍
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Enhanced Offcanvas Component */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>🚀 Abdullah Mian - Portfolio</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="profile-section mb-4">
            <h6 className="text-primary fw-bold mb-2">👋 Welcome!</h6>
            <p className="mb-3">I'm Abdullah Mian, a passionate Web Developer creating modern digital experiences.</p>
          </div>

          <div className="quick-nav mb-4">
            <h6 className="text-dark fw-bold mb-3">📋 Quick Navigation</h6>
            <div className="nav-links">
              <div className="nav-item" onClick={() => scrollToSection('about-section')}>
                <span className="nav-icon">👤</span>
                <span>About Me</span>
              </div>
              <div className="nav-item" onClick={() => scrollToSection('skills-section')}>
                <span className="nav-icon">🛠️</span>
                <span>Skills & Expertise</span>
              </div>
              <div className="nav-item" onClick={() => scrollToSection('projects-section')}>
                <span className="nav-icon">💼</span>
                <span>Projects</span>
              </div>
              <div className="nav-item" onClick={() => scrollToSection('contact-section')}>
                <span className="nav-icon">📞</span>
                <span>Contact</span>
              </div>
              <div className="nav-item" onClick={() => scrollToSection('progress-section')}>
                <span className="nav-icon">📈</span>
                <span>Progress & Skills</span>
              </div>
            </div>
          </div>

          <div className="tech-stack mb-4">
            <h6 className="text-dark fw-bold mb-3">💻 Tech Stack</h6>
            <div className="tech-badges">
              <span className="tech-badge bg-primary">React</span>
              <span className="tech-badge bg-success">Bootstrap</span>
              <span className="tech-badge bg-warning">JavaScript</span>
              <span className="tech-badge bg-info">HTML5</span>
              <span className="tech-badge bg-secondary">CSS3</span>
              <span className="tech-badge bg-dark">Node.js</span>
            </div>
          </div>

          <div className="contact-quick mb-4">
            <h6 className="text-dark fw-bold mb-3">🤝 Let's Connect</h6>
            <div className="contact-links">
              <a href="mailto:abdullahmian8696@gmail.com" className="contact-link">
                <span className="contact-icon">✉️</span>
                <span>Email Me</span>
              </a>
              <a href="https://www.linkedin.com/in/abdullah-mian-1121a9280/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/abdullahmian8696" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">🔗</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="footer-note">
            <p className="text-muted small mb-0">✨ Ready to bring your ideas to life!</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <main>
        <div style={{ paddingTop: '90px' }}>
          {/* Enhanced Offcanvas Trigger Button */}
          <Container fluid="md" className="mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <Button 
                variant="primary" 
                onClick={toggleOffcanvas} 
                className="offcanvas-trigger-btn position-relative"
              >
                <span className="btn-icon">🎯</span>
                <span className="btn-text">Explore Portfolio</span>
                <span className="btn-arrow">→</span>
                <div className="btn-glow"></div>
              </Button>
              <div className="quick-info text-muted small mt-2 mt-md-0">
                <span>👋 Welcome to my digital space!</span>
              </div>
            </div>
          </Container>

          {/* Enhanced Carousel */}
          <Container fluid="md" className="mb-5">
            <Carousel className="shadow-lg rounded-3 overflow-hidden">
              <Carousel.Item>
                <ExampleCarouselImage text="First slide" imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
                <Carousel.Caption>
                  <h3 className="fw-bold">Welcome to My Portfolio</h3>
                  <p>Discover my journey in web development and creative solutions.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage text="Second slide" imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475" />
                <Carousel.Caption>
                  <h3 className="fw-bold">Modern Web Technologies</h3>
                  <p>Building responsive and interactive applications with React & Bootstrap.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage text="Third slide" imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
                <Carousel.Caption>
                  <h3 className="fw-bold">Clean & Professional Design</h3>
                  <p>Creating digital experiences that are both functional and visually stunning.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>

          {/* Enhanced Alert */}
          <Alert variant="success" className="text-center fw-bold fs-5 shadow-sm">
            🌟 This is my Portfolio Portal - Explore & Connect! 🌟
          </Alert>

          {/* About Section with ID for navigation */}
          <Container fluid="md" className="my-5" id="about-section">
            <Accordion defaultActiveKey="0" className="shadow-sm">
              <Accordion.Item eventKey="0">
                <Accordion.Header>👤 About Me</Accordion.Header>
                <Accordion.Body>
                  Hi, I'm <strong>Abdullah Mian</strong>, a passionate Web Developer focused on 
                  building clean, responsive, and user-friendly websites. 
                  I enjoy turning ideas into reality using modern web technologies 
                  like React, Bootstrap, and JavaScript. My goal is to create 
                  digital experiences that are both functional and visually appealing.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" id="skills-section">
                <Accordion.Header>🛠️ Skills & Expertise</Accordion.Header>
                <Accordion.Body>
                  - <strong>Frontend:</strong> React, Bootstrap, HTML5, CSS3, JavaScript <br/>
                  - <strong>Backend:</strong> Node.js, Express (beginner level) <br/>
                  - <strong>Tools:</strong> Git, VS Code, Figma, Claude, Dribble <br/>
                  I am constantly learning new technologies to improve my skills 
                  and deliver modern solutions.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>💼 Projects</Accordion.Header>
                <Accordion.Body>
                  - <strong>Portfolio Website:</strong> A responsive personal portfolio built with React & Bootstrap. <br/>
                  - <strong>Leave Management System:</strong> A simple employee leave tracking dashboard. <br/>
                  - <strong>Landing Pages:</strong> Designed multiple responsive pages for practice and clients. <br/>
                  Each project helped me sharpen my design, coding, and problem-solving skills.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" id="contact-section">
                <Accordion.Header>📞 Contact</Accordion.Header>
                <Accordion.Body>
                  📧 Email: <a href="mailto:abdullahmian8696@gmail.com">abdullahmian8696@gmail.com</a> <br/>
                  🌐 LinkedIn: <a href="https://www.linkedin.com/in/abdullah-mian-1121a9280/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/abdullah-mian-1121a9280/</a><br/>
                  💻 GitHub:  <a href="https://github.com/abdullahmian8696" target="_blank" rel="noopener noreferrer">https://github.com/abdullahmian8696 </a><br/>

                  I'd love to connect and collaborate on exciting projects!
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>

          {/* Projects Section with ID */}
          <Container fluid="md" className="my-5" id="projects-section">
            <h3 className="text-center mb-4 fw-bold text-dark">🚀 Featured Projects</h3>
            <CardGroup className="shadow-sm">
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"/>
                <Card.Body>
                  <Card.Title className="text-primary fw-bold">Portfolio Website</Card.Title>
                  <Card.Text>
                    A responsive personal portfolio built with React & Bootstrap, showcasing my skills, projects, and contact information. Designed for clean navigation and modern aesthetics.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-light">
                  <small className="text-muted fw-semibold">React • Bootstrap • Responsive Design</small>
                </Card.Footer>
              </Card>
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"/>
                <Card.Body>
                  <Card.Title className="text-success fw-bold">Leave Management System</Card.Title>
                  <Card.Text>
                    A simple employee leave tracking dashboard. Features include leave requests, approvals, and a summary dashboard for HR and staff.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-light">
                  <small className="text-muted fw-semibold">Node.js • Express • Dashboard</small>
                </Card.Footer>
              </Card>
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" />
                <Card.Body>
                  <Card.Title className="text-warning fw-bold">Landing Pages</Card.Title>
                  <Card.Text>
                    Designed and developed multiple responsive landing pages for practice and clients, focusing on conversion, branding, and user experience.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-light">
                  <small className="text-muted fw-semibold">HTML5 • CSS3 • UI/UX</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Container>

          {/* Progress Section with ID and enhanced styling */}
          <Container fluid="md" className="my-5" id="progress-section">
            <div className="text-center mb-4">
              <h5 className="fw-bold text-dark mb-3">📈 Technical Skills Progress</h5>
              <p className="text-muted">My current proficiency levels in various technologies</p>
            </div>
            <Row className="justify-content-center mb-4">
              <Col xs="auto"><span className="badge bg-primary fs-6 mx-1 shadow-sm">HTML</span></Col>
              <Col xs="auto"><span className="badge bg-success fs-6 mx-1 shadow-sm">CSS</span></Col>
              <Col xs="auto"><span className="badge bg-warning text-dark fs-6 mx-1 shadow-sm">JavaScript</span></Col>
              <Col xs="auto"><span className="badge bg-info text-dark fs-6 mx-1 shadow-sm">React</span></Col>
              <Col xs="auto"><span className="badge bg-secondary fs-6 mx-1 shadow-sm">Bootstrap</span></Col>
            </Row>
            <div className="progress-wrapper">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted small">Overall Progress</span>
                <span className="text-primary fw-bold small">85%</span>
              </div>
              <ProgressBar 
                animated 
                now={85} 
                className="shadow-sm" 
                style={{ height: '12px' }}
                variant="success"
              />
            </div>
          </Container>

          {/* Enhanced Form Section */}
          <Container fluid="md" className="my-5">
            <div className="bg-light p-4 rounded-3 shadow-sm">
              <h4 className="text-center mb-4 fw-bold text-dark">📝 Get In Touch</h4>
              <Form onSubmit={handleFormSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="fw-semibold">📧 Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" className="shadow-sm" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="fw-semibold">🔒 Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" className="shadow-sm" />
                  </Form.Group>
                </Row>
     
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label className="fw-semibold">🏠 Address</Form.Label>
                  <Form.Control placeholder="Enter your address here" className="shadow-sm" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label className="fw-semibold">🏢 Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" className="shadow-sm" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="fw-semibold">🌆 City</Form.Label>
                    <Form.Control className="shadow-sm" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="fw-semibold">📍 State</Form.Label>
                    <Form.Select defaultValue="Choose..." className="shadow-sm">
                      <option>Choose...</option>
                      <option>Punjab</option>
                      <option>Sindh</option>
                      <option>KPK</option>
                      <option>Balochistan</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="fw-semibold">📮 Zip</Form.Label>
                    <Form.Control className="shadow-sm" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-4" id="formGridCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label="I agree to the terms and conditions"
                    className="fw-semibold"
                  />
                </Form.Group>
              
                <div className="text-center">
                  <Button 
                    variant="primary" 
                    type="submit"
                    className="px-4 py-2 fw-bold rounded-pill shadow-sm"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none'
                    }}
                  >
                    🚀 Submit Form
                  </Button>
                </div>
              </Form>
            </div>
          </Container>

          {/* Enhanced Navigation Buttons */}
          <div className="d-flex justify-content-center my-5 flex-wrap">
            <div className="text-center">
              <h6 className="mb-3 text-muted">Navigate Pages</h6>
              <ButtonGroup className="mb-3 shadow-sm">
                <ToggleButton
                  id="tbg-btn-1"
                  type="radio"
                  variant="outline-primary"
                  name="radio"
                  value="1"
                  checked={true}
                  className="fw-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none'
                  }}
                >
                  🏠 Home
                </ToggleButton>
                <ToggleButton
                  id="tbg-btn-2"
                  type="radio"
                  variant="outline-success"
                  name="radio"
                  value="2"
                  className="fw-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                    color: 'white',
                    border: 'none'
                  }}
                >
                  💼 Projects
                </ToggleButton>

                <ToggleButton
                  id="tbg-btn-3"
                  type="radio"
                  variant="outline-warning"
                  name="radio"
                  value="3"
                  className="fw-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    border: 'none'
                  }}
                >
                  📞 Contact
                </ToggleButton>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;