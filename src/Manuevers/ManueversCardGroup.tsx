import Card from 'react-bootstrap/Card';
import "./ManueverStyling.css"
import {Col, Container, Row} from "react-bootstrap";
import React from 'react';
import {useCardSelection} from "../Homepage/CardSelection/CardSelectionContext";

interface Maneuver {
  value: any;
  ID:string
}

interface ManeuversCardGroupProps {
  maneuvers: Maneuver[];
}

const ManeuversCardGroup: React.FC<ManeuversCardGroupProps> = ({ maneuvers }) => {
  const { selectedCards, handleCardClick } = useCardSelection();

  const maneuverChunks = Array.from({ length: Math.ceil(maneuvers.length / 5) });

  const maneuverRows = maneuverChunks.map((_, index) => (
    <Row xs={1} md={5} className="g-1" key={index}>
      {maneuvers.slice(index * 5, index * 5 + 5).map((maneuver, idx) => (
        <Col key={idx}>
          <Card
            className={`card ${selectedCards.includes(maneuver.ID) ? 'selected' : ''}`}
            onClick={() => handleCardClick(maneuver.ID)}
          >
            <Card.Img className="maneuver" variant="top" src={maneuver.value} />
          </Card>
        </Col>
      ))}
    </Row>
  ));

  return <Container>{maneuverRows}</Container>;
};

export default ManeuversCardGroup;
