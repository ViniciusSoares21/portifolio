import React from 'react'
import imgAvatar from '../image/sobreMim 1.jpg'
import styles from './Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Home() {
  return (
    <section>
      <NavBar />
      <div className={styles.conteinerAbout}>
        <img src={imgAvatar} alt="Avatar" />
        <div className={styles.verticalLine}>&nbsp;</div>
        <p>
          Meu nome é Vinicius e estou sempre buscando por inovação, 
          conhecimento e formação pela área de tecnologia e mercado financeiro. 
          Atualmente estudo Desenvolvimento de software fullstack 
        </p>
      </div>
      <Footer />
    </section>
  )
}

export default Home