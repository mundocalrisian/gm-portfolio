import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import About from '../about/about';


function App() {

  return (
    <main>
      <Navbar />
      <section className='main-section'>
        <Header/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </main>
    
  )
}

export default App
