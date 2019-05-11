import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditProject from "./EditProject";

export default class ProjectIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/EditProject/:projectId" component={EditProject} />
        </Switch>
      </Router>
    );
  }
}
