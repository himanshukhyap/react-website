import React from "react";
import "./Othersectionfirst.css";
// import { AiOutline } from "react-icons/ai";
import { AiOutline } from "react-icons/ai";
import { Card, Carousel } from "react-bootstrap";
export default function Othersectionsecond() {
  return (
    <div className="obackcolor">
      <div className="ohead">
        <h3 className="oHeadr">Testimonials</h3>
        <h2 className="otitle">Student Community Feedback</h2>
      </div>
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <AiOutline color="yellow" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
