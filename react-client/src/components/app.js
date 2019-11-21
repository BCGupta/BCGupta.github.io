import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import {Helmet} from "react-helmet/es/Helmet";
import HomePage from './pages/homePage.js';

import myProjects from './pages/selfProjects.js';

import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import {Segment} from "semantic-ui-react";
import AboutMyself from "./pages/aboutMe";

class App extends Component {
  render() {
    return (
        <div>
      <Router>
        <div className="pageContent">
            <NavBar />
          <Route exact path="/" component={HomePage} />
         <Route exact path="/Me" component={AboutMyself}/>
         <Route exact path="/Projects" component={myProjects} />

          <Footer />
        </div>
      </Router>
        </div>
    )
  }
}

export default App;