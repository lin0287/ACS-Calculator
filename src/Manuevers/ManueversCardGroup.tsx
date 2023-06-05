import Card from 'react-bootstrap/Card';
import "./ManueverStyling.css"
import {Col, Container, Row} from "react-bootstrap";
import React, { useState } from 'react';

interface Maneuver {
  value: any;
  Name: string;
  ID:string
}

function ManeuversCardGroup({ maneuvers }: { maneuvers: Maneuver[] }) {
  const maneuverChunks = Array.from({ length: Math.ceil(maneuvers.length / 4) });

  const [selectedCards, setSelectedCards] = useState<string[]>([]); // Track the IDs of selected cards

  const handleCardClick = (id: string) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter((cardId) => cardId !== id)); // Remove the card ID if it's already selected
    } else {
      setSelectedCards([...selectedCards, id]); // Add the card ID if it's not selected
    }
  };

  const maneuverRows = maneuverChunks.map((_, index) => (
    <Row xs={1} md={4} className="g-4" key={index}>
      {maneuvers.slice(index * 4, index * 4 + 4).map((maneuver, idx) => (
        <Col key={idx}>
          <Card
            className={`card ${selectedCards.includes(maneuver.ID) ? 'selected' : ''}`} // Apply 'selected' class if the card is selected
            onClick={() => handleCardClick(maneuver.ID)}
          >
            <Card.Img className="maneuver" variant="top" src={maneuver.value} />
            <Card.Body>
              <Card.Title className="h6">{maneuver.Name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  ));

  return <Container>{maneuverRows}</Container>;
}

export default ManeuversCardGroup;
