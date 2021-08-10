import React from "react";
import "./sectiontop.css";

import { AiOutlineCheck } from "react-icons/ai";
import {
  Button,
  Form,
  FormControl,
  Row,
  Container,
  Col
} from "react-bootstrap";
export default function SectionTop() {
  return (
    <div className="imagg">
      <Container>
        <Row>
          <Col sm={6}>
            <div className="forstyle">
              <h3 className="subtitle">The Leader in Online Learning</h3>
              <h2 className="section-title">
                Master the Skills to <br />
                Drive your Career.
              </h2>

              <p className="topic">
                Free online courses from the world’s leading experts.
                <br />
                Join 17 million learners today.
              </p>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search for courses"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <div className="margintop">
                <ul>
                  <li className="hide">
                    <span>
                      <AiOutlineCheck className="check" />
                    </span>
                    <span>Access more then 100K online courses.</span>
                  </li>
                  <li className="hide">
                    <span>
                      <AiOutlineCheck className="check" />
                    </span>
                    <span>
                      Learn with experts from world-leading universities.
                    </span>
                  </li>
                  <li className="hide">
                    <span>
                      <AiOutlineCheck className="check" />
                    </span>
                    <span>
                      Learn the high-impact skills that top companies want.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="zz">
              <div className="textareaa">
                <h3>
                  <span style={{ color: "blue" }}>Accredited Courses</span>
                </h3>
                <p>One subscription - All content.</p>
              </div>

              <>
                <img
                  className="imagggg"
                  width="96"
                  height="136"
                  src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2020/12/hero_area_content_arrow.png"
                  alt=""
                />
              </>
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.725"
                  height="9.656"
                  viewBox="0 0 9.725 9.656"
                >
                  <path
                    id="shape3"
                    d="M8.928,9.911A3.859,3.859,0,0,1,5.793,6.845a.9.9,0,0,0-1.045-.836.966.966,0,0,0-.766.766A3.937,3.937,0,0,1,.845,9.911a1,1,0,0,0-.836,1.115.966.966,0,0,0,.766.766,3.859,3.859,0,0,1,3.136,3.066.9.9,0,0,0,1.115.766.966.966,0,0,0,.766-.766,3.7,3.7,0,0,1,3.136-3.066.9.9,0,0,0,.766-1.115A.884.884,0,0,0,8.928,9.911Z"
                    transform="translate(0 -6)"
                    fill="#f5ac00"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.097"
                  height="19.953"
                  viewBox="0 0 20.097 19.953"
                >
                  <path
                    id="shape1"
                    d="M18.45,14.082a7.975,7.975,0,0,1-6.48-6.336A1.861,1.861,0,0,0,9.81,6.019,2,2,0,0,0,8.226,7.6a8.136,8.136,0,0,1-6.48,6.48,2.069,2.069,0,0,0-1.728,2.3A2,2,0,0,0,1.6,17.97a7.975,7.975,0,0,1,6.48,6.336,1.868,1.868,0,0,0,2.3,1.584,2,2,0,0,0,1.584-1.584,7.637,7.637,0,0,1,6.48-6.336,1.868,1.868,0,0,0,1.584-2.3A1.828,1.828,0,0,0,18.45,14.082Z"
                    transform="translate(0 -6)"
                    fill="#f14d5d"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                >
                  <path
                    id="shape2"
                    d="M11.935,11.266A5.176,5.176,0,0,1,7.743,7.138a1.206,1.206,0,0,0-1.4-1.126A1.3,1.3,0,0,0,5.321,7.044,5.282,5.282,0,0,1,1.13,11.266a1.346,1.346,0,0,0-1.118,1.5A1.3,1.3,0,0,0,1.037,13.8a5.176,5.176,0,0,1,4.192,4.128,1.209,1.209,0,0,0,1.49,1.032,1.3,1.3,0,0,0,1.025-1.032A4.957,4.957,0,0,1,11.935,13.8a1.217,1.217,0,0,0,1.025-1.5A1.187,1.187,0,0,0,11.935,11.266Z"
                    transform="translate(0 -6)"
                    fill="#2878eb"
                  ></path>
                </svg>
              </>
              {/* <div>
              <h3>Browse Categories</h3>
              <h2> Popular Topics to Learn </h2>
            </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
