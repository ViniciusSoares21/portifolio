import React from 'react'

function Card({title, description, image}) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="" />
      <p>{description}</p>
      <p>TECNOLOGIAS:</p>
      <div>
        {[].map((item) => 
          <img key={item} src={item} alt="tecnoligia" />
        )}
      </div>
      <div>
      {[].map((link) => 
          <a key={link} href={link}></a>
        )}
      </div>
    </div>
  )
}

export default Card 