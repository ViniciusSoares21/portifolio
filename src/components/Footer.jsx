import imgLinkedinSvg from '../image/linkedin.svg'
import imgGitHubSvg from '../image/github.svg'

function Footer() {
  return (
    <footer className="flex justify-center mt-14 text-light font-semibold font-[Arial]">
      <a 
        href="https://www.linkedin.com/in/vinicius-soares21/" 
        target="_blank" 
        rel="noopener noreferrer"
        >
        Created By
      </a>
      <a 
        href="https://www.linkedin.com/in/vinicius-soares21/"
        target="_blank" 
        rel="noopener noreferrer"
        >
        <img className="ml-2" src={imgLinkedinSvg} alt="Linkedin" />
      </a>
      <a 
        href="https://github.com/ViniciusSoares21"
        target="_blank" 
        rel="noopener noreferrer"
        >
        <img className="ml-2" src={imgGitHubSvg} alt="GitHub" />
      </a>
    </footer>
  )
}

export default Footer