import { useState } from 'react'
import styles from './NavBar.module.css'
import imgGitHub from '../image/github.svg'
import imgLinkedin from '../image/linkedin.svg'
import imgEmail from '../image/email.svg'

function NavBar() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isMenuProjectVisible, setIsMenuProjectVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isMenuContactVisible, setIsMenuContactVisible] = useState(false)



  const handleMouseProjectsEnter = () => setIsProjectsVisible(true);
  const handleMouseProjectsLeave = () => {
    setTimeout(() => {
      setIsProjectsVisible(false);
    }, 100);
  };
  
  const menuProjectsVisible = () => setIsMenuProjectVisible(true);
  const menuProjectsNotVisible = () => setIsMenuProjectVisible(false);


  const handleMouseContactEnter = () => setIsContactVisible(true);
  const handleMouseContactLeave = () => {
    setTimeout(() => {
      setIsContactVisible(false);
    }, 100);
  };

  const menuContactVisible = () => setIsMenuContactVisible(true);
  const menuContactNotVisible = () => setIsMenuContactVisible(false);



  return ( 
    <header className={ styles.container }>
      <p 
        className={ styles.links } 
        onMouseEnter={handleMouseProjectsEnter}
        onMouseLeave={handleMouseProjectsLeave} 
      >
        PROJETOS
      </p>
      {(isProjectsVisible || isMenuProjectVisible) && 
        <div 
        className={styles.menuProjectLink}
        onMouseEnter={menuProjectsVisible}
        onMouseLeave={menuProjectsNotVisible}
        >
          <p style={{ marginTop: '12px'}}>💼Full-stack</p>
          <p style={{ marginTop: '12px' }}>🖥️Front-end</p>
          <p style={{ marginTop: '12px', textAlign: 'center', marginRight: "3px" }}>🗄️Back-end</p>
        </div>
      }
      <p 
        className={ styles.links }
        onMouseEnter={handleMouseContactEnter}
        onMouseLeave={handleMouseContactLeave}
      >
        CONTATO
      </p>
      {(isContactVisible || isMenuContactVisible)  && 
        <div 
        className={styles.menuContactLink}
        onMouseEnter={menuContactVisible}
        onMouseLeave={menuContactNotVisible}
        >
          <img style={{ marginTop: '12px' }} src={imgLinkedin} alt="linkdein" />
          <img style={{ marginTop: '12px' }} src={imgGitHub} alt="GitHub" />
          <img style={{ marginTop: '12px' }} src={imgEmail} alt="Email" />
        </div>
      }
      <p className={ styles.links }>SOBRE</p>
    </header>
  )
}

export default NavBar