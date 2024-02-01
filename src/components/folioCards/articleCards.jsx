import React from 'react'

import './articleCards.css'

import Ronin from './images/Ronin.jpg'
import EIP4488 from './images/EIP4488.jpg'
import Ellipse3 from "./images/Ellipse 3 (3).svg";
import EVM from "./images/evm article.png";
import ZKP from "./images/zkp img.png";
import EIP from "./images/EIP-4488.png";


function portfolioCards() {
    return (
      <div className="folio">
        <div className="card1">
          <div className="card">
            <img src={EIP} alt="" />
            <h3 className="title">
              A part of Web3/Crypto articles developed to educate users &
              translate non-natives of decentralized technology.
            </h3>
            <h4 className="Publisher">Published on Gate.io</h4>
          </div>

          <div className="cardText">
            <div className="head">
              <img src={Ellipse3} alt="" />
              <h4>Project Description</h4>
            </div>
            <p>
              Gate.io | A Centralized exchange that helps user Trade over 1,700
              cryptocurrencies safely, quickly, and easily.
              <br />
              <br />
              This experience encompasses a comprehensive collection of over 300
              meticulously crafted and published articles. My content strategy
              adopts a robust inbound marketing approach, seamlessly integrating
              technical reports and articles covering a diverse array of topics,
              including but not limited to security breaches, DeFi
              (Decentralized Finance), NFTs (Non-Fungible Tokens), Improvement
              Proposal papers, Consensus protocols, Scalability solutions, and
              bridges. <br /> <br />
              This body of work not only showcases my versatility in navigating
              complex technical subjects but also demonstrates a keen
              understanding of the dynamic landscape of blockchain and
              cryptocurrency.
            </p>
            <button className="bttn">View</button>
          </div>
        </div>

        <div className="card2">
          <div className="card">
            <img src={EVM} alt="" />
            <h3 className="title">Ethereum Virtual machine (EVM) Explained.</h3>
            <h4 className="Publisher">Published on Gitbook for Blockink.io</h4>
          </div>

          <div className="cardText">
            <div className="head">
              <img src={Ellipse3} alt="" />
              <h4>Project Description</h4>
            </div>
            <p>
              Blockink.io | A web3 Technical Documentation & marketing Agency.{" "}
              <br /> <br />
              This article aims to establish a comprehensive knowledge base for
              the blockink ecosystem. Through extensive research, I have
              endeavored to distill and elucidate the Ethereum Virtual Machine
              (EVM) from a non-developer perspective. The focus is on
              comprehending the state transition function and gaining insights
              into the workings of the EVM. <br />
              <br />
              This article demonstrates my ability to comprehend the complex
              blockchain core subjects and distll them into digestabl
              educational content.
            </p>
            <button className="bttn">View</button>
          </div>
        </div>
        <div className="card3">
          <div className="card">
            <img src={ZKP} alt="" />
            <h3 className="title">
              Zero-knowledge Proof: IZKs, NIZKs, SNARKS, STARKS Explained
            </h3>
            <h4 className="Publisher">Published on Coinmonks</h4>
          </div>

          <div className="cardText">
            <div className="head">
              <img src={Ellipse3} alt="" />
              <h4>Project Description</h4>
            </div>
            <p>
              Coinmonks | A non-profit Crypto Educational Publication. <br />
              <br />
              The article explained the zero-knowledge proofs, exploring various
              types such as IZKs (Interactive Zero-Knowledge), NIZKs
              (Non-Interactive Zero-Knowledge), SNARKs (Succinct Non-Interactive
              Arguments of Knowledge), and STARKs (Scalable Transparent
              Arguments of Knowledge). <br /><br />It demystifies these cryptographic
              marvels, providing a technical yet accessible overview of their
              functionalities and applications in blockchain security.
            </p>

            <button className="bttn">View</button>
          </div>
        </div>
      </div>
    );
}

export default portfolioCards