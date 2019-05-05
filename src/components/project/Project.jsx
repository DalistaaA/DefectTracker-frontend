import React, { Component } from "react";
import "./Project.css";
//import axios from "axios";

export default class SignUp extends Component {
  state = {
    id: "",
    project_name: "",
    project_description: ""
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
              <label htmlFor="id">Id</label>
              <input
                type="text"
                placeholder="ID"
                name="id"
                id="id"
                onChange={this.handleChange}
              />
            </div>
            <div className="project_name">
              <label htmlFor="project_name">Project Name</label>
              <input
                type="text"
                placeholder="Project Name"
                name="project_name"
                id="project_name"
                onChange={this.handleChange}
              />
            </div>
            <div className="project_description">
              <label htmlFor="project_description">Project Description</label>
              <input
                type="text"
                placeholder="Project Description"
                name="project_description"
                id="project_description"
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
