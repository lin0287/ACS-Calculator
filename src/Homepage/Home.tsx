import React from 'react';
import {Accordion} from "react-bootstrap";
import ManueversCardGroup from "../Manuevers/ManueversCardGroup";
import {OffensiveManuevers} from "../Manuevers/OffensiveManuevers";
import {SupportiveManuevers} from "../Manuevers/Supportive Manuevers";
import {DefensiveManuevers} from "../Manuevers/DefensiveManuevers";

function Home() {
  return (
    <div>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Offensive Manuevers</Accordion.Header>
          <Accordion.Body>
            <ManueversCardGroup maneuvers={OffensiveManuevers}/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Supportive Manuevers</Accordion.Header>
          <Accordion.Body>
            <ManueversCardGroup maneuvers={SupportiveManuevers}/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Defensive Manuevers</Accordion.Header>
          <Accordion.Body>
            <ManueversCardGroup maneuvers={DefensiveManuevers}/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Home;
