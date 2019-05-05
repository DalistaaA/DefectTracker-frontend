import React, { Component } from "react";
import "./News.css";
import { Grid, Col, Row, Image } from "react-bootstrap";

export default class News extends Component {
  render() {
    return (
      <div>
        <Image
          src="assets/pexels-photo-1059116.jpeg"
          className="header-image"
        />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
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
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/pexels-photo-1059116.jpeg" />
              <p>
                From all of us here, I want to wish you happy painting and God
                bless, my friends. Let's put some happy trees and bushes back in
                here. There we go.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
