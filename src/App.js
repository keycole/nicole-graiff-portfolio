import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/*<Wrapper>*/}
          <Route exact path="/nicole-graiff-portfolio/" component={Home} />
          <Route exact path="/nicole-graiff-portfolio/portfolio" component={Portfolio} />
          {/* <Route exact path="/nicole-graiff-portfolio/contact" component={Contact} /> */}
        {/*</Wrapper>*/}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
