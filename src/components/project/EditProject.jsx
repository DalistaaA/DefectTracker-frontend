import React, { Component } from "react";
import "./Project.css";
import "./UpdateFunction.jsx";

export default class EditProject extends Component {
  state = {
    getProject: []
  };
  getProject = {
    id: "",
    project_name: "",
    project_description: ""
  };

  FetchProjectById() {
    fetch(
      `http://localhost:8080/DefectTracker/findProject/{id}` +
        this.props.match.params.id
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          id: data.id,
          project_name: data.project_name,
          project_description: data.project_description,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.FetchProjectById(this.id);
  }

  handleUpdate = e => {
    // console.log(subClassId);
    const projectUpdate = {
      id: this.state.id,
      project_name: this.state.project_name,
      project_description: this.state.project_description
    };
    UpdateFunction.UpdateProject(projectUpdate);
    console.log(projectUpdate);
    //SubClass.UpdateSubClass(subClassUpdate);
    //console.log(subClassUpdate);
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
            <div className="submit">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
