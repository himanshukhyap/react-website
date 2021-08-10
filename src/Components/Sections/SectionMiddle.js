import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./sectionmiddle.css";

export default function SectionMiddle() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="formargin">
        <h3 className="elementskit-section-subtitle  ">Browse Categories</h3>
        <h2 className="ekit-heading--title elementskit-section-title ">
          Popular Topics to Learn
        </h2>
      </div>
      <div className="secondmargin">
        <div className="forsize">
          <Carousel>
            <Carousel.Item>
              {/* <div className="owl-item active">
                <div className="single-course-category">
                  <div className="course-media">
                    <img
                      src="//demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/icon6.png"
                      alt="Data Science &amp; Analytics"
                      className="lazyloaded"
                      data-ll-status="loaded"
                    />
                    <noscript>
                      <img
                        src=" //demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/icon6.png"
                        alt="Data Science &amp; Analytics"
                      />
                    </noscript>

                    <div className="course-content">
                      <h3 className="course-category-title">
                        {" "}
                        <a href="https://demo.themewinter.com/wp/courselog/course-category/data-science-analytics/">
                          Data Science &amp; Analytics
                        </a>{" "}
                      </h3>
                      <p className="course-count">5 Courses</p>
                    </div>
                    <div className="hover-content">
                      <div className="course-content">
                        <h3 className="course-category-title">
                          <a href="https://demo.themewinter.com/wp/courselog/course-category/data-science-analytics/">
                            Data Science &amp; Analytics
                          </a>
                        </h3>
                        <div className="btn-wrap">
                          <a
                            className="course-button"
                            href="https://demo.themewinter.com/wp/courselog/course-category/data-science-analytics/"
                          >
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="ekit-btn-wraper">
          <a
            href="https://demo.themewinter.com/wp/courselog/courses/"
            className="elementskit-btn  whitespace--normal"
          >
            Browse all categories
            <i aria-hidden="true" className="tsicon tsicon-right_arrow"></i>
          </a>
        </div>
        <Container className="bottomargin">
          <Row>
            <Col>
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Featured In:
                </h2>
              </div>
            </Col>
            <Col>
              <img
                className="swiper"
                src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/logo5.png"
                alt="logo5"
                data-ll-status="loaded"
              />
            </Col>
            <Col>
              <img
                className="swiper"
                src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/logo4.png"
                alt="logo4"
                data-ll-status="loaded"
              />
            </Col>
            <Col>
              <img
                className="swiper"
                src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/logo3.png"
                alt="logo3"
                data-ll-status="loaded"
              />
            </Col>
            <Col>
              <img
                className="swiper"
                src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/logo1.png"
                alt="logo1"
                data-ll-status="loaded"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
