import React from "react";
import "./style.css"
import headshot from "../../assets/images/graiffHeadshotSquare.jpg"
import pdf from "../../assets/files/Resume.pdf"
function Home() {
  return (
    <div className="ui stackable padded grid" id="mainContainer">
      <div className="column">
        <div className="ui items">
          <div className="item">
            <div className="ui medium circular image">
              <img src={headshot} alt="Nicole Graiff full stack web developer"/>
            </div>
              <div className="content" id="contentContainer">
                <div className="header" id="homeHeader">About Me</div>
                <div className="meta">
                  <span>Brand Statement</span>
                </div>
                <div className="description">
                  <p>Nicole Graiff is a full stack web developer with over three years experience as a digital project manager. Took the
                  initiative to learn programming to improve workflow and understanding of development requests while
                  project managing. During the process of continuing education, fell in love with the problem-solving and
                  creative aspect of web development and decided to transition to a back end role. Recently obtained a
                  certificate in full stack development from Columbia University. Looking for a position where creating
                and improving code is used to enhance user experience and promote social wellbeing.</p>
                </div>
                <div className="extra">
                  Skills: HTML, CSS, JavaScript, Node, Agile Methodology, Project Management
                </div>
                <div className="extra">
                  <button className="ui positive basic button"><a id="resumeButton" href={pdf} target="_blank" rel="noopener noreferrer">Resume</a></button>
                  <button className="ui positive basic button"><a id="emailButton" href="mailto:nicole.graiff@gmail.com?subject=Portfolio Contact Message">Contact Me</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
}

export default Home;