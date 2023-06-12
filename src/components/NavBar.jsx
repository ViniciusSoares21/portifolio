import { useState } from 'react'
import styles from './NavBar.module.css'

function NavBar() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isMenuProjectVisible, setIsMenuProjectVisible] = useState(false);
  const [isMenuContactVisible, setIsMenuContactVisible] = useState(false)



  const handleMouseProjectsEnter = () => setIsProjectsVisible(true);
  const handleMouseProjectsLeave = () => {
      if (isMenuProjectVisible) {
          setIsProjectsVisible(false);
      }
  };
  
  const menuProjectsVisible = () => setIsMenuProjectVisible(true);
  const menuProjectsNotVisible = () => {
    setIsMenuProjectVisible(false);
    setIsProjectsVisible(false);
  };


  const handleMouseContactEnter = () => setIsContactVisible(true);
  const handleMouseContactLeave = () => {
    if (isMenuContactVisible) {
      setIsContactVisible(false);
    }
  };

  const menuContactVisible = () => setIsContactVisible(true);
  const menuContactNotVisible = () => {
    setIsMenuContactVisible(false);
    setIsContactVisible(false);
  };


  return ( 
    <header className={ styles.container }>
      <p 
        className={ styles.links } 
        onMouseEnter={handleMouseProjectsEnter}
        onMouseLeave={handleMouseProjectsLeave} 
      >
        PROJETOS
      </p>
      {isProjectsVisible && 
        <div 
        className={styles.menuProjectLink}
        onMouseEnter={menuProjectsVisible}
        onMouseLeave={menuProjectsNotVisible}
        >
          <p>FULL-STACK</p>
          <p>FRONT-END</p>
          <p>BACK-END</p>
          <p>ANALISE DE DADOS</p>
        </div>
      }
      <p 
        className={ styles.links }
        onMouseEnter={handleMouseContactEnter}
        onMouseLeave={handleMouseContactLeave}
      >
        CONTATO
      </p>
      {isContactVisible && 
        <div 
        className={styles.menuContactLink}
        onMouseEnter={menuContactVisible}
        onMouseLeave={menuContactNotVisible}
        >
          <p>linkdein</p>
          <p>GitHub</p>
          <p>Email</p>
        </div>
      }
      <p className={ styles.links }>SOBRE</p>
    </header>
  )
}

export default NavBar