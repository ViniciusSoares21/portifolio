import { useState } from 'react';
import imgGitHub from '../image/github.svg';
import imgLinkedin from '../image/linkedin.svg';
import imgEmail from '../image/email.svg';
import imgLogo from '../image/logoVJ 1.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isMenuProjectVisible, setIsMenuProjectVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isMenuContactVisible, setIsMenuContactVisible] = useState(false);
  const [positionMenuProject, setPositionMenuProject] = useState({ y: '', x: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Novo estado para o menu mobile

  const handleMouseProjectsEnter = (event) => {
    if (window.innerWidth >= 768) { // Apenas em telas maiores (md)
      const positionBtn = event.target.getBoundingClientRect();
      const y = positionBtn.top + 45;
      const x = positionBtn.right - 108;
      setPositionMenuProject({ x, y });
      setIsProjectsVisible(true);
    }
  };

  const handleMouseProjectsLeave = () => {
    if (window.innerWidth >= 768) { // Apenas em telas maiores (md)
      setTimeout(() => {
        setIsProjectsVisible(false);
      }, 100);
    }
  };

  const menuProjectsVisible = () => setIsMenuProjectVisible(true);
  const menuProjectsNotVisible = () => setIsMenuProjectVisible(false);

  const handleMouseContactEnter = (event) => {
    if (window.innerWidth >= 768) { // Apenas em telas maiores (md)
      const positionBtn = event.target.getBoundingClientRect();
      const y = positionBtn.top + 45;
      const x = positionBtn.right - 55;
      setPositionMenuProject({ x, y });
      setIsContactVisible(true);
    }
  };

  const handleMouseContactLeave = () => {
    if (window.innerWidth >= 768) { // Apenas em telas maiores (md)
      setTimeout(() => {
        setIsContactVisible(false);
      }, 100);
    }
  };

  const menuContactVisible = () => setIsMenuContactVisible(true);
  const menuContactNotVisible = () => setIsMenuContactVisible(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-dark text-light">
      <nav className="flex h-16 bg-dark text-light justify-between items-center px-4 md:px-24">
        <Link className="text-dark no-underline hover:text-white" to="/">
           <img src={imgLogo} alt="LOGO" />
        </Link>
        
        {/* Ícone do menu hamburguer para telas pequenas */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-light"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu principal para telas maiores */}
        <div className="hidden md:flex gap-10">
          <p
            className={`font-semibold cursor-pointer no-underline transition-colors duration-200 hover:text-white hover:font-extrabold ${
              isProjectsVisible || isMenuProjectVisible ? 'text-white font-extrabold' : ''
            }`}
            onMouseEnter={handleMouseProjectsEnter}
            onMouseLeave={handleMouseProjectsLeave}
          >
            PROJETOS
          </p>
          {(isProjectsVisible || isMenuProjectVisible) && (
            <div
              style={{
                top: positionMenuProject.y,
                left: positionMenuProject.x,
              }}
              className="text-left block h-[135px] w-[125px] absolute rounded-lg justify-center bg-light cursor-pointer"
              onMouseEnter={menuProjectsVisible}
              onMouseLeave={menuProjectsNotVisible}
            >
              <Link className="text-dark no-underline hover:text-white" to="/fullstack">
                <p className="mt-3 ml-1">💼Full-stack</p>
              </Link>
              <Link className="text-dark no-underline hover:text-white" to="/frontend">
                <p className="mt-3 ml-1">🖥️Front-end</p>
              </Link>
              <Link className="text-dark no-underline hover:text-white" to="/backend">
                <p className="mt-3 ml-1">🗄️Back-end</p>
              </Link>
              <Link className="text-dark no-underline hover:text-white" to="/datascience">
                <p className="mt-3 ml-1">🔬Data science</p>
              </Link>
            </div>
          )}
          <p
            className={`font-semibold cursor-pointer no-underline transition-colors duration-200 hover:text-white hover:font-extrabold ${
              isContactVisible || isMenuContactVisible ? 'text-white font-extrabold' : ''
            }`}
            onMouseEnter={handleMouseContactEnter}
            onMouseLeave={handleMouseContactLeave}
          >
            CONTATO
          </p>
          {(isContactVisible || isMenuContactVisible) && (
            <div
              style={{
                top: positionMenuProject.y,
                left: positionMenuProject.x,
              }}
              className="h-32 w-10 flex rounded-lg flex-col absolute items-center bg-dark"
              onMouseEnter={menuContactVisible}
              onMouseLeave={menuContactNotVisible}
            >
              <a href="https://www.linkedin.com/in/vinicius-soares21/" target="_blank" rel="noopener noreferrer">
                <img className="mt-3 hover:brightness-50" src={imgLinkedin} alt="Linkedin" />
              </a>
              <a href="https://github.com/ViniciusSoares21" target="_blank" rel="noopener noreferrer">
                <img className="mt-2.5 hover:brightness-50" src={imgGitHub} alt="GitHub" />
              </a>
              <Link to="/Contact">
                <img className="mt-2 hover:brightness-50" src={imgEmail} alt="Email" />
              </Link>
            </div>
          )}
          <Link className="font-semibold text-light no-underline transition-colors duration-200 hover:text-white hover:font-extrabold" to="/About">
            <p>SOBRE</p>
          </Link>
        </div>

        {/* Menu móvel, visível apenas em telas pequenas */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-dark text-light flex flex-col items-center py-4 space-y-4 md:hidden z-50">
            <p className="cursor-pointer">PROJETOS</p>
            <p className="cursor-pointer">CONTATO</p>
            <Link to="/About">
              <p>SOBRE</p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;