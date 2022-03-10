import React from "react";
import Item from "./Item";

const Quadratic = () => {
  return (
    <>
      <div id="quadratic-section">
        <h1 className="h1" style={{marginLeft:"10rem"}}>
          We design & deliver beautiful hotels, luxury homes and innovative
          workplace interiors
        </h1>
        <div className="item-store">
        <Item
          img="images/bedroom.png"
          title="Projects"
          para="Sample text. Click to select the text box. Click again or double click to start editing the text."
        />
        <Item
          img="images/project.png"
          title="Projects"
          para="Sample text. Click to select the text box. Click again or double click to start editing the text."
        />
        <Item
          img="images/sofa.png"
          title="Projects"
          para="Sample text. Click to select the text box. Click again or double click to start editing the text."
        />
        </div>
      </div>
    </>
  );
};

export default Quadratic;
