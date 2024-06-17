import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import coheteImage from './assets/cohete.png';
import './App.css';

function App() {
  return (
    <>
      <header className="header bg-light text-center py-2">Texto de header top</header>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgba(255, 147, 244, 1)" }}>
      <Container className="container">
        <Navbar.Brand className="navbar-brand" href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <a className="nav-link" href="#">Sección 2</a>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <a className="nav-link" href="#">Sección 3</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <section className='banner'>
        <div className="overlay"></div>
        <div className="banner-content">
          <h3>TEXTO PREVIO AL TÍTULO</h3>
          <h1>Título banner principal</h1>
          <button className='enviar'>Enviar</button>
        </div>
        
      </section>
      {/* <div className='c2'></div> */}
      <section className='boxes container my-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 col-md-4 mb-4 d-flex justify-content-center'>
            <div className='box1 p-3 text-center'>
              <img className='cohete img-fluid' src={coheteImage} alt="Cohete" />
              <h2 className='Item'>Item 1</h2>
              <p>Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.</p>
            </div>
          </div>
          <div className='col-12 col-md-4 mb-4 d-flex justify-content-center'>
            <div className='box1 p-3 text-center'>
              <img className='cohete img-fluid' src={coheteImage} alt="Cohete" />
              <h2 className='Item'>Item 2</h2>
              <p>Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.</p>
            </div>
          </div>
          <div className='col-12 col-md-4 mb-4 d-flex justify-content-center'>
            <div className='box1 p-3 text-center'>
              <img className='cohete img-fluid' src={coheteImage} alt="Cohete" />
              <h2 className='Item'>Item 3</h2>
              <p>Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.</p>
            </div>
          </div>
        </div>
      </section>
      <div className='c1'></div>
    </>
  );
}

export default App;

