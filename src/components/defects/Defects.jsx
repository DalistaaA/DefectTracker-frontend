import React from "react";
import "./Defects.css";
//import { Row, Col, Form } from "react-bootstrap";

export default class Defects extends React.Component {
  state = {
    defectId: "",
    module: "",
    description: "",
    stepsToRecreate: "",
    severity: "",
    priority: "",
    defectType: "",
    enteredBy: "",
    enteredDate: "",
    status: "",
    assignedTo: "",
    fixedBy: "",
    fixedDate: "",
    avalableIn: ""
  };

  handlechange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let defect = {
      module: this.state.module,
      description: this.state.description,
      stepsToRecreate: this.state.stepsToRecreate,
      severity: this.state.severity,
      priority: this.state.priority,
      defectType: this.state.defectType,
      enteredBy: this.state.enteredBy,
      enteredDate: this.state.enteredDate,
      status: this.state.status,
      assignedTo: this.state.assignedTo,
      fixedBy: this.state.fixedBy,
      fixedDate: this.state.fixedDate,
      avalableIn: this.state.avalableIn
    };
    console.log(defect);
    fetch("http://localhost:8080/DefectTracker/defect/saveDefect", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-type": "application/json"
      },
      body: JSON.stringify(defect)
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <h1 className="add_defect_heading">Add Defect</h1>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tr>
                <td className="defect_id">
                  <label htmlFor="defectId" className="labeld">
                    Defect ID
                  </label>
                  <input
                    type="text"
                    placeholder="Defect ID"
                    name="defectId"
                    id="defectId"
                    onChange={this.handlechange}
                    /*onChange={e => this.setState({ defect_id: e.target.value })}*/ // assign value without setstate
                  />
                </td>
                <td className="module">
                  <label htmlFor="module" className="labelmod">
                    Module
                  </label>
                  <input
                    type="text"
                    name="module"
                    id="module"
                    placeholder="Module"
                    onChange={this.handlechange}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td className="description">
                  <label htmlFor="description" className="labeldes">
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    onChange={this.handlechange}
                  />
                </td>
                <td className="steps_to_recreate">
                  <label htmlFor="stepsToRecreate" className="labelst">
                    Steps to Recreate
                  </label>
                  <textarea
                    type="text"
                    name="stepsToRecreate"
                    id="stepsToRecreate"
                    placeholder="Steps to Recreate"
                    onChange={this.handlechange}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td className="severity">
                  <label htmlFor="severity" className="labelse">
                    Severity
                  </label>
                  <select
                    name="severity"
                    id="severity"
                    placeholder="Severity"
                    onChange={this.handlechange}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </td>
                <td className="priority">
                  <label htmlFor="priority" className="labelpr">
                    Priority
                  </label>
                  <select
                    name="priority"
                    id="priority"
                    placeholder="Priority"
                    onChange={this.handlechange}
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </td>
              </tr>
              <br />
              <tr>
                <td className="defect_type">
                  <label htmlFor="defectType" className="labeldt">
                    Defect Type
                  </label>
                  <select
                    name="defectType"
                    id="defectType"
                    placeholder="Defect Type"
                    onChange={this.handlechange}
                  >
                    <option>UI</option>
                    <option>functionality</option>
                    <option>Enhancement</option>
                    <option>Performance</option>
                  </select>
                </td>
                <td className="entered_by">
                  <label htmlFor="enteredBy" className="labeleb">
                    Entered By
                  </label>
                  <select
                    type="text"
                    name="enteredBy"
                    id="enteredBy"
                    placeholder="Entered By"
                    onChange={this.handlechange}
                  >
                    <option>User1</option>
                  </select>
                </td>
              </tr>
              <br />
              <tr>
                <td className="entered_date">
                  <label htmlFor="enteredDate" className="labeled">
                    Entered Date
                  </label>
                  <input
                    type="Date"
                    name="enteredDate"
                    id="enteredDate"
                    placeholder="Entered Date"
                    onChange={this.handlechange}
                  />
                </td>
                <td className="status">
                  <label htmlFor="status" className="labelsta">
                    Status
                  </label>
                  <select
                    type="text"
                    name="status"
                    id="status"
                    placeholder="Status"
                    onChange={this.handlechange}
                  >
                    <option>New</option>
                    <option>Open</option>
                    <option>Fixed</option>
                    <option>Closed</option>
                    <option>ReOpened</option>
                    <option>Rejected</option>
                    <option>Deferred</option>
                  </select>
                </td>
              </tr>
              <br />
              <tr>
                <td className="assigned_to">
                  <label htmlFor="assignedTo" className="labelat">
                    Assigned To
                  </label>
                  <select
                    type="text"
                    name="assignedTo"
                    id="assignedTo"
                    placeholder="Assigned To"
                    onChange={this.handlechange}
                  >
                    <option>User1</option>
                  </select>
                </td>
                <td className="fixed_by">
                  <label htmlFor="fixedBy" className="labelfb">
                    Fixed By
                  </label>
                  <select
                    type="text"
                    name="fixedBy"
                    id="fixedBy"
                    placeholder="Fixed By"
                    onChange={this.handlechange}
                  >
                    <option>User1</option>
                  </select>
                </td>
              </tr>
              <br />
              <tr>
                <td className="fixed_date">
                  <label htmlFor="fixedDate" className="labelfd">
                    Fixed Date
                  </label>
                  <input
                    type="Date"
                    name="fixedDate"
                    id="fixedDate"
                    placeholder="Fixed Date"
                    onChange={this.handlechange}
                  />
                </td>
                <td className="avalable_in">
                  <label htmlFor="avalableIn" className="labela">
                    Available In
                  </label>
                  <input
                    type="text"
                    name="avalableIn"
                    id="avalableIn"
                    placeholder="Available In"
                    onChange={this.handlechange}
                  />
                </td>
              </tr>
              <br />
              <button type="submit" className="submit_defect">
                Submit Defect
              </button>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
