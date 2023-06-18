import React from 'react'
import imgAvatar from '../image/sobreMim 1.jpg'
import styles from './Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'

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
        <Card 
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown printer took a galley '
        />
      </article>
      <Footer />
    </section>
  )
}

export default Home