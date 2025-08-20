import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import projects from "../assets/database/prejects";
import styles from "./Home.module.css";
import imgAvatar from "../image/Fotoperfil.svg";

function Home() {
  return (
    <section className="bg-black text-amber-50">
      <NavBar />
      <header className="flex flex-col md:flex-row justify-center items-center md:items-start bg-gray-900 px-4 py-16 md:p-24 gap-8 md:gap-16">
  <div className="text-center md:text-left">
    <h1 className="text-4xl md:text-6xl text-white font-bold font-[Arial] mb-4">
      Vinicius Soares
    </h1>
    <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-300 max-w-xl font-[Arial]">
      Desenvolvedor <strong className="text-yellow-500">Fullstack Júnior</strong> apaixonado por
      transformar ideias em soluções digitais modernas, escaláveis e com <strong className="text-yellow-500">Qualidade.</strong>
    </p>
    <a href="#projetos" className="inline-block mt-6 py-3.5 px-6 md:px-8 bg-yellow-300 text-gray-900 font-bold rounded-full no-underline transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
      Ver Meus Projetos
    </a>
  </div>
  <img src={imgAvatar} alt="Vinicius Soares" className="w-48 md:w-64 lg:w-80 rounded-xl border-yellow-300 shadow-[10px_0_90px] shadow-yellow-300/22" />
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
