import React, { Component } from "react";
import "./Project.css";
//import axios from "axios";

export default class SignUp extends Component {
  state = {
    projectId: "",
    projectName: "",
    projectDescription: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8080/DefectTracker/saveProject", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  };
  render() {
    return (
      <div className="wrapperp">
        <div className="form-wrapperp">
          <h1 className="project_heading">Add New Project</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="id">
              <label htmlFor="projectId">Project Id</label>
              <input
                type="text"
                placeholder="Project ID"
                name="projectId"
                id="projectId"
                onChange={this.handleChange}
              />
            </div>
            <div className="project_name">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                placeholder="Project Name"
                name="projectName"
                id="projectName"
                onChange={this.handleChange}
              />
            </div>
            <div className="project_description">
              <label htmlFor="projectDescription">Project Description</label>
              <input
                type="text"
                placeholder="Project Description"
                name="projectDescription"
                id="projectDescription"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit" className="btn_submit_project">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
