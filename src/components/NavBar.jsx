import { useState } from 'react'
import styles from './NavBar.module.css'
import imgGitHub from '../image/github.svg'
import imgLinkedin from '../image/linkedin.svg'
import imgEmail from '../image/email.svg'
import { Link } from 'react-router-dom'

function NavBar() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isMenuProjectVisible, setIsMenuProjectVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isMenuContactVisible, setIsMenuContactVisible] = useState(false);
  const [positionMenuProject, setPositionMenuProject] = useState({y: '', x: ''})




  const handleMouseProjectsEnter = (event) => {
    const positionBtn = event.target.getBoundingClientRect();
    const y = positionBtn.top +45
    const x = positionBtn.right -108
    setPositionMenuProject({x, y});
    setIsProjectsVisible(true)
  };

  const handleMouseProjectsLeave = () => {
    setTimeout(() => {
      setIsProjectsVisible(false);
    }, 100);
  };
  
  const menuProjectsVisible = () => setIsMenuProjectVisible(true);
  const menuProjectsNotVisible = () => setIsMenuProjectVisible(false);


  const handleMouseContactEnter = (event) => {
    const positionBtn = event.target.getBoundingClientRect();
    const y = positionBtn.top +45
    const x = positionBtn.right -55
    setPositionMenuProject({x, y});
    setIsContactVisible(true)
  
  };

  const handleMouseContactLeave = () => {
    setTimeout(() => {
      setIsContactVisible(false);
    }, 100);
  };

  const menuContactVisible = () => setIsMenuContactVisible(true);
  const menuContactNotVisible = () => setIsMenuContactVisible(false);

  return ( 
    <header className={ styles.container }>
      <nav className={ styles.navBarContainer }>
        <p
          style={isProjectsVisible || isMenuProjectVisible ? { color: 'white', fontWeight: 600} : null}
          className={ styles.links } 
          onMouseEnter={handleMouseProjectsEnter}
          onMouseLeave={handleMouseProjectsLeave} 
        >
          PROJETOS
        </p>
        {(isProjectsVisible || isMenuProjectVisible) && 
          <div 
          style={
            {
              top: positionMenuProject.y,
              left: positionMenuProject.x,
            }
          }
          className={styles.menuProjectLink}
          onMouseEnter={menuProjectsVisible}
          onMouseLeave={menuProjectsNotVisible}
          >
            <Link className={styles.linkPreject} to="/fullstack">
              <p style={{ marginTop: '12px', marginLeft: '5px'}}>💼Full-stack</p>
            </Link>
            <Link className={styles.linkPreject} to="/frontend">
              <p style={{ marginTop: '12px', marginLeft: '5px' }}>🖥️Front-end</p>
            </Link>
            <Link className={styles.linkPreject} to="/backend">
              <p 
              style={{ marginTop: '12px',   marginLeft: '5px' }}
              >
                🗄️Back-end
              </p>
            </Link>
            <Link className={styles.linkPreject} to="/datascience">
              <p 
              style={{ marginTop: '12px', marginLeft: '5px'}}
              >
                🔬Data science
              </p>
            </Link>
          </div>
        }
        <p
          style={isContactVisible || isMenuContactVisible ? { color: 'white', fontWeight: 600} : null} 
          className={ styles.links }
          onMouseEnter={handleMouseContactEnter}
          onMouseLeave={handleMouseContactLeave}
        >
          CONTATO
        </p>
        {(isContactVisible || isMenuContactVisible)  && 
          <div
          style={
            {
              top: positionMenuProject.y,
              left: positionMenuProject.x,
            }
          }
          className={styles.menuContactLink}
          onMouseEnter={menuContactVisible}
          onMouseLeave={menuContactNotVisible}
          >
            <a 
          href="https://www.linkedin.com/in/vinicius-soares21/"
          target="_blank" 
          rel="noopener noreferrer"
          >
          <img style={{ marginTop: '12px' }} src={imgLinkedin} alt="Linkedin" />
        </a>
        <a 
          href="https://github.com/ViniciusSoares21"
          target="_blank" 
          rel="noopener noreferrer"
          >
          <img style={{ marginTop: '10px' }} src={imgGitHub} alt="GitHub" />
        </a>
          <Link to="/Contact">
            <img style={{ marginTop: '8px' }} src={imgEmail} alt="Email" />
          </Link>
          </div>
        }
        <Link className={ styles.links } to="/About">
          <p>SOBRE</p>
        </Link>
      </nav>
    </header>
  )
}

export default NavBar