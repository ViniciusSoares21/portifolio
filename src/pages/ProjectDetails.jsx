import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from './ProjectDetails.module.css';
import projects from '../assets/database/prejects';


function ProjectDetails() {
  const path = useLocation().pathname;

  const titleProject = decodeURIComponent(path.split('/')[2]);


  return (
    <main>
      <NavBar />
      <section className={styles.container}>
        <h1 className={styles.title}>{titleProject}</h1>
        {projects.filter((item) => item.title === titleProject)
          .map(({title, description, image, technologies, links}) =>
            <article key={title} className={styles.subContainer}>
              <img src={image} alt=""/>
              <h3 
                style={{ textAlign: 'center', marginBottom: '20px'}}
              >
                DESCRIÇÃO DO PROJETO
              </h3>
              <p style={{ textAlign: 'center', marginBottom: '30px' }}>
                {description}
              </p>
              <h3>LINGUAGEM E FERRAMENTAS</h3>
              <div className={styles.containerTechnologies}>
                {technologies.map((item) => 
                  <img key={item} src={item} alt="tecnoligia" />
                )}
              </div>
              <h3>LINKS</h3>
              <div className={styles.containerLinks}>
                {links.map((item) => 
                    <a key={item.link + item.name} href={item.link}>{item.name}</a>
                )}
              </div>
            </article>
          
          )}
      </section>
      <Footer />
    </main>
  )
}

export default ProjectDetails