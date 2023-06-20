import React from 'react';
import { useLocation } from 'react-router-dom';

const title = {
  "/fullstack": 'FULL-STACK',
  "/frontend": 'FRONT-END',
  "/backend": 'BACK-END'
}

function Projects() {
  const path = useLocation();
  return (
    <main>
      <h1>{title[path.pathname]}</h1>
    </main>
  )
}

export default Projects