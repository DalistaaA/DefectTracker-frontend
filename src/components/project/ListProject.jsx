import React from "react";
//import "./ListProject.css";
import { DeleteProject } from "./DeleteProject";

export default class ListProject extends React.Component {
  state = {
    Project: []
  };

  async componentDidMount() {
    // const url = "http://localhost:3000/AddDefect";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({ detail: data.AddDefect, loading: false });
    // console.log(data);
    this.getPost();
  }
  //project view start
  getPost() {
    fetch("http://localhost:8080/DefectTracker/findAllProject")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ Project: data });
      });
  }

  //project view end

  delete(e) {
    DeleteProject(e);
    window.location.reload();
  }

  render() {
    return (
      <div className="bs-example-project">
        <div className="bs-example">
          <h1 className="head_viewp">View All Projects</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Project Name</th>
                <th>Project Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Project.map(e => (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.project_name}</td>
                  <td>{e.project_description}</td>
                  <td>
                    <button className="btn-1">Edit</button>
                    <button
                      /* onClick={() => this.delete(e.id)}*/
                      onClick={this.delete.bind(this, e.id)}
                      className="btn-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
