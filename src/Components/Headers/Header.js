import React from "react";
import "./header.css";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
export default function Header() {
  return (
    <div className="heading">
      <Row>
        <Col sm={8}>
          <div className="toppmargin">
            <Navbar>
              <p className="text">
                New members: get your first 7 days of Courselog Premium for
                free!
              </p>
              <Nav className="me-auto">
                <a className="title" href="#home">
                  Unlock your discount now!
                </a>
              </Nav>
            </Navbar>
          </div>
        </Col>
        <Col sm={3} className="align">
          <div>
            <Navbar>
              <Nav className="me-auto">
                <Nav.Link className="link">
                  <div className="borderr">
                    <a href="https://facebook.com">
                      <i aria-hidden="true">
                        <FaFacebookF color="white" />
                      </i>
                    </a>
                  </div>
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link>
                  <div className="borderr">
                    <a href="https://facebook.com">
                      <i
                        aria-hidden="true"
                        className="icon icon-instagram-1"
                      ></i>
                      <FaInstagram color="white" />
                    </a>
                  </div>
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link>
                  <div className="borderr">
                    <a href="https://facebook.com" className="linkedin">
                      <i aria-hidden="true" className="icon icon-linkedin"></i>
                      <FaLinkedinIn color="white" />
                    </a>
                  </div>
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link>
                  <div className="borderr">
                    <a href="https://facebook.com" className="twitter">
                      <i aria-hidden="true" className="icon icon-twitter"></i>
                      <FaTwitter color="white" />
                    </a>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
        </Col>
      </Row>
    </div>
  );
}
