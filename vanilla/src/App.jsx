import { useState } from 'react';
import coheteImage from './assets/cohete.png';
import './App.css'

function App() {


  return (
    <>
      <header>Texto para el header</header>
      <nav>
        <div className='logo'><h2>LOGO</h2></div>
        <div className='navBar'>
          <a href="">Inicio</a>
          <a>Sección 2</a>
          <a>Sección 3</a>
        </div>
      </nav>
      <section className='banner'>

        <div className="overlay"></div>
        <div className="banner-content">
          <h3>Texto previo al título</h3>
          <h1>Título banner principal</h1>
          <button className='enviar'>Enviar</button>
        </div>
      </section>
      <section className='boxes'>
        <div className='box1'>
          <img className='cohete' src={coheteImage}></img>
          <h2 className='Item'>Item 1</h2>
          <p>Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas jeje).
          Mientras puedes navegar en nuestro sitio antiguo.</p>
        </div>
        <div className='box1'>
          <img className='cohete' src={coheteImage}></img>
          <h2 className='Item'>Item 1</h2>
          <p className='text'>Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas jeje).
          Mientras puedes navegar en nuestro sitio antiguo.</p>
        </div>
        <div className='box1'>
          <img className='cohete' src={coheteImage}></img>
          <h2 className='Item'>Item 1</h2>
          <p>Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas jeje).
          Mientras puedes navegar en nuestro sitio antiguo.</p>
        </div>
      </section>
    </>
  )
}

export default App
