import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/common/Home";
import About from "./components/common/About";
import News from "./components/common/News";
import Navbar from "./components/common/CustomNavbar";
import SignUp from "./components/signup/SignUp";
import ListUser from "./components/signup/ListUser";
import Project from "./components/project/Project";
import ListProject from "./components/project/ListProject";
import Defects from "./components/defects/Defects";
import ListDefect from "./components/defects/ListDefect";
import Module from "./components/module/Module";
import ListModule from "./components/module/ListModule";
import ProjectIndex from "./components/project/ProjectIndex";

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
          <Route exact path="/listdefect" component={ListDefect} />
          <Route exact path="/module" component={Module} />
          <Route exact path="/listmodule" component={ListModule} />
          <Route exact path="/listuser" component={ListUser} />
          <ProjectIndex />
        </div>
      </Router>
    );
  }
}

export default App;
