import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from './ProjectDetails.module.css'


function ProjectDetails() {
  const path = useLocation().pathname;

  const titleProject = decodeURIComponent(path.split('/')[2]);


  return (
    <main>
      <NavBar />
      <h1 className={styles.title}>{titleProject}</h1>
      <Footer />
    </main>
  )
}

export default ProjectDetails