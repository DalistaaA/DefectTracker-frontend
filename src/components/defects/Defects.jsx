import React from "react";
import "./Defects.css";
//import { Row, Col, Form } from "react-bootstrap";

export default class Defects extends React.Component {
  state = {
    defect_id: "",
    module: "",
    description: "",
    steps_to_recreate: "",
    severity: "",
    priority: "",
    defect_type: "",
    entered_by: "",
    entered_date: "",
    status: "",
    assigned_to: "",
    fixed_by: "",
    fixed_date: "",
    avalable_in: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8080/DefectTracker/saveDefect", {
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
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Defects Form</h1>
          <form>
            <table>
              <tr>
                <td className="defect_id">
                  <label htmlFor="defect_id">Defect ID</label>
                  <input
                    type="text"
                    placeholder="Defect ID"
                    name="defect_id"
                    id="defect_id"
                    value={this.state.defect_id}
                    onChange={e => this.change(e)}
                    /*onChange={e => this.setState({ defect_id: e.target.value })}*/ // assign value without setstate
                  />
                </td>
                <td className="module">
                  <label htmlFor="module">Module</label>
                  <input
                    type="text"
                    name="module"
                    id="module"
                    placeholder="Module"
                    value={this.state.module}
                    onChange={e => this.change(e)}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td className="description">
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={e => this.change(e)}
                  />
                </td>
                <td className="steps_to_recreate">
                  <label htmlFor="steps_to_recreate">Steps to Recreate</label>
                  <textarea
                    type="text"
                    name="steps_to_recreate"
                    id="steps_to_recreate"
                    placeholder="Steps to Recreate"
                    value={this.state.steps_to_recreate}
                    onChange={e => this.change(e)}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td className="severity">
                  <label htmlFor="severity">Severity</label>
                  <select
                    name="severity"
                    id="severity"
                    placeholder="Severity"
                    value={this.state.severity}
                    onChange={e => this.change(e)}
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </td>
                <td className="priority">
                  <label htmlFor="priority">Priority</label>
                  <select
                    name="priority"
                    id="priority"
                    placeholder="Priority"
                    value={this.state.priority}
                    onChange={e => this.change(e)}
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
                  <label htmlFor="defect_type">Defect Type</label>
                  <select
                    name="defect_type"
                    id="defect_type"
                    placeholder="Defect Type"
                    value={this.state.defect_type}
                    onChange={e => this.change(e)}
                  >
                    <option>UI</option>
                    <option>functionality</option>
                    <option>Enhancement</option>
                    <option>Performance</option>
                  </select>
                </td>
                <td className="entered_by">
                  <label htmlFor="entered_by">Entered By</label>
                  <select
                    type="text"
                    name="entered_by"
                    id="entered_by"
                    placeholder="Entered By"
                    value={this.state.entered_by}
                    onChange={e => this.change(e)}
                  >
                    <option>User1</option>
                  </select>
                </td>
              </tr>
              <br />
              <tr>
                <td className="entered_date">
                  <label htmlFor="entered_date">Entered Date</label>
                  <input
                    type="Date"
                    name="entered_date"
                    id="entered_date"
                    placeholder="Entered Date"
                    value={this.state.entered_date}
                    onChange={e => this.change(e)}
                  />
                </td>
                <td className="status">
                  <label htmlFor="status">Status</label>
                  <select
                    type="text"
                    name="status"
                    id="status"
                    placeholder="Status"
                    value={this.state.status}
                    onChange={e => this.change(e)}
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
                  <label htmlFor="assigned_to">Assigned To</label>
                  <select
                    type="text"
                    name="assigned_to"
                    id="assigned_to"
                    placeholder="Assigned To"
                    value={this.state.assigned_to}
                    onChange={e => this.change(e)}
                  >
                    <option>User1</option>
                  </select>
                </td>
                <td className="fixed_by">
                  <label htmlFor="fixed_by">Fixed By</label>
                  <select
                    type="text"
                    name="fixed_by"
                    id="fixed_by"
                    placeholder="Fixed By"
                    value={this.state.fixed_by}
                    onChange={e => this.change(e)}
                  >
                    <option>User1</option>
                  </select>
                </td>
              </tr>
              <br />
              <tr>
                <td className="fixed_date">
                  <label htmlFor="fixed_date">Fixed Date</label>
                  <input
                    type="Date"
                    name="fixed_date"
                    id="fixed_date"
                    placeholder="Fixed Date"
                    value={this.state.fixed_date}
                    onChange={e => this.change(e)}
                  />
                </td>
                <td className="avalable_in">
                  <label htmlFor="avalable_in">Available In</label>
                  <input
                    type="text"
                    name="avalable_in"
                    id="avalable_in"
                    placeholder="Available In"
                    value={this.state.avalable_in}
                    onChange={e => this.change(e)}
                  />
                </td>
              </tr>
              <br />
              <button onClick={e => this.onSubmit(e)} className="submit_defect">
                Submit Defect
              </button>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
