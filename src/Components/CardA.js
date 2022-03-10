import React from "react";
import '../style.css';
import Button from "./Button";

const CardA = () => {
  return (
    <>
      <div className="card_component">
        <div className="heading p">
          <h1>About Our Building Company</h1>
        </div>
        <div className="para p">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="button-content">
        <Button border = "0.3rem solid #218056" color= "#000"/>
        </div>
      </div>
    </>
  );
};

export default CardA;
