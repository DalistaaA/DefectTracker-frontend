import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to codelife.io</h2>
          <p>
            This is how to build a website with React, React-Router & React
            Bootstrap
          </p>
          <p>
            This is how to build a website with React, React-Router & React
            Bootstrap
          </p>
          <p>
            This is how to build a website with React, React-Router & React
            Bootstrap
          </p>
          <p>
            This is how to build a website with React, React-Router & React
            Bootstrap
          </p>
          <p>
            This is how to build a website with React, React-Router & React
            Bootstrap
          </p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/pexels-photo-91227 Cropped.jpeg"
              circle
              className="profile-pic"
            />
            <h3>Frank</h3>
            <p>
              This is gonna be a happy little seascape. If it's not what you
              want - stop and change it. Don't just keep going and expect it
              will get better. Let's give him a friend too. Everybody needs a
              friend. It's beautiful - and we haven't even done anything to it
              yet. We'll make some happy little bushes here. It's a good way of
              getting rid of all your anxieties and hostilities.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/pexels-photo-842567 Cropped.jpeg"
              circle
              className="profile-pic"
            />
            <h3>Alpho</h3>
            <p>
              This is gonna be a happy little seascape. If it's not what you
              want - stop and change it. Don't just keep going and expect it
              will get better. Let's give him a friend too. Everybody needs a
              friend. It's beautiful - and we haven't even done anything to it
              yet. We'll make some happy little bushes here. It's a good way of
              getting rid of all your anxieties and hostilities.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/pexels-photo-935756 Cropped.jpeg"
              circle
              className="profile-pic"
            />
            <h3>Lauren</h3>
            <p>
              This is gonna be a happy little seascape. If it's not what you
              want - stop and change it. Don't just keep going and expect it
              will get better. Let's give him a friend too. Everybody needs a
              friend. It's beautiful - and we haven't even done anything to it
              yet. We'll make some happy little bushes here. It's a good way of
              getting rid of all your anxieties and hostilities.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
