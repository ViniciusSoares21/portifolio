import React from 'react'
import imgAvatar from '../image/sobreMim 1.jpg'
import styles from './Home.module.css'

function Home() {
  return (
    <section>
      <div className={styles.conteinerAbout}>
        <img src={imgAvatar} alt="Avatar" />
        <div className={styles.verticalLine}>&nbsp;</div>
        <p>
          Sou uma pessoa criativa e determinada, sempre buscando novos desafios. 
          Com uma mente curiosa e apaixonada por aprender, estou sempre em busca de conhecimento e crescimento pessoal. 
          Minha natureza amigável e empática me torna uma ótima ouvinte e amiga leal. Com um espírito aventureiro, 
          adoro explorar novos lugares e experimentar novas culturas. Minha energia positiva contagia todos ao meu redor, 
          tornando-me uma presença inspiradora. Sou uma pessoa única, com muitas histórias para contar e sonhos para realizar.
        </p>
      </div>
    </section>
  )
}

export default Home