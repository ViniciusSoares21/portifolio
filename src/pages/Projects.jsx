import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import projects from '../assets/database/prejects';
import Card from '../components/Card';
import styles from './Projects.module.css'

const title = {
  "/fullstack": 'FULL-STACK',
  "/frontend": 'FRONT-END',
  "/backend": 'BACK-END',
  "/datascience": 'Ciências de dados',
}

function Projects() {
  const path = useLocation();
  const data = projects.filter((item) => item.type === path.pathname);
  return (
    <main>
      <NavBar />
      <h1 className={styles.title}>{title[path.pathname]}</h1>
      {data.length > 0 ? (
        <article className={styles.containerCards}>
          {data.map(({title, shortDescription, image, technologies, links}) => 
            <Card
              key={title}
              image={image}
              title={title}
              shortDescription={shortDescription}
              technologies={technologies}
              links={links}
            />
          )}
        </article>
      ) : (
        <div>
          <p style={{textAlign: 'center', fontSize: 30}}>PROJETOS EM CONSTRUÇÃO</p>
          <p style={{textAlign: 'center', fontSize: 100}}>🚧</p>
        </div>
      )}
      <Footer />
    </main>
  )
}

export default Projects