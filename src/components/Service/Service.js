import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { service, description, pic, id } = props.service;
  return (
    <div className="col-md-4 card-wrapper">
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={pic}
          style={{ width: "100%", height: "300px" }}
        />
        <Card.Body>
          <Card.Title>{service}</Card.Title>
          <Card.Text>{description.slice(0, 120)};</Card.Text>
          <Link to={`/details/${id}`}>
            <Button variant="primary">Learn More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
