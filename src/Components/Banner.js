import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <>
      <div id="banner-section">
        <div className="banner-content" style={{ color: "#fff" }}>
          <h1 className="h1"> ​Visit Our Inspirational Showrooms Today!</h1>
          <p className="p">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Viverra maecenas accumsan lacus vel
            ​facilisis volutpat. Cras fermentum odio eu feugiat pretium nibh.
          </p>
          <Button border="0.3rem solid #fff" color="#fff" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FEFEFE" fillOpacity="0.82"
          d="M0,64L60,85.3C120,107,240,149,360,176C480,203,600,213,720,192C840,171,960,117,1080,122.7C1200,128,1320,192,1380,224L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Banner;
