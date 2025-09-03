import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import projects from "../assets/database/prejects";
import imgAvatar from "../image/perfil-uop2.jpg";
import imgGitHub from '../image/github.svg';
import imgLinkedin from '../image/linkedin.svg';
import imgArrowUp from '../image/arrowUp.svg';
import CardServices from "../components/CardServices";
import iconFront from "../image/Front-end.svg";
import iconBack from "../image/Back-end.svg";
import iconDevOps from "../image/DevOps.svg";

function Home() {
  return (
    <main className="bg-dark text-light">
      <NavBar />
      <header className="flex flex-col md:flex-row justify-center items-center md:items-start px-4 py-16 md:p-24 gap-8 md:gap-16">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-light font-bold font-[Arial] mb-4">
            Vinicius Soares
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl max-w-xl font-[Arial]">
            Desenvolvedor <strong className="text-stone-paste">Fullstack Júnior</strong> apaixonado por
            transformar ideias em soluções digitais modernas, escaláveis e com <strong className="text-stone-paste">Qualidade.</strong>
          </p>
          <a href="#projetos" className="inline-block mt-6 py-3.5 px-6 md:px-8 bg-light text-dark font-bold rounded-full no-underline transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
            Ver Meus Projetos
          </a>
          <div className="flex justify-end content-center items-end gap-4 mr-30 md:mr-0 md:mt-40">
          <a className=" flex items-center mt-6 py-0.2 px-6 md:px-4 bg-light text-dark font-bold rounded-full no-underline transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
            Curriculo
            <img src={imgArrowUp} alt="Linkedin" />
          </a>
          <a 
            href="https://www.linkedin.com/in/vinicius-soares21/"
            target="_blank" 
            rel="noopener noreferrer"
            >
            <img src={imgLinkedin} alt="Linkedin" />
          </a>
          <a 
            href="https://github.com/ViniciusSoares21"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={imgGitHub} alt="GitHub" />
          </a>
        </div>
        </div>
        <img src={imgAvatar} alt="Vinicius Soares" className="w-64 md:w-80 lg:w-115 rounded-xl overflow-hidden object-cover hover:scale-110"/>
      </header>

      {/* About Section */}
      <section className="flex flex-col items-center font-[Arial]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Serviços</h2>
          <p>
            Sou  <strong>Desenvolvedor web Full-stack.</strong> Com mais de <strong>1 ano</strong> de exeperiência.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-20">
          <CardServices
            image={iconFront}
            name="Front-end"
            skills="Typescript / React / Html / Css3 / Jest / Tailwindcss"
          />
          <CardServices
            image={iconBack}
            name="Back-end"
            skills="Nodejs / Express.js / Jwt / Sequelize / Mysql / Chai / Sinon / Mocha"
          />
          <CardServices
            image={iconDevOps}
            name="DevOps"
            skills="Docker / (CI/CD) / Bash / GitHub"
          />
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="flex flex-col items-center mt-24  font-[Arial]">
        <h2 className="mb-10 font-bold text-4xl">Projetos</h2>
        <div className="flex gap-4 justify-center mb-8 font-semibold">
          <p className="p-1.5 border-2 border-light rounded-4xl bg-light text-dark">Destaques</p>
          <p className="p-1.5 border-2 border-light rounded-4xl">Full-stack</p>
          <p className="p-1.5 border-2 border-light rounded-4xl">Back-end</p>
          <p className="p-1.5 border-2 border-light rounded-4xl">Front-end</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {projects
            .filter((item) => item.showOnHome === true)
            .map(({ title, shortDescription, image, technologies, links }) => (
              <Card
                key={title}
                image={image}
                title={title}
                shortDescription={shortDescription}
                technologies={technologies}
                links={links}
              />
            ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
