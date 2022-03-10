import React from 'react'

const Item = (props) => {
  return (
      <>
          <div id="items-content">
            <img src={props.img} alt="images" style={{height:"11rem",width:"10rem",borderRadius: '15rem'}} />
            <p style={{fontSize: '1.5rem',textAlign: 'center'}}>{props.para}</p>
          </div>
      </>
  )
}

export default Item