import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-2">
      <Container fluid className='mx-5'>
        <Navbar.Brand href="#">
            <img width={'25px'} height={'25px'} src="/Adobe_Corporate_Web_Logo.png" alt="adobe-logo" />
            <span style={{ fontSize: '17px' }} className='ms-2 text-danger fw-bolder fw-bold'>Adobe</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Creativity & Design" id="navbarScrollingDropdown" className='dropdown-link ms-3'>
              <NavDropdown.Item href="#action3">
                <h2>Creativity & Design</h2>
              </NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="PDF & E-signature" id="navbarScrollingDropdown" className='dropdown-link ms-3'>
              <NavDropdown.Item href="#action3">
                <h2>PDF & E-signature</h2>
              </NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="Marketing & E-commerce" id="navbarScrollingDropdown" className='dropdown-link ms-3'>
              <NavDropdown.Item href="#action3">
                <h2>Marketing & E-commerce</h2>
              </NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="Help & Support" id="navbarScrollingDropdown" className='dropdown-link ms-3'>
              <NavDropdown.Item href="#action3">
                <h2>Help & Support</h2>
              </NavDropdown.Item> 
            </NavDropdown>
          </Nav>

          <div className="d-flex justify-content-center align-items-center me-3 p-2">
            <div className='ms-3 d-flex justify-content-center align-item-center'>
                <i style={{fontSize:'18px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
            </div>
            <div className='ms-3 d-flex justify-content-center align-items-center'>
                <img width={'30px'} height={'30px'} src="no-image-138.png" alt="No Person" />
            </div>
            <div className='ms-3 d-flex justify-content-center align-items-center'>
                <span  class="material-symbols-outlined">apps</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header