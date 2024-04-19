import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css"; 

function CardComponent(props) {
  const { src, title, description, link, buttonText } = props;
  return (
    <div className="card-container">
      <Card className="custom-card">
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button href={link} variant="primary">
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
