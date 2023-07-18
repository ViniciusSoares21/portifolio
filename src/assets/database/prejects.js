const JavascriptSVG = 'src/assets/database/imageTechnology/javascript.svg';
const JestSVG = 'src/assets/database/imageTechnology/jest.svg';
const ReactSVG = 'src/assets/database/imageTechnology/react.svg';
const exprssSVG = 'src/assets/database/imageTechnology/imgExpress.svg';
const typescript = 'src/assets/database/imageTechnology/Typecript.svg';
const docker = 'src/assets/database/imageTechnology/docker.svg';
const sequelize = 'src/assets/database/imageTechnology/sequelize.svg';
const mysql = 'src/assets/database/imageTechnology/mysql.svg';
const jwt = 'src/assets/database/imageTechnology/jwt.svg';
const Mocha = 'src/assets/database/imageTechnology/mocha.svg';
const chai = 'src/assets/database/imageTechnology/chai.svg';
const node = 'src/assets/database/imageTechnology/nodejs.svg'
const mongoDB = 'src/assets/database/imageTechnology/mongodb.svg';


const projects = [
  {
    image: 'src/assets/database/image/Rectangle2.png',
    title: 'Trybe futebol clube',
    shortDescription: "API Full Stack com TDD, Sequelize e integração docker-compose. Exibe e edita jogos, classificações e partidas.",
    description: "O projeto Trybe Futebol Clube (TFC) é uma aplicação Full Stack que exibe informações sobre jogos e classificações de futebol. O desenvolvimento usará o método TDD para criar uma API e integrar as aplicações com o banco de dados atraves do docker-compose. O back-end será modelado com Sequelize e será consumido pelo front-end fornecido no projeto pela trybe. Ao fazer login, os usuários poderão ver as informações e também alterar resultados das partidas e inserir partidas em andamento.",
    desing: { 
      img: "", 
      desingType: "Diagrama ER", 
      describe: "Esse diagrama foi fornecido pela Trybe para construção das tabelas"
    },
    technologies: [ JavascriptSVG, ReactSVG, exprssSVG, typescript, docker, sequelize, mysql, jwt, Mocha, chai],
    links: [
      {link: '', name:'PREVIEW' },
      {link: 'https://github.com/ViniciusSoares21/trybe-futebol-clube', name:'GITHUB' }
    ],
    type: '/fullstack',
    showOnHome: true
  },
  {
    image: 'src/assets/database/image/BlogAPI.png',
    title: 'Blogs API',
    shortDescription: "Esse projeto foi desenvolvido para a criação de uma API com o banco de dados Mysql, estruturado a partir dos princios de POO e SOLID, destinados para a criação de um blog.",
    description: "Esse projeto foi desenvolvido para a criação de uma API com o banco de dados Mysql, estruturado a partir dos princios POO e SOLID, destinados para a criação de um blog. Durante o desenvolvimento, foi criada uma aplicação em Node.js utilizando o pacote sequelize para implementar as funcionalidades de criação, (CRUD) de posts, e login. Foram criados endpoints que estão conectados ao banco de dados, seguindo os princípios do REST. Para criar um post, é preciso fornecer dados de usuário e realizar o login, o que reforça a conexão entre usuário e post. Além disso, foram usadas categorias para classificar os posts, estabelecendo ligações entre posts e categorias, assim como entre categorias e posts.",
    desing: { 
      img: "https://github.com/ViniciusSoares21/blogs-api/raw/main/diagrama%20ER.png", 
      desingType: "Diagrama ER", 
      describe: "Esse diagrama foi fornecido pela Trybe para construção das tabelas"
    },
    technologies: [ JavascriptSVG, exprssSVG, docker, sequelize, mysql, jwt],
    links: [
      {link: '', name:'PREVIEW' },
      {link: 'https://github.com/ViniciusSoares21/blogs-api', name:'GITHUB' }
    ],
    type: '/backend',
    showOnHome: true
  },
  {
    image: 'src/assets/database/image/trybeAndDragons.png',
    title: 'Trybers and dragons',
    shortDescription: "Neste projeto, apliquei os princípios da arquitetura SOLID e da Programação Orientada a Objetos (POO) em uma estrutura de jogos de interpretação de papéis, conhecidos como RPG (Role Playing Game).",
    description: "Neste projeto, apliquei os princípios da arquitetura SOLID e da Programação Orientada a Objetos (POO) em uma estrutura de jogos de interpretação de papéis, conhecidos como RPG (Role Playing Game).",
    desing: { 
      img: "", 
      desingType: "", 
      describe: ""
    },
    technologies: [ typescript, docker, node],
    links: [
      {link: '', name:'PREVIEW' },
      {link: 'https://github.com/ViniciusSoares21/trybers-and-dragons', name:'GITHUB' }
    ],
    type: '/backend',
    showOnHome: false
  },
  {
    image: 'src/assets/database/image/CarShop.png',
    title: 'Car Shop',
    shortDescription: "Neste projeto, apliquei os princípios de Programação Orientada a Objetos (POO) para construir uma API com operações CRUD para gerenciar uma concessionária de veículos. Utilizei o banco de dados MongoDB e o framework Mongoose para essa finalidade.",
    description: "Neste projeto, apliquei os princípios de Programação Orientada a Objetos (POO) para construir uma API com operações CRUD para gerenciar uma concessionária de veículos. Utilizei o banco de dados MongoDB e o framework Mongoose para essa finalidade.",
    desing: { 
      img: "", 
      desingType: "", 
      describe: ""
    },
    technologies: [ typescript, docker, node, exprssSVG, mongoDB, Mocha, chai],
    links: [
      {link: '', name:'PREVIEW' },
      {link: 'https://github.com/ViniciusSoares21/car-shop', name:'GITHUB' }
    ],
    type: '/backend',
    showOnHome: false
  },
  {
    image: 'src/assets/database/image/gcontrole.png',
    title: 'gcontrole',
    shortDescription: "O projeto 'gcontrole' é um site desenvolvido com foco no front-end, com o objetivo de oferecer um ambiente prático para organizar e visualizar seus gastos.",
    description: "O projeto 'gcontrole' é um site desenvolvido com foco no front-end, com o objetivo de oferecer um ambiente prático para organizar e visualizar seus gastos. Através de uma página dedicada à adição de despesas, divididas por categorias, e duas páginas com gráficos, você poderá obter uma perspectiva analítica detalhada e visualmente atraente dos seus gastos.",
    desing: { 
      img: "https://github.com/ViniciusSoares21/gcontrole/raw/main/figma.png", 
      desingType: "DESIGN", 
      describe: "O desing foi desenvolvido para mobile, onde o objetivo é a fácil visualização"
    },
    technologies: [ JavascriptSVG, ReactSVG, ],
    links: [
      {link: 'https://gcontrole.com/', name:'PREVIEW' },
      {link: 'https://github.com/ViniciusSoares21/gcontrole', name:'GITHUB' },
      {link: 'https://www.figma.com/file/ovOiHRTWHPXHNq9OB4sVeZ/gcontrole?type=design&node-id=0%3A1&mode=design&t=zlOAocFIw8ZLAKca-1', name:'FIGMA' },
    ],
    type: '/frontend',
    showOnHome: true
  },
]
 
export default projects;