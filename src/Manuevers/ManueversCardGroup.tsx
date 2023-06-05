import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./ManueverStyling.css"

interface Maneuver {
  value: any;
  Name: string;
}

function ManeuversCardGroup({ maneuvers }: { maneuvers: Maneuver[] }) {
  return (
    <CardGroup>
      {maneuvers.map((maneuver, index) => (
        <Card key={index} className="card">
          <Card.Img className="maneuver" variant="top" src={maneuver.value} />
          <Card.Body>
            <Card.Title className="h6">{maneuver.Name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
}

export default ManeuversCardGroup;
