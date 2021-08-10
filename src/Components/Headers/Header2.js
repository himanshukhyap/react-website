import React from "react";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import "./header2.css";
export default function () {
  return (
    <div>
      <Row className="roww">
        <Col sm={8}>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
              <div>
                <a href="https://demo.themewinter.com/wp/courselog/">
                  <img
                    style={{ width: 191 }}
                    src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2020/02/logo.png"
                    alt="Courselog"
                    className="lazyloaded"
                    data-ll-status="loaded"
                  />
                </a>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  title="All Categories"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <a className="ekit-menu-nav-link">
                      <i className="ekit-menu-icon icon icon-list-2"></i>
                      Business Management
                      <i className="icon icon-down-arrow1 elementskit-submenu-indicator"></i>
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <a className="ekit-menu-nav-link">
                      <i className="ekit-menu-icon icon icon-Computer"></i>
                      Computer science
                      <i className="icon icon-down-arrow1 elementskit-submenu-indicator"></i>
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col sm={4}>
          <Navbar>
            <Container>
              <Navbar.Collapse className="justify-content-end">
                <NavDropdown title="Home" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <a
                      href="https://demo.themewinter.com/wp/courselog/"
                      className=" dropdown-item active"
                    >
                      Home One
                    </a>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <a
                      href="https://demo.themewinter.com/wp/courselog/"
                      className=" dropdown-item active"
                    >
                      Home One
                    </a>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Blog" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <a
                      href="https://demo.themewinter.com/wp/courselog/"
                      className=" dropdown-item active"
                    >
                      Blog
                    </a>
                  </NavDropdown.Item>
                </NavDropdown>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
}
