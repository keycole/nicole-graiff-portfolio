import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar />*/}
        {/*<Wrapper>*/}
          <Route exact path="/nicole-graiff-portfolio/" component={Home} />
          <Route exact path="/nicole-graiff-portfolio/portfolio" component={Portfolio} />
          <Route exact path="/nicole-graiff-portfolio/contact" component={Contact} />
        {/*</Wrapper>*/}
        {/*<Footer /> */}
      </div>
    </Router>
  );
}

export default App;
