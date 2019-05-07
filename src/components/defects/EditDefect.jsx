import React from "react";
import "./Defects.css";

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

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8080/DefectTracker/defect/saveDefect", {
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
                  <label htmlFor="defectId">Defect ID</label>
                  <input
                    type="text"
                    placeholder="Defect ID"
                    name="defectId"
                    id="defectId"
                    value={this.state.defectId}
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
                  <label htmlFor="stepsToRecreate">Steps to Recreate</label>
                  <textarea
                    type="text"
                    name="stepsToRecreate"
                    id="stepsToRecreate"
                    placeholder="Steps to Recreate"
                    value={this.state.stepsToRecreate}
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
                  <label htmlFor="defectType">Defect Type</label>
                  <select
                    name="defectType"
                    id="defectType"
                    placeholder="Defect Type"
                    value={this.state.defectType}
                    onChange={e => this.change(e)}
                  >
                    <option>UI</option>
                    <option>functionality</option>
                    <option>Enhancement</option>
                    <option>Performance</option>
                  </select>
                </td>
                <td className="entered_by">
                  <label htmlFor="enteredBy">Entered By</label>
                  <select
                    type="text"
                    name="enteredBy"
                    id="enteredBy"
                    placeholder="Entered By"
                    value={this.state.enteredBy}
                    onChange={e => this.change(e)}
                  >
                    <option>User1</option>
                  </select>
                </td>
              </tr>
              <br />
              <tr>
                <td className="entered_date">
                  <label htmlFor="enteredDate">Entered Date</label>
                  <input
                    type="Date"
                    name="enteredDate"
                    id="enteredDate"
                    placeholder="Entered Date"
                    value={this.state.enteredDate}
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
                  <label htmlFor="assignedTo">Assigned To</label>
                  <select
                    type="text"
                    name="assignedTo"
                    id="assignedTo"
                    placeholder="Assigned To"
                    value={this.state.assignedTo}
                    onChange={e => this.change(e)}
                  >
                    <option>User1</option>
                  </select>
                </td>
                <td className="fixed_by">
                  <label htmlFor="fixedBy">Fixed By</label>
                  <select
                    type="text"
                    name="fixedBy"
                    id="fixedBy"
                    placeholder="Fixed By"
                    value={this.state.fixedBy}
                    onChange={e => this.change(e)}
                  >
                    <option>User1</option>
                  </select>
                </td>
              </tr>
              <br />
              <tr>
                <td className="fixed_date">
                  <label htmlFor="fixedDate">Fixed Date</label>
                  <input
                    type="Date"
                    name="fixedDate"
                    id="fixedDate"
                    placeholder="Fixed Date"
                    value={this.state.fixedDate}
                    onChange={e => this.change(e)}
                  />
                </td>
                <td className="avalable_in">
                  <label htmlFor="avalableIn">Available In</label>
                  <input
                    type="text"
                    name="avalableIn"
                    id="avalableIn"
                    placeholder="Available In"
                    value={this.state.avalableIn}
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
