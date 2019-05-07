import React from "react";
import { DeleteModule } from "./DeleteModule";

export default class ListProject extends React.Component {
  state = {
    Module: [],
    User: [],
    Project: []
  };

  Project = {
    projectId: "",
    projectName: ""
  };

  User = {
    userId: "",
    firstName: ""
  };
  async componentDidMount() {
    this.viewModule();
  }
  //project view start
  viewModule() {
    fetch("http://localhost:8080/DefectTracker/module/findAllModules")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ Module: data });
      });
  }

  //project view end

  DeleteM(e) {
    DeleteModule(e);
    window.location.reload();
  }

  render() {
    return (
      <div className="bs-example-project">
        <div className="bs-example">
          <h1 className="head_viewm">View All Modules</h1>
          <table className="table table_widthm">
            <thead>
              <tr>
                <th>Module ID</th>
                <th>Module Name</th>
                <th>Project ID</th>
                <th>User ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Module.map(e => (
                <tr>
                  <td>{e.moduleId}</td>
                  <td>{e.moduleName}</td>
                  <td>{e.project.projectId}</td>
                  <td>{e.user.userId}</td>
                  <td>
                    <button className="btn-1ml">Edit</button>
                    <button
                      /* onClick={() => this.delete(e.id)}*/
                      onClick={this.DeleteM.bind(this, e.moduleId)}
                      className="btn-2ml"
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
