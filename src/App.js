import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div id="mainContainer">
        <Navbar />
        {/*<Wrapper>*/}
          <Switch>
            <Route exact path={"/nicole-graiff-portfolio/"}>
              <Home />
            </Route>
            <Route exact path={"/nicole-graiff-portfolio/portfolio"}>
             <Portfolio />
            </Route>
            {/* <Route exact path="/nicole-graiff-portfolio/contact" component={Contact} /> */}
          {/*</Wrapper>*/}
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
