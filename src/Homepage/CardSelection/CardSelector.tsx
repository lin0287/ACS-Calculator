import {Accordion} from "react-bootstrap";
import {OffensiveManuevers} from "../../Manuevers/OffensiveManuevers";
import {SupportiveManuevers} from "../../Manuevers/Supportive Manuevers";
import {DefensiveManuevers} from "../../Manuevers/DefensiveManuevers";
import React from "react";
import ManeuversCardGroup from "../../Manuevers/ManueversCardGroup";

function CardSelector() {
  return (
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header><h6>Offensive Maneuvers</h6></Accordion.Header>
          <Accordion.Body>
            <ManeuversCardGroup maneuvers={OffensiveManuevers} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><h6>Supportive Maneuvers</h6></Accordion.Header>
          <Accordion.Body>
            <ManeuversCardGroup maneuvers={SupportiveManuevers} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><h6>Defensive Maneuvers</h6></Accordion.Header>
          <Accordion.Body>
            <ManeuversCardGroup maneuvers={DefensiveManuevers} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}

export default CardSelector;
