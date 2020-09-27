import React from "react";
import "./style.css";
import projectOne from "../../assets/images/projectOne.png";
import vegburger from "../../assets/images/vegburgerApp.png";
import notesApp from "../../assets/images/notesApp.png";
import makeTimeApp from "../../assets/images/makeTimeApp.png";
import teamGenerator from "../../assets/images/teamGenerator.png";
import travelApp from "../../assets/images/travelApp.png";

function Portfolio() {
  const projectDetails = [
    {
      name: 'Food App',
      description: 'A recipe search app to put customized menu planning for your next party at the tip of your fingers.',
      image: projectOne,
      gitLink: 'https://github.com/mackenzieraeclark/Eat-Drink',
      url: 'https://mackenzieraeclark.github.io/Eat-Drink/'
    },
    {
      name: 'Eat \'da Veggie Burger',
      description: 'A whimsical app that allows you to log veggie burgers that you would like to eat and mark them as "devoured" after you have satisfied your craving.',
      image: vegburger,
      gitLink: 'https://github.com/keycole/burger',
      url: 'https://veggie-burger-nom-nom.herokuapp.com/'
    },
    {
      name: 'NoteTaker',
      description: 'An application that can be used to write, save, update, and delete notes.',
      image: notesApp,
      gitLink: 'https://github.com/keycole/take-note',
      url: 'https://boiling-journey-11707.herokuapp.com/'
    },
    {
      name: 'Make Time',
      description: 'A simple calendar application that allows the user to save events for each hour of the day.',
      image: makeTimeApp,
      gitLink: 'https://github.com/keycole/work-day-scheduler',
      url: 'https://keycole.github.io/work-day-scheduler/'
    },
    {
      name: 'Team Template',
      description: 'A Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.',
      image: teamGenerator,
      gitLink: 'https://github.com/keycole/employee-summary-template-engine',
      url: 'https://github.com/keycole/employee-summary-template-engine'
    },
    {
      name: 'Peregrine',
      description: 'Provides an insider\'s look at travel, helping people to find niche spots with authentic experiences.',
      image: travelApp,
      gitLink: 'https://github.com/jamescook98/peregrine',
      url: 'https://peregrine-travel.herokuapp.com/'
    }
  ]

  return (
    // <div>This will be the Portfolio Page</div> 
    <div class="ui stackable padded grid" id="mainContainer">
      <div class="container">
        <h1 class="ui header" id="portfolioHeader">
          Portfolio
                </h1>
        <div class="ui three column stackable grid">
          {projectDetails.map((project, i) => {
            return (
              <div class="column">
                <div class="ui fluid card" id="portfolioCard">
                  <div class="centered column">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div class="content">
                    <div class="header portfolioPage" key={i} id={i}>{project.name}</div>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio;