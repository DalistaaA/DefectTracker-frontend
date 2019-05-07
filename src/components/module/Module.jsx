import React, { Component } from "react";
import "./Module.css";
//import axios from "axios";

export default class Module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Project: [],
      User: [],
      post: []
    };
  }

  state = {
    moduleId: "",
    moduleName: "",
    projectId: "",
    userId: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    let users = {
      moduleName: this.state.moduleName,
      project: {
        projectId: this.state.projectId
      },
      user: {
        userId: this.state.userId
      }
    };

    console.log(users);
    fetch("http://localhost:8080/DefectTracker/module/saveModule", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-type": "application/json"
      },
      body: JSON.stringify(users)
    });
  };
  render() {
    return (
      <div className="wrapperp">
        <div className="form-wrapperp">
          <h1 className="module_heading">Add Module</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="module_id">
              <label htmlFor="moduleId">Module Id</label>
              <input
                type="text"
                placeholder="Module ID"
                name="moduleId"
                id="moduleId"
                onChange={this.handleChange}
              />
            </div>
            <div className="module_name">
              <label htmlFor="moduleName">Module Name</label>
              <input
                type="text"
                placeholder="Module Name"
                name="moduleName"
                id="moduleName"
                onChange={this.handleChange}
              />
            </div>
            <div className="project_idm">
              <label htmlFor="projectId">Project ID</label>
              <input
                type="text"
                placeholder="Project ID"
                name="projectId"
                id="projectId"
                onChange={this.handleChange}
              />
            </div>
            <div className="user_idm">
              <label htmlFor="userId">User ID</label>
              <input
                type="text"
                placeholder="User ID"
                name="userId"
                id="userId"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit" className="btn_submit_module">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
