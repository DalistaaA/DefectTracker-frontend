import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/common/Home";
import About from "./components/common/About";
import News from "./components/common/News";
import Navbar from "./components/common/CustomNavbar";
import SignUp from "./components/signup/SignUp";
import Project from "./components/project/Project";
import ListProject from "./components/project/ListProject";
import Defects from "./components/defects/Defects";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route exact path="/users" component={SignUp} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/listproject" component={ListProject} />
          <Route exact path="/defects" component={Defects} />
        </div>
      </Router>
    );
  }
}

export default App;
