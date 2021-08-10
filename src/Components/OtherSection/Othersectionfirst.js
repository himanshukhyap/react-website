import React from "react";
import "./Othersectionfirst.css";
import { Container, Row, Col } from "react-bootstrap";
export default function Othersectionfirst() {
  return (
    <div className="obackcolor">
      <div className="ohead">
        <h3 className="oHeadr">Funfact</h3>
        <h2 className="otitle">Strength in Numbers</h2>
      </div>
      <div>
        <Container className="omargin">
          <Row>
            <Col>
              <div className="ocentre">
                <span className="elementor-counter-number">23M+</span>
                <div className="elementor-counter-title">
                  Learners &amp; counting
                </div>
              </div>
            </Col>
            <Col>
              <div className="ocentre">
                <span className="elementor-counter-number">130K+</span>
                <div className="elementor-counter-title">Total courses</div>
              </div>{" "}
            </Col>
            <Col>
              <div className="ocentre">
                <span className="elementor-counter-number">36+</span>
                <div className="elementor-counter-title">Languages</div>
              </div>{" "}
            </Col>
            <Col>
              <div className="ocentreee">
                <span className="elementor-counter-number">89%</span>
                <div className="elementor-counter-title">
                  Successful students
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
