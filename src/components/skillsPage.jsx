import React, { useEffect, useState } from "react";
import "./skillsPage.css";

function SkillsPage() {
  const [clickedText, setClickedText] = useState("TechnicalWriting");
  const [activeText, setActiveText] = useState("text1");

  useEffect(() => {
    // You can perform any side effects or updates here based on clickedText
    // For example, you might want to trigger some action or update the UI
    console.log(`Clicked text: ${clickedText}`);
    console.log(`Active text: ${activeText}`);
  }, [clickedText, activeText]);

  const textI =
    "The ability to articulate ideas with clarity is a fundamental skill that contributes to the overall success of projects and organizations. As a professional with a proven track record in stellar communication, I deliver outstanding Articles, Tutorials, User manuals, System & API documentation, white papers, and guides that onboard, inform, and enhance end-users experience.";
 
  const textII = [
    "In a web3 technical writing role, a profound understanding of Web3 technologies is paramount for effectively communicating the intricacies of decentralized and blockchain-based frameworks. As Web3 represents a transformative shift in internet dynamics, a deep grasp of the fundamental concepts is needed to articulate their implications and applications clearly.",
    " My proficiency in Web3 technical content writing, coupled with a background in web development, equips me with a unique skill set to produce documentation that not only elucidates the complexities of decentralized and blockchain frameworks but also guides users and developers seamlessly.",
  ];
 
  const textIII =
    " The essence of user profiling in creating technical content and documentation lies in tailoring information to meet the specific needs, preferences, and proficiency levels of the target audience. By thoroughly understanding the characteristics, knowledge levels, and requirements of users, I can craft content that is not only technically accurate but also highly user-centric. This approach ensures that the documentation is accessible, engaging, and directly addresses the concerns or challenges faced by the intended users."; 

  const textIV =" Technical content marketing is the strategic integration of technical writing and marketing, leveraging content to engage and educate a target audience about complex technical subjects. This approach not only communicates technical details effectively but also aligns with broader marketing strategies, ensuring that the content resonates with the target audience and contributes to overall business objectives."

  const handleTextChange = (text) => {
    setClickedText(text);

    // Remove underline from the previously clicked text
    if (text !== activeText) {
      setActiveText(text);
    }
  };

  return (
    <div className="skills">
      <div className="heading">
        <h3
          onClick={() => handleTextChange("text1")}
          className={clickedText === "text1" ? "underlined" : ""}
        >
          Clear Communication
        </h3>
        <h3
          onClick={() => handleTextChange("text2")}
          className={clickedText === "text2" ? "underlined" : ""}
        >
          Web3 Technologies
        </h3>

        <h3
          onClick={() => handleTextChange("text3")}
          className={clickedText === "text3" ? "underlined" : ""}
        >
          User Profiling
        </h3>

        <h3
          onClick={() => handleTextChange("text4")}
          className={clickedText === "text4" ? "underlined" : ""}
        >
          Marketing & Community
        </h3>
      </div>

      <div className={`text1 ${activeText === "text1" ? "textI" : ""}`}>
        <h3>{activeText === "text1" ? textI : ""}</h3>
      </div>

      <div className={`text2 ${activeText === "text2" ? "textII" : ""}`}>
        <h3>{activeText === "text2" ? textII : ""}</h3>
      </div>

      <div className={`text3 ${activeText === "text3" ? "textIII" : ""}`}>
        <h3>{activeText === "text3" ? textIII : ""}</h3>
      </div>

      <div className={`text4 ${activeText === "text4" ? "textIV" : ""}`}>
        <h3>{activeText === "text4" ? textIV : ""}</h3>
      </div>
    </div>
  );
}

export default SkillsPage;
