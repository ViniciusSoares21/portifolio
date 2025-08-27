import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import projects from "../assets/database/prejects";
import styles from "./Home.module.css";
import imgAvatar from "../image/Fotoperfil.svg";
import imgGitHub from '../image/github.svg';
import imgLinkedin from '../image/linkedin.svg';
import imgArrowUp from '../image/arrowUp.svg';

function Home() {
  return (
    <section className="bg-dark text-light">
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
        <img src={imgAvatar} alt="Vinicius Soares" className="w-64 md:w-80 lg:w-115 rounded-xl border-yellow-300" />
      </header>

      {/* About Section */}
      <section className={styles.about}>
        <h2>Sobre mim</h2>
        <p>
          Estou sempre buscando inovação, conhecimento e evolução na área de
          tecnologia. Tenho experiência prática com{" "}
          <strong>Node.js, React, Sequelize, PostgreSQL</strong> e estou
          preparado para atuar como <strong>Dev Backend</strong> ou{" "}
          <strong>Fullstack Júnior</strong>. <br /> Meu objetivo é criar
          soluções que geram valor real para negócios e pessoas.
        </p>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className={styles.projects}>
        <h2>Projetos em Destaque</h2>
        <div className={styles.projectsGrid}>
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
        <a href="/projetos" className={styles.linkMore}>
          Ver todos os projetos →
        </a>
      </section>

      {/* CTA Final */}
      <section className={styles.ctaSection}>
        <h2>Pronto para dar vida às suas ideias?</h2>
        <p>
          Entre em contato e vamos conversar sobre como posso contribuir com sua
          equipe.
        </p>
        <a href="mailto:vinicius.dev@gmail.com" className={styles.ctaBtn}>
          Entrar em Contato
        </a>
      </section>

      <Footer />
    </section>
  );
}

export default Home;
