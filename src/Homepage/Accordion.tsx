import {Accordion} from "react-bootstrap";
import {OffensiveManuevers} from "../Manuevers/OffensiveManuevers";
import {SupportiveManuevers} from "../Manuevers/Supportive Manuevers";
import {DefensiveManuevers} from "../Manuevers/DefensiveManuevers";
import React from "react";
import ManeuversCardGroup from "../Manuevers/ManueversCardGroup";
import {CardSelectionProvider} from "./CardSelectionContext";

function CardSelector() {
  return (
    <CardSelectionProvider>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Offensive Maneuvers</Accordion.Header>
          <Accordion.Body>
            <ManeuversCardGroup maneuvers={OffensiveManuevers} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Supportive Maneuvers</Accordion.Header>
          <Accordion.Body>
            <ManeuversCardGroup maneuvers={SupportiveManuevers} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Defensive Maneuvers</Accordion.Header>
          <Accordion.Body>
            <ManeuversCardGroup maneuvers={DefensiveManuevers} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </CardSelectionProvider>
  );
}

export default CardSelector;
