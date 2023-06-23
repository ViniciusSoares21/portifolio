import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from './ProjectDetails.module.css';
import projects from '../assets/database/prejects';

function ProjectDetails() {
  const path = useLocation().pathname;

  const titleProject = decodeURIComponent(path.split('/')[2]);
  const publicPath = import.meta.env.BASE_URL;

  return (
    <main>
      <NavBar />
      <section className={styles.container}>
        <h1 className={styles.title}>{titleProject}</h1>
        {projects.filter((item) => item.title === titleProject)
          .map(({title, description, image, technologies, links}) =>
            <article key={title} className={styles.subContainer}>
              <img 
                className={styles.image}
                src={`${publicPath}${image}`} alt="imagem do projeto"/>
              <h3 
                style={{ textAlign: 'center', marginBottom: '20px'}}
              >
                DESCRIÇÃO DO PROJETO
              </h3>
              <p 
                style={{ 
                  margin: 'auto',
                  width: '90%',
                  marginBottom: '30px',
                }}
              >
                {description}
              </p>
              <h3 
                style={{ 
                  margin: 'auto',
                  width: '90%',
                  marginBottom: '10px',
                }}
              >
                LINGUAGEM E FERRAMENTAS
              </h3>
              <div className={styles.containerTechnologies}>
                {technologies.map((item) => 
                  <img key={item} src={`${publicPath}${item}`} alt="tecnoligia" />
                )}
              </div>
              <h3 style={{ 
                  margin: 'auto',
                  width: '90%',
                  marginBottom: '10px',
                }}
              >
                LINKS
              </h3>
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