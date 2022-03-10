import React from 'react'
import '../style.css';

const Button = (props) => {
  return (
      <>
          <button style={{border:props.border,color:props.color}}>
              Learn More
          </button>
      </>
  )
}

export default Button

