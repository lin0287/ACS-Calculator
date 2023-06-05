import Card from 'react-bootstrap/Card';
import "./ManueverStyling.css"
import {Col, Container, Row} from "react-bootstrap";
import React from 'react';
import {useCardSelection} from "../Homepage/CardSelectionContext";

interface Maneuver {
  value: any;
  Name: string;
  ID:string
}

interface ManeuversCardGroupProps {
  maneuvers: Maneuver[];
}

const ManeuversCardGroup: React.FC<ManeuversCardGroupProps> = ({ maneuvers }) => {
  const { selectedCards, handleCardClick } = useCardSelection();

  const maneuverChunks = Array.from({ length: Math.ceil(maneuvers.length / 4) });

  const maneuverRows = maneuverChunks.map((_, index) => (
    <Row xs={1} md={4} className="g-4" key={index}>
      {maneuvers.slice(index * 4, index * 4 + 4).map((maneuver, idx) => (
        <Col key={idx}>
          <Card
            className={`card ${selectedCards.includes(maneuver.ID) ? 'selected' : ''}`}
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
};

export default ManeuversCardGroup;
