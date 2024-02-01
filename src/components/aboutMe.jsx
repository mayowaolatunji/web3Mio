import React from 'react'

import './aboutMe.css'

import Ellipse3 from "./folioCards/images/Ellipse 3 (3).svg";
import Ellipse2 from "./folioCards/images/Ellipse 3 (2).svg";
import Ellipse1 from "./folioCards/images/Ellipse 3 (1).svg";
import Inkon from "./folioCards/images/inkon.jpeg";


function aboutMe() {
  return (
    <div className="About">
      <div className="aboutHead">
        <h3>About Me</h3>
      </div>

      <div className="aboutText">
        <div className="aboutText1">
          <div className="TextHead">
            <img src={Ellipse3} alt="" />
            <h3>Backgroud</h3>
          </div>

          <p>
            My experince in the web3 rabbit hole started with a leap into web3
            Research & content writing 4 years back. However my
            background in Process engineering and Software development fostered
            my interest into technical communications. <br />
            This array of conscious choices has equiped me, over the yesrs, with
            the requisite skills and knowledge that helps me bridge gap between
            technical concepts and simplicity.
          </p>
        </div>

        <div className="aboutText2">
          <div className="TextHead">
            <img src={Ellipse1} alt="" />
            <h3>Skills & Technologies</h3>
          </div>

          <p>
            Proficient in utilizing technical writing tools, such as MS Word and
            Adobe Acrobat RoboHelp, as well as MadCap Flare and SnagIt. <br /> <br />Familiar
            with graphics software, including Figma, Adobe Photoshop
            Illustrator, Microsoft Visio, and Canva. Database software, CMS/LMS,
            and API documentation software such as Postman and Swagger.
            <br /> <br />
            Documentation: Docs-as-code Documentation, Document permission &
            source Control, AP Style, Knowledge-base Management, intuitive UX
            writing, on-chain & 0ff-chain data analysis. <br /> <br />
  
            Languages & Frameworks: Javascript, React, Solidity GraphQL, Python, 
            REST, Github/Gitbook, Markdown.
          </p>
        </div>
      </div>
    </div>
  );
}

export default aboutMe