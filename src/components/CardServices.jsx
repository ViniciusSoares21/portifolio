import PropTypes from 'prop-types';

function CardServices({name, skills, image}) {
  return (
    <div className=" flex flex-col  bg-light w-60 h-80 text-dark rounded-2xl font-[Arial]">
      <img className="w-40 fill-none -ml-6 -mb-16 -mt-6" src={image} alt="ICON" />
      <p className="text-xl font-semibold text-start ml-6">{name}</p>
      <p className="text-base font-normal ml-6 text-start mt-2">{skills}</p>
    </div>
  )  
}

CardServices.propTypes = {
  name: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,  
};

export default CardServices;