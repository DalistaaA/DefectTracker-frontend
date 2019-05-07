import React from "react";
import { DeleteDefect } from "./DeleteDefect";

export default class ListDefect extends React.Component {
  state = {
    Defect: []
  };

  async componentDidMount() {
    this.viewDefect();
  }
  //project view start
  viewDefect() {
    fetch("http://localhost:8080/DefectTracker/defect/findAllDefects")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ Defect: data });
      });
  }

  //project view end

  //   delete(e) {
  //     DeleteDefect(e);
  //     //window.location.reload();
  //   }

  DeleteD(e) {
    DeleteDefect(e);
    window.location.reload();
  }

  render() {
    return (
      <div className="bs-example-project">
        <div className="bs-example">
          <h1 className="head_viewd">View All Defects</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Defect ID</th>
                <th>Module</th>
                <th>Description</th>
                <th>Steps To Recreate</th>
                <th>Severity</th>
                <th>Priority</th>
                <th>Defect Type</th>
                <th>Entered By</th>
                <th>Entered date</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Fixed By</th>
                <th>Fixed Date</th>
                <th>Availabe In</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Defect.map(e => (
                <tr>
                  <td>{e.defectId}</td>
                  <td>{e.module}</td>
                  <td>{e.description}</td>
                  <td>{e.stepsToRecreate}</td>
                  <td>{e.severity}</td>
                  <td>{e.priority}</td>
                  <td>{e.defectType}</td>
                  <td>{e.enteredBy}</td>
                  <td>{e.enteredDate}</td>
                  <td>{e.status}</td>
                  <td>{e.assignedTo}</td>
                  <td>{e.fixedBy}</td>
                  <td>{e.fixedDate}</td>
                  <td>{e.avalableIn}</td>
                  <td>
                    <button className="btn-1dl">Edit</button>
                    <button
                      type="submit"
                      /* onClick={() => this.delete(e.defectId)}*/
                      onClick={this.DeleteD.bind(this, e.defectId)}
                      className="btn-2dl"
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
