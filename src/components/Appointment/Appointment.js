import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const Appointment = () => {
  return (
    <div className="details-wrapper">
      <div className="container">
        <Form className="w-75 mx-auto bg-dark p-5">
          <h2 className="text-center text-light mb-5">Book Your Appointment</h2>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control placeholder="Date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Select defaultValue="Choose...">
                <option>Choose Doctor</option>
                <option>Dr. Martin</option>
                <option>Dr. John</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Appointment;
