import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export default function CardContainer({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.hdurl} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.explanation}
        </Card.Text>
        <Button variant="primary" href={data.url} target="_blank" >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
