import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Seccion2 from './Seccion2';
// import Seccion3 from './Seccion3';
import logo from './assets/logo.png';
import { Navbar, Container, Nav, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import coheteImage from './assets/cohete.png';
import './App.css';



function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); 
  };
  return (
    <>
      <header className="header bg-light text-center py-2">Texto de header top</header>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgba(255, 147, 244, 1)" }}>
      <Container className="container">
        <Navbar.Brand className="navbar-brand" ><img className='logo' src={logo}></img></Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
            <span className='line'></span>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <a className="nav-link" href="#">Sección 2</a>
            <span className='line'></span>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <a className="nav-link" href="#">Sección 3</a>
            <span className='line'></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section className='home'>
      <section className='banner'>
        <div className="overlay"></div>
        <div className="banner-content">
          <h3>TEXTO PREVIO AL TÍTULO</h3>
          <h1>Título banner principal</h1>
          <Button className='enviar ' onClick={handleButtonClick}>Enviar</Button>
        </div>
        
      </section>
      <div className='c2'></div>
      <section className='boxes container no-border-box justify-content-center'>
        <div className='row justify-content-center align-items-center '>
          <div className='col-12 col-md-3 mb-4 mx-5 d-flex justify-content-center '>
            <div className='box1 p-3 text-center'>
              <img className='cohete ' src={coheteImage} alt="Cohete" />
              <h2 className='Item'>Item 1</h2>
              <p>Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.</p>
            </div>
          </div>
          <div className='col-12 col-md-3 mb-4 mx-4 d-flex justify-content-center '>
            <div className='box1 p-3 text-center'>
              <img className='cohete img-fluid' src={coheteImage} alt="Cohete" />
              <h2 className='Item'>Item 2</h2>
              <p>Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.</p>
            </div>
          </div>
          <div className='col-12 col-md-3 mb-4 mx-5 d-flex justify-content-center '>
            <div className='box1 p-3 text-center'>
              <img className='cohete img-fluid' src={coheteImage} alt="Cohete" />
              <h2 className='Item'>Item 3</h2>
              <p>Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.</p>
            </div>
          </div>
        </div>
      </section>
      <div className='c1'></div>
      {showAlert && (
        <Alert variant="success" className="position-fixed z-3 top-50 start-50 translate-middle-x m-3" onClose={() => setShowAlert(false)} dismissible>
          Formulario enviado
        </Alert>
      )}
      </section>
    </>
  );
}

export default App;

