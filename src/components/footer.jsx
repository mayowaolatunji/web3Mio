import React from 'react'

import './footer.css'

import LinkedIn from './assets/linkedIn.svg'
import Medium from "./assets/Medium.svg";
import Twitter from "./assets/X(Twitter).svg";


function footer() {
  return (
    <div className="foota">
      <div className="footaText">
        <h2>
          Web<span>3</span>Mio
        </h2>
        <h3>Copyright 2024</h3>
      </div>

      <div className="ImgFooter">
        <img src={LinkedIn} alt="LinkedIn" />
        <img src={Medium} alt="Medium" />
        <img src={Twitter} alt="X" />
      </div>
    </div>
  );
}

export default footer
