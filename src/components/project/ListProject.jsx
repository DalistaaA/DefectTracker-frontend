import React from "react";
import { DeleteProject } from "./DeleteProject";

export default class ListProject extends React.Component {
  state = {
    Project: []
  };

  async componentDidMount() {
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

  //project edit start

  edit(id) {
    this.props.history.push("/EditProject/${id}");
    //console.log(id);
  }

  //project edit end

  delete(e) {
    DeleteProject(e);
    if (DeleteProject) {
      window.location.reload();
    }
    //window.location.reload();
  }

  render() {
    return (
      <div className="bs-example-project">
        <div className="bs-example">
          <h1 className="head_viewp">View All Projects</h1>
          <table className="table table_width">
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
                  <td>{e.projectId}</td>
                  <td>{e.projectName}</td>
                  <td>{e.projectDescription}</td>
                  <td>
                    <button
                      className="btn-1"
                      onClick={this.componentDidCatch.bind(this, e.projectId)}
                    >
                      Edit
                    </button>
                    <button
                      /* onClick={() => this.delete(e.id)}*/
                      onClick={this.delete.bind(this, e.projectId)}
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
