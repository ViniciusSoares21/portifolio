import {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card({title, shortDescription, image, technologies, links}) {
  const [isProjectsDetailsVisible, setIsProjectsDetailsVisible] = useState(false);

  const handleMouseProjectsEnter = () => setIsProjectsDetailsVisible(true);
  const handleMouseProjectsLeave = () => setIsProjectsDetailsVisible(false);

  return (
    <div
      className={isProjectsDetailsVisible && styles.container}
      onMouseEnter={handleMouseProjectsEnter}
      onMouseLeave={handleMouseProjectsLeave}
    >
      <div>
        <img 
          className={!isProjectsDetailsVisible ? styles.image : styles.imageWithDetail} 
          src={image} 
          alt=""
        />
        {!isProjectsDetailsVisible &&
          <div className={styles.title}>
            <h4>{title}</h4>
          </div>
        }
        {isProjectsDetailsVisible ? (
          <div className={styles.subContainer}>
            <p>{shortDescription}</p>
            <h4>TECNOLOGIAS:</h4>   
            <div className={styles.containerTechnologies}>
              {technologies.map((item) => 
                <img key={item} src={item} alt="tecnoligia" />
              )}
            </div>
            <div className={styles.containerLinks}>
            {links.map((item) => 
                <a key={item.link + item.name} href={item.link}>{item.name}</a>
              )}
            </div>
          </div>
        
        ) : null
        }
      </div>
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