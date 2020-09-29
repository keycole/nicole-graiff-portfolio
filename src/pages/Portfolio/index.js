import React from "react";
import "./style.css";
import ProjectDetail from "../../components/ProjectDetail";

function Portfolio() {
  return (
    // <div>This will be the Portfolio Page</div> 
    <div className="ui stackable padded grid" id="mainContainer">
      <div className="container">
        <h1 className="ui header" id="portfolioHeader">
          Portfolio
                </h1>
        <div className="ui three column stackable grid">
          <ProjectDetail />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;