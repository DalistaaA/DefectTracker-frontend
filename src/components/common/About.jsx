import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Image
          src="assets/pexels-photo-1059116.jpeg"
          className="header-image"
        />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="assets/pexels-photo-1059116.jpeg"
              className="about-profile-pic"
              rounded
            />
            <h3>Frank The Tank</h3>
            <p>
              From all of us here, I want to wish you happy painting and God
              bless, my friends. Let's put some happy trees and bushes back in
              here. There we go.
            </p>
            <p>
              From all of us here, I want to wish you happy painting and God
              bless, my friends. Let's put some happy trees and bushes back in
              here. There we go.
            </p>
            <p>
              From all of us here, I want to wish you happy painting and God
              bless, my friends. Let's put some happy trees and bushes back in
              here. There we go.
            </p>
            <p>
              From all of us here, I want to wish you happy painting and God
              bless, my friends. Let's put some happy trees and bushes back in
              here. There we go.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}
