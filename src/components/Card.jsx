import React from 'react'

function Card({title, shortDescription, image, technologies, links}) {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
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
  )
}

export default Card 