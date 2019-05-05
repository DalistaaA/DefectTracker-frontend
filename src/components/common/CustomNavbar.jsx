import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">SGIC</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavDropdown title="Defect" eventKey={2}>
              <NavItem
                componentClass={Link}
                href="/defects"
                to="/defects"
                eventKey={2.1}
              >
                Add Defect
              </NavItem>
              <NavItem
                href="/listdefect"
                to="/listdefect"
                eventKey={2.2}
                componentClass={Link}
              >
                View Defects
              </NavItem>
            </NavDropdown>
            <NavDropdown title="User" eventKey={3}>
              <NavItem
                componentClass={Link}
                href="/users"
                to="/users"
                eventKey={3.1}
              >
                Sign Up
              </NavItem>
              <NavItem
                href="/listuser"
                to="/listuser"
                eventKey={3.2}
                componentClass={Link}
              >
                View User
              </NavItem>
            </NavDropdown>
            <NavDropdown title="Project" eventKey={4}>
              <NavItem
                href="/project"
                to="/project"
                eventKey={4.1}
                componentClass={Link}
              >
                Add Project
              </NavItem>
              <NavItem
                href="/listproject"
                to="/listproject"
                eventKey={4.2}
                componentClass={Link}
              >
                View Projects
              </NavItem>
            </NavDropdown>
            <NavDropdown title="Module" eventKey={5}>
              <NavItem
                href="/module"
                to="/module"
                eventKey={5.1}
                componentClass={Link}
              >
                Add Module
              </NavItem>
              <NavItem
                href="/listmodule"
                to="/listmodule"
                eventKey={5.2}
                componentClass={Link}
              >
                View Module
              </NavItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

/*
<NavItem  eventKey={3} componentClass={Link} href="/signup" to="/signup">SignUp</NavItem>
<NavItem eventKey={2} componentClass={Link} href="/defects" to="/defects">Defects</NavItem>
<NavItem eventKey={4} componentClass={Link} href="/project" to="/project">Project</NavItem>
*/
