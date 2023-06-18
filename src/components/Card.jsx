import {useState} from 'react';
import PropTypes from 'prop-types';

function Card({title, shortDescription, image, technologies, links}) {
  const [isProjectsDetailsVisible, setIsProjectsDetailsVisible] = useState(false);

  const handleMouseProjectsEnter = () => setIsProjectsDetailsVisible(true);
  const handleMouseProjectsLeave = () => setIsProjectsDetailsVisible(false);

  return (
    <div
      onMouseEnter={handleMouseProjectsEnter}
      onMouseLeave={handleMouseProjectsLeave}
    >
      <img src={image} alt="" />
      <h3>{title}</h3>
      {isProjectsDetailsVisible ? (
        <div>
          <p>{shortDescription}</p>
          <p>TECNOLOGIAS:</p>   
          <div>
            {technologies.map((item) => 
              <img key={item} src={item} alt="tecnoligia" />
            )}
          </div>
          <div>
          {links.map((item) => 
              <a key={item.link + item.name} href={item.link}>{item.name}</a>
            )}
          </div>
        </div>
       
      ) : null
      }
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card 