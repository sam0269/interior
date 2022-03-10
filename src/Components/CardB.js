import React from 'react'
import '../style.css';

const CardB = (props) => {
  return (
      <>
          <div className="img-content">
              <img src={props.img} alt="image2" />
          </div>
      </>
  )
}

export default CardB