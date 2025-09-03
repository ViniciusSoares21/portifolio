import {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import iconArrowLeft from "../image/Union.svg";

function Card({title, shortDescription, image}) {
  const [isProjectsDetailsVisible, setIsProjectsDetailsVisible] = useState(false);

  const handleMouseProjectsEnter = () => setIsProjectsDetailsVisible(true);
  const handleMouseProjectsLeave = () => setIsProjectsDetailsVisible(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseProjectsEnter}
      onMouseLeave={handleMouseProjectsLeave}
    >
      <div>
        <div>
            <img 
              className={styles.image} 
              src={image} 
              alt=""
            />
            <div className={styles.title}>
              <h4>{title}</h4>
            </div>
        </div>
        {isProjectsDetailsVisible && (
          <div className={styles.subContainer}>
            <p>{shortDescription}</p>
            <Link 
            to={{
              pathname: `/project/${title}`, 
              state: { title },
            }}>
            <div className='flex gap-2 justify-center items-center mt-10'>
              <p className="p-1.5 border-2 font-semibold border-light rounded-4xl bg-light text-dark">Ver mais </p>
              <img className="w-8 h-8  bg-light p-1 rounded-full" src={iconArrowLeft} alt="" />
            </div>
          </Link>
          </div>
        )}
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