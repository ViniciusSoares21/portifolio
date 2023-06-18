import React from 'react'
import imgAvatar from '../image/sobreMim 1.jpg'
import styles from './Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import projects from '../assets/database/prejects'

function Home() {
  return (
    <section>
      <NavBar />
      <main className={styles.container} >
        <div className={styles.conteinerAbout}>
          <img src={imgAvatar} alt="Avatar" />
          <div className={styles.verticalLine}>&nbsp;</div>
          <p>
            Meu nome é Vinicius e estou sempre buscando por inovação, 
            conhecimento e formação pela área de tecnologia e mercado financeiro. 
            Atualmente estudo Desenvolvimento de software fullstack 
          </p>
        </div>
      </main>
      <article>
        {projects.map(({title, shortDescription, image, technologies, links}) => 
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
      <Footer />
    </section>
  )
}

export default Home