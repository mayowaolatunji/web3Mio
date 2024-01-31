import React, { useState, useEffect } from 'react';
import './header.css';
import NavBar from './navBar.jsx';

import Line1 from './assets/Line 1.svg';
import Rectangle1 from './assets/Rectangle1.svg';
import Rectangle2 from './assets/Rectangle2.svg';
import Photo from './assets/photo.png';
import Photo1 from './assets/photo1.png';
import Telegram from './assets/telegram.png';

function Header() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const flipHeight = 100; // Set the desired flip height

      if (scrollY > flipHeight) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);

      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <NavBar />
      <div className="greet">
        <div className="copy">
          <img className="line1" src="" alt="" />
          <h3 className="content">
            Hello There! <br />
            <br />
            I am Mayowa Olatunji, a web3 Technical Writer. <br />
            <br />I specialize in
            distilling the complexity of web3 technologies into clear,
            accessible content that fosters seamless communication between
            projects and their respective audiences.
          </h3>
          <img className="line2" src="" alt="" />

          <div className="btn">
            <button>Email Me</button>
            <img src={Telegram} alt="" />
          </div>
        </div>

        <div className="Img">
          <img className="Rectangle1" src={Rectangle1} alt="" />
          <img className="Rectangle2" src={Rectangle2} alt="" />
          <img
            className={`photo ${isFlipped ? "flipped" : ""}`}
            src={isFlipped ? Photo : Photo1}
            alt=""
            // style={{ transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
