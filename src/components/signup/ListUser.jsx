import React from "react";
import { DeleteUser } from "./DeleteUser";

export default class ListSignUp extends React.Component {
  state = {
    User: []
  };

  async componentDidMount() {
    // const url = "http://localhost:3000/AddDefect";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({ detail: data.AddDefect, loading: false });
    // console.log(data);
    this.viewUser();
  }
  //project view start
  viewUser() {
    fetch("http://localhost:8080/DefectTracker/user/findAllUsers")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ User: data });
      });
  }

  //project view end

  deleteu(e) {
    DeleteUser(e);
    if (DeleteUser) {
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="bs-example-project">
        <div className="bs-example">
          <h1 className="head_viewp">View All Users</h1>
          <table className="table table_widths">
            <thead>
              <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.User.map(e => (
                <tr>
                  <td>{e.userId}</td>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{e.designation}</td>
                  <td>{e.password}</td>
                  <td>{e.cpassword}</td>
                  <td>
                    <button className="btn-1">Edit</button>
                    <button
                      onClick={this.deleteu.bind(this, e.userId)}
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
