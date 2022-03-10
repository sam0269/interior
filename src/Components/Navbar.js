import React from 'react'
import '../style.css';

const Navbar = () => {
  return (
      <>
          <div id="navbar_content">
            <div className="logo_style">
              <img src="images/logo.png" alt="logo" />
            </div>
            <ol>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ol>
          </div>
      </>
  )
}

export default Navbar;