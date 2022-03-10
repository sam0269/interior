import React from 'react'
import CardA from './CardA'
import CardB from './CardB'
import '../style.css'

const Primary = () => {
  return (
      <>
        <div id="primary_content">
          <CardA />
          <CardB img = "images/2.png"/>
        </div>
      </>
  )
}

export default Primary