import Card from 'react-bootstrap/Card';
import "./ManueverStyling.css"
import {Col, Container, Row} from "react-bootstrap";

interface Maneuver {
  value: any;
  Name: string;
}

function ManeuversCardGroup({ maneuvers }: { maneuvers: Maneuver[] }) {
  const maneuverChunks = Array.from({ length: Math.ceil(maneuvers.length / 4) });

  const maneuverRows = maneuverChunks.map((_, index) => (
    <Row xs={1} md={4} className="g-4" key={index}>
      {maneuvers.slice(index * 4, index * 4 + 4).map((maneuver, idx) => (
        <Col key={idx}>
          <Card className="card">
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
