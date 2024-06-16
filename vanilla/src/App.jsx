import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
    <header>Texto para el header</header>
      <nav>
        <div className='logo'><h1>LOGO</h1></div>
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
    </>
  )
}

export default App
