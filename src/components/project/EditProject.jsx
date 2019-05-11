import React, { Component } from "react";
import "./Project.css";

export default class EditProject extends Component {
  state = {
    getProject: []
  };
  getProject = {
    projectId: "",
    projectName: "",
    projectDescription: ""
  };

  FetchProjectById() {
    fetch(
      `http://localhost:8080/DefectTracker/findProject/{projectId}` +
        this.props.match.params.projectId
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          projectId: data.projectId,
          projectName: data.projectName,
          projectDescription: data.projectDescription,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.FetchProjectById(this.projectId);
  }

  UpdateProject(projectUpdate) {
    return fetch("http://localhost:8080/DefectTracker/updateProject", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(projectUpdate)
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  }

  handleUpdate = e => {
    e.preventDefault();
    const projectUpdate = {
      projectId: this.state.projectId,
      projectName: this.state.projectName,
      projectDescription: this.state.projectDescription
    };
    this.UpdateProject(projectUpdate);
    console.log(projectUpdate);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    // console.log(e.target.value);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Add New Project</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="id">
              <label htmlFor="projectId">Project Id</label>
              <input
                type="text"
                placeholder="ID"
                name="projectId"
                id="projectId"
                value={this.state.projectId}
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
                value={this.state.projectName}
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
                value={this.state.projectDescription}
                onChange={this.handleChange}
              />
            </div>
            <div className="submit">
              <button type="submit" onClick={e => this.handleUpdate(e)}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
