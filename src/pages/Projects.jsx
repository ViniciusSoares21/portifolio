import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const title = {
  "/fullstack": 'FULL-STACK',
  "/frontend": 'FRONT-END',
  "/backend": 'BACK-END'
}

function Projects() {
  const path = useLocation();
  return (
    <main>
      <NavBar />
      <h1>{title[path.pathname]}</h1>
      <Footer />
    </main>
  )
}

export default Projects