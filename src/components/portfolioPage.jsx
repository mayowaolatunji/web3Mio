import React, { useEffect, useState } from "react";
import ArticleCards from "./folioCards/articleCards.jsx";
import DocumentsCards from "./folioCards/documentationCards.jsx";
import TutorialCards from "./folioCards/tutorialCards.jsx";
import "./portfolioPage.css";

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Article");
  const [activePost, setActivePost] = useState("Article");

  useEffect(() => {
    console.log(`Clicked category: ${activeCategory}`);
    console.log(`Clicked post: ${activePost}`);
  }, [activeCategory, activePost]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Reset activePost when changing the category
    setActivePost(category);
  };

  const handlePostChange = (post) => {
    setActivePost(post);
  };

  const renderContent = () => {
    switch (activeCategory) {
      case "Article":
        return <ArticleCards onPostChange={handlePostChange} />;
      case "Documents":
        return <DocumentsCards onPostChange={handlePostChange} />;
      case "Tutorial":
        return <TutorialCards onPostChange={handlePostChange} />;
      default:
        return null; // or handle a default case
    }
  };

  return (
    <div className="portfolioContainer">
      <div className="header">
        <h2>Portfolio</h2>
        <div className="line"></div>
        <div className="fortfolioHead">
          <h3
            onClick={() => {
              handleCategoryChange("Article");
            }}
            className={activeCategory === "Article" ? "underlined" : ""}
          >
            Articles
          </h3>
          <h3
            onClick={() => {
              handleCategoryChange("Documents");
            }}
            className={activeCategory === "Documents" ? "underlined" : ""}
          >
            Documentation
          </h3>
          <h3
            onClick={() => {
              handleCategoryChange("Tutorial");
            }}
            className={activeCategory === "Tutorial" ? "underlined" : ""}
          >
            Tutorial
          </h3>
        </div>
      </div>

      <div className={activeCategory}>{renderContent()}</div>
    </div>
  );
}

export default PortfolioPage;
