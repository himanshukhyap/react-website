import React from "react";
import "./sectionlast.css";
import { FaSignal } from "react-icons/fa";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineArrowRight
} from "react-icons/ai";
import {
  Nav,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
function SectionLast() {
  return (
    <div className="sectionpart">
      <h3 className="qq">Featured Courses</h3>
      <h2 className="ww">Pick a Course to Get Started</h2>
      <div>
        <Nav className="justify-content" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" className="activee">
              All Category
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="colorr">
              Artificial Intelligence
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="colorr">
              Business & Management
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="colorr">
              Computer Science
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="colorr">
              Design Architect
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="ll">
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "24rem" }}>
                <div>
                  <Card.Img
                    variant="top"
                    src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/course_image7.jpg"
                  />
                  <div className="xx">
                    <button className="dd">Art</button>
                    <button className="cc">design</button>
                  </div>
                  <div className="price">
                    <span className="course">$500 </span>
                  </div>
                </div>
                <div className="pp">
                  <Card.Body>
                    <Card.Title>
                      <a
                        className="adesign"
                        href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                      >
                        Music Theory Learn New student &amp; Fundamentals
                      </a>
                    </Card.Title>
                    <Nav className="list-unstyled">
                      <Nav.Item>
                        <FaSignal color="#F14D5D" />
                        beginner
                      </Nav.Item>
                      <Nav.Item style={{ paddingLeft: "132px" }}>
                        <AiOutlineClockCircle color="#F14D5D" />
                        10 week
                      </Nav.Item>
                    </Nav>
                  </Card.Body>

                  <Card.Body>
                    <img
                      src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"
                      alt="artincorsese"
                      className="m"
                      data-ll-status="loaded"
                    />

                    <a
                      style={{ textDecoration: "none", paddingLeft: "5px" }}
                      href="https://demo.themewinter.com/wp/courselog/profile/artincorsese/"
                    >
                      <span>artincorsese</span>
                    </a>
                  </Card.Body>

                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      <Nav>
                        <Nav.Item className="rr">
                          <AiOutlineStar color="#FF912C" />
                          <AiOutlineStar color="#FF912C" />
                          <AiOutlineStar color="#FF912C" /> <AiOutlineStar />
                          <AiOutlineStar />
                        </Nav.Item>
                        <Nav.Item className="ff">
                          <a
                            href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                            className="btnn"
                          >
                            Know details{" "}
                            <i>
                              <AiOutlineArrowRight />
                            </i>
                          </a>
                        </Nav.Item>
                      </Nav>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "24rem" }}>
                <div>
                  <Card.Img
                    variant="top"
                    src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/course_image7.jpg"
                  />
                  <div className="xx">
                    <button className="dd">Art</button>
                    <button className="cc">design</button>
                  </div>
                  <div className="price">
                    <span className="course">$500 </span>
                  </div>
                </div>
                <div className="pp">
                  <Card.Body>
                    <Card.Title>
                      <a
                        className="adesign"
                        href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                      >
                        Music Theory Learn New student &amp; Fundamentals
                      </a>
                    </Card.Title>
                    <Nav className="list-unstyled">
                      <Nav.Item>
                        <FaSignal color="#F14D5D" />
                        beginner
                      </Nav.Item>
                      <Nav.Item style={{ paddingLeft: "132px" }}>
                        <AiOutlineClockCircle color="#F14D5D" />
                        10 week
                      </Nav.Item>
                    </Nav>
                  </Card.Body>

                  <Card.Body>
                    <img
                      src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"
                      alt="artincorsese"
                      className="m"
                      data-ll-status="loaded"
                    />

                    <a
                      style={{ textDecoration: "none", paddingLeft: "5px" }}
                      href="https://demo.themewinter.com/wp/courselog/profile/artincorsese/"
                    >
                      <span>artincorsese</span>
                    </a>
                  </Card.Body>

                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      <Nav>
                        <Nav.Item className="rr">
                          <AiOutlineStar color="#FF912C" />
                          <AiOutlineStar color="#FF912C" />
                          <AiOutlineStar color="#FF912C" /> <AiOutlineStar />
                          <AiOutlineStar />
                        </Nav.Item>
                        <Nav.Item className="ff">
                          <a
                            href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                            className="btnn"
                          >
                            Know details{" "}
                            <i>
                              <AiOutlineArrowRight />
                            </i>
                          </a>
                        </Nav.Item>
                      </Nav>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "24rem" }}>
                <div>
                  <Card.Img
                    variant="top"
                    src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/course_image7.jpg"
                  />
                  <div className="xx">
                    <button className="dd">Art</button>
                    <button className="cc">design</button>
                  </div>
                  <div className="price">
                    <span className="course">$500 </span>
                  </div>
                </div>
                <div className="pp">
                  <Card.Body>
                    <Card.Title>
                      <a
                        className="adesign"
                        href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                      >
                        Music Theory Learn New student &amp; Fundamentals
                      </a>
                    </Card.Title>
                    <Nav className="list-unstyled">
                      <Nav.Item>
                        <FaSignal color="#F14D5D" />
                        beginner
                      </Nav.Item>
                      <Nav.Item style={{ paddingLeft: "132px" }}>
                        <AiOutlineClockCircle color="#F14D5D" />
                        10 week
                      </Nav.Item>
                    </Nav>
                  </Card.Body>

                  <Card.Body>
                    <img
                      src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"
                      alt="artincorsese"
                      className="m"
                      data-ll-status="loaded"
                    />

                    <a
                      style={{ textDecoration: "none", paddingLeft: "5px" }}
                      href="https://demo.themewinter.com/wp/courselog/profile/artincorsese/"
                    >
                      <span>artincorsese</span>
                    </a>
                  </Card.Body>

                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      <Nav>
                        <Nav.Item className="rr">
                          <AiOutlineStar color="#FF912C" />
                          <AiOutlineStar color="#FF912C" />
                          <AiOutlineStar color="#FF912C" /> <AiOutlineStar />
                          <AiOutlineStar />
                        </Nav.Item>
                        <Nav.Item className="ff">
                          <a
                            href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                            className="btnn"
                          >
                            Know details{" "}
                            <i>
                              <AiOutlineArrowRight />
                            </i>
                          </a>
                        </Nav.Item>
                      </Nav>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="tt">
          <Container>
            <Row>
              <Col>
                <Card style={{ width: "24rem" }}>
                  <div>
                    <Card.Img
                      variant="top"
                      src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/course_image7.jpg"
                    />
                    <div className="xx">
                      <button className="dd">Art</button>
                      <button className="cc">design</button>
                    </div>
                    <div className="price">
                      <span className="course">$500 </span>
                    </div>
                  </div>
                  <div className="pp">
                    <Card.Body>
                      <Card.Title>
                        <a
                          className="adesign"
                          href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                        >
                          Music Theory Learn New student &amp; Fundamentals
                        </a>
                      </Card.Title>
                      <Nav className="list-unstyled">
                        <Nav.Item>
                          <FaSignal color="#F14D5D" />
                          beginner
                        </Nav.Item>
                        <Nav.Item style={{ paddingLeft: "132px" }}>
                          <AiOutlineClockCircle color="#F14D5D" />
                          10 week
                        </Nav.Item>
                      </Nav>
                    </Card.Body>

                    <Card.Body>
                      <img
                        src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"
                        alt="artincorsese"
                        className="m"
                        data-ll-status="loaded"
                      />

                      <a
                        style={{ textDecoration: "none", paddingLeft: "5px" }}
                        href="https://demo.themewinter.com/wp/courselog/profile/artincorsese/"
                      >
                        <span>artincorsese</span>
                      </a>
                    </Card.Body>

                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <Nav>
                          <Nav.Item className="rr">
                            <AiOutlineStar color="#FF912C" />
                            <AiOutlineStar color="#FF912C" />
                            <AiOutlineStar color="#FF912C" /> <AiOutlineStar />
                            <AiOutlineStar />
                          </Nav.Item>
                          <Nav.Item className="ff">
                            <a
                              href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                              className="btnn"
                            >
                              Know details{" "}
                              <i>
                                <AiOutlineArrowRight />
                              </i>
                            </a>
                          </Nav.Item>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "24rem" }}>
                  <div>
                    <Card.Img
                      variant="top"
                      src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/course_image7.jpg"
                    />
                    <div className="xx">
                      <button className="dd">Art</button>
                      <button className="cc">design</button>
                    </div>
                    <div className="price">
                      <span className="course">$500 </span>
                    </div>
                  </div>
                  <div className="pp">
                    <Card.Body>
                      <Card.Title>
                        <a
                          className="adesign"
                          href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                        >
                          Music Theory Learn New student &amp; Fundamentals
                        </a>
                      </Card.Title>
                      <Nav className="list-unstyled">
                        <Nav.Item>
                          <FaSignal color="#F14D5D" />
                          beginner
                        </Nav.Item>
                        <Nav.Item style={{ paddingLeft: "132px" }}>
                          <AiOutlineClockCircle color="#F14D5D" />
                          10 week
                        </Nav.Item>
                      </Nav>
                    </Card.Body>

                    <Card.Body>
                      <img
                        src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"
                        alt="artincorsese"
                        className="m"
                        data-ll-status="loaded"
                      />

                      <a
                        style={{ textDecoration: "none", paddingLeft: "5px" }}
                        href="https://demo.themewinter.com/wp/courselog/profile/artincorsese/"
                      >
                        <span>artincorsese</span>
                      </a>
                    </Card.Body>

                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <Nav>
                          <Nav.Item className="rr">
                            <AiOutlineStar color="#FF912C" />
                            <AiOutlineStar color="#FF912C" />
                            <AiOutlineStar color="#FF912C" /> <AiOutlineStar />
                            <AiOutlineStar />
                          </Nav.Item>
                          <Nav.Item className="ff">
                            <a
                              href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                              className="btnn"
                            >
                              Know details{" "}
                              <i>
                                <AiOutlineArrowRight />
                              </i>
                            </a>
                          </Nav.Item>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "24rem" }}>
                  <div>
                    <Card.Img
                      variant="top"
                      src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/course_image7.jpg"
                    />
                    <div className="xx">
                      <button className="dd">Art</button>
                      <button className="cc">design</button>
                    </div>
                    <div className="price">
                      <span className="course">$500 </span>
                    </div>
                  </div>
                  <div className="pp">
                    <Card.Body>
                      <Card.Title>
                        <a
                          className="adesign"
                          href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                        >
                          Music Theory Learn New student &amp; Fundamentals
                        </a>
                      </Card.Title>
                      <Nav className="list-unstyled">
                        <Nav.Item>
                          <FaSignal color="#F14D5D" />
                          beginner
                        </Nav.Item>
                        <Nav.Item style={{ paddingLeft: "132px" }}>
                          <AiOutlineClockCircle color="#F14D5D" />
                          10 week
                        </Nav.Item>
                      </Nav>
                    </Card.Body>

                    <Card.Body>
                      <img
                        src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"
                        alt="artincorsese"
                        className="m"
                        data-ll-status="loaded"
                      />

                      <a
                        style={{ textDecoration: "none", paddingLeft: "5px" }}
                        href="https://demo.themewinter.com/wp/courselog/profile/artincorsese/"
                      >
                        <span>artincorsese</span>
                      </a>
                    </Card.Body>

                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <Nav>
                          <Nav.Item className="rr">
                            <AiOutlineStar color="#FF912C" />
                            <AiOutlineStar color="#FF912C" />
                            <AiOutlineStar color="#FF912C" /> <AiOutlineStar />
                            <AiOutlineStar />
                          </Nav.Item>
                          <Nav.Item className="ff">
                            <a
                              href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
                              className="btnn"
                            >
                              Know details{" "}
                              <i>
                                <AiOutlineArrowRight />
                              </i>
                            </a>
                          </Nav.Item>
                        </Nav>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ekit-btn-wraper">
          <a
            href="https://demo.themewinter.com/wp/courselog/courses/"
            className="elementskit-btn  whitespace--normal"
          >
            Browse more courses
            <i aria-hidden="true" class="tsicon tsicon-right_arrow"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionLast;
