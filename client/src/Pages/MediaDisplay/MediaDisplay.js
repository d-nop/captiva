import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import Webcam from "react-webcam";
import MyMedia from "./myMedia.png";
import GeoTagged from "./GeoTaggedIcon.png";
import "./MediaDisplay.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Background from "./plainBackground.jpg";
import Nav from "../../components/Nav/Nav.js";
import PawLogo2 from "./PawLogo2.png";

class MediaDisplay extends Component {
  render() {
    return (
      <div className="container MediaDisplay">
        <section>
          <Nav />
        </section>
        <Grid>
          <div className="container carousel-container" class="carousel">
            <div className="col-md-7">
              <div
                id="Carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="1"
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to="2" />
                  <li data-target="#myCarousel" data-slide-to="3" />
                  <li data-target="#myCarousel" data-slide-to="4" />
                  <li data-target="#myCarousel" data-slide-to="5" />
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <img src="./images/slide1of1.jpg" alt="First Slide" />
                  </div>
                  <div className="item">
                    <img src="./images/slide2.jpg" alt="Second Slide" />
                  </div>
                  <div className="item">
                    <img src="./images/slide3.jpg" alt="Third Slide" />
                  </div>
                  <div className="item">
                    <img src="./images/slide4.jpg" alt="Fourth Slide" />
                  </div>
                  <div className="item">
                    <img src="./images/slide5.jpg" alt="Fifth Slide" />
                  </div>
                </div>

                <a
                  className="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>

                <Row>
                  <Col xs={4}>
                    <div className="thumbnail">
                      <img src={PawLogo2} alt="paw" />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="thumbnail">
                      <img src={PawLogo2} alt="paw" />
                    </div>
                  </Col>

                  <Col xs={4}>
                    <div className="thumbnail">
                      <img src={PawLogo2} alt="paw" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4}>
                    <div className="thumbnail">
                      <img src={PawLogo2} alt="paw" />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="thumbnail">
                      <img src={PawLogo2} alt="paw" />
                    </div>
                  </Col>

                  <Col xs={4}>
                    <div className="thumbnail">
                      <img src={PawLogo2} alt="paw" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4}>
                    <div className="thumbnail">
                      <img src={PawLogo2} alt="paw" />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="thumbnail">
                      <img src={PawLogo2} alt="paw" />
                    </div>
                  </Col>

                  <Col xs={4}>
                    <div className="thumbnail">
                      <img src={PawLogo2} alt="paw" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} start>
                    <button id="MyMedia">
                      <img
                        src={MyMedia}
                        alt="My Media"
                        width="34"
                        height="34"
                        onClick={this.MyMedia}
                        GetMyMedia
                      />
                    </button>
                  </Col>
                  <Col xs={4} center>
                    <button id="MyMedia">
                      <img
                        src={PawLogo2}
                        alt="My Media"
                        width="34"
                        height="34"
                        onClick={this.PawLogo2}
                        GetMyMedia
                      />
                    </button>
                  </Col>
                  <Col xs={4} end>
                    <button id="GeotaggedMedia">
                      <img
                        src={GeoTagged}
                        alt="geotagged Media"
                        width="34"
                        height="34"
                        onClick={this.GeoTagged}
                        GetGeotaggedMedia
                      />
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}
export default MediaDisplay;