import React, { Component } from "react";
/*import { Jumbotron, Grid Row, Col, Image, Button } from "react-bootstrap";*/
import "./SignUp.css";
//import axios from "axios";

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/
// );

// const formValid = formErrors => {
//   let valid = true;

//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });
//   return valid;
// };

export default class SignUp extends Component {
  //constructor(props) {
  //super(props);

  state = {
    first_name: null,
    last_name: null,
    email: null,
    designation: null,
    password: null,
    cpassword: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8080/DefectTrackerSystem/saveUser", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  };

  //   this.handleChangeFName = this.handleChangeFName.bind(this);
  //   this.handleChangeLName = this.handleChangeLName.bind(this);
  //   this.handleChangeEmail = this.handleChangeEmail.bind(this);
  //   this.handleChangeDesignation = this.handleChangeDesignation.bind(this);
  //   this.handleChangePassword = this.handleChangePassword.bind(this);
  //   this.handleChangeCPassword = this.handleChangeCPassword.bind(this);

  //   this.handleSubmit = this.handleSubmit.bind(this);
  //}

  // handleChangeFName = event => {
  //   this.setState({ first_name: event.target.value });
  // };
  // handleChangeLName = event => {
  //   this.setState({ last_name: event.target.value });
  // };
  // handleChangeEmail = event => {
  //   this.setState({ email: event.target.value });
  // };
  // handleChangeDesignation = event => {
  //   this.setState({ designation: event.target.value });
  // };
  // handleChangePassword = event => {
  //   this.setState({ password: event.target.value });
  // };
  // handleChangeCPassword = event => {
  //   this.setState({ cpassword: event.target.value });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   console.log(
  //     JSON.stringify({
  //       first_name: this.state.first_name,
  //       last_name: this.state.last_name,
  //       email: this.state.email,
  //       designation: this.state.designation,
  //       password: this.state.password,
  //       cpassword: this.state.cpassword
  //     })
  //   );
  //   axios
  //     .post(
  //       `http://localhost:4200/DefectTrackerSystem/saveUser`,
  //       JSON.stringify({
  //         first_name: this.state.first_name,
  //         last_name: this.state.last_name,
  //         email: this.state.email,
  //         designation: this.state.designation,
  //         password: this.state.password,
  //         cpassword: this.state.cpassword
  //       }),
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //         }
  //       }
  //     )
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // };

  /*handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
    First Name : ${this.state.firstName}
    Last Name : ${this.state.lastName}
    Email : ${this.state.email}
    Password : ${this.state.password}
    `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    console.log("Name", name);
    console.log("value", value);

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "Minimun 3 characters required"
            : "";
        break;

      case "lastName":
        formErrors.lastName =
          value.length < 3 && value.length > 0
            ? "Minimun 3 characters required"
            : "";
        break;

      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "Invalid Email Address";
        break;

      case "password":
        formErrors.password =
          value.length < 6 && value.length > 0
            ? "Minimun 6 characters required"
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));*/

  render() {
    return (
      <div className="wrappers">
        <div className="form-wrappers">
          <h1>SignUp Form</h1>
          <form onSubmit={this.handleSubmit} className="forms">
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                id="first_name"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                id="last_name"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="designation">
              <label htmlFor="email">Designation</label>
              <select
                name="designation"
                id="designation"
                noValidate
                onChange={this.handleChange}
              >
                <option>Select Your Designation</option>
                <option>Software Engineer</option>
                <option>Senior Software Engineer</option>
                <option>QA Engineer</option>
                <option>Senior QA Engineer</option>
              </select>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="cpassword">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                name="cpassword"
                id="cpassword"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit" className="createAccount">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
